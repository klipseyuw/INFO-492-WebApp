// Citations page functionality

let allCitations = [];
let currentFilter = 'all';
let citationsLoaded = false;

document.addEventListener('DOMContentLoaded', function() {
    initializeCitations();
    initializeAnimations();
    loadCitationData();
});

function initializeCitations() {
    // Get all citation items
    allCitations = Array.from(document.querySelectorAll('.citation-item'));
    
    // Add initial animation to citation items
    allCitations.forEach((citation, index) => {
        citation.style.animationDelay = `${index * 0.1}s`;
        citation.classList.add('slide-up');
    });
}

function filterCitations(category) {
    // Update active button
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentFilter = category;
    
    // Filter citations
    allCitations.forEach(citation => {
        if (category === 'all') {
            citation.classList.remove('hidden');
        } else if (citation.classList.contains(category)) {
            citation.classList.remove('hidden');
        } else {
            citation.classList.add('hidden');
        }
    });
    
    // Update statistics
    updateFilterStats(category);
}

function updateFilterStats(category) {
    const visibleCitations = allCitations.filter(citation => 
        category === 'all' || citation.classList.contains(category)
    );
    
    // Could update a counter or stats display here
    console.log(`Showing ${visibleCitations.length} citations for category: ${category}`);
}

function copyCitation(button) {
    const citationText = button.getAttribute('data-citation');
    
    // Copy to clipboard
    navigator.clipboard.writeText(citationText).then(() => {
        // Show success feedback
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
        
        // Show notification
        showCopyNotification();
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy citation: ', err);
        
        // Fallback: show citation in alert
        alert('Citation copied:\n\n' + citationText);
    });
}

function showCopyNotification() {
    // Create notification if it doesn't exist
    let notification = document.querySelector('.copy-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.innerHTML = '<i class="fas fa-check-circle"></i> Citation copied to clipboard!';
        document.body.appendChild(notification);
    }
    
    // Show notification
    notification.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function loadMoreCitations() {
    const additionalCitations = [
        {
            year: "2020",
            type: "academic",
            categories: ["academic", "security"],
            title: "A Review of the Existing and Emerging Topics in Supply Chain Risk Management",
            authors: "Pournader, P., et al.",
            details: "Production and Operations Management, 29(7), 2946–2967.",
            summary: "Comprehensive review of supply chain risk management topics, including cybersecurity considerations and emerging threats.",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7283689/",
            doi: ""
        },
        {
            year: "2020",
            type: "academic", 
            categories: ["academic", "security"],
            title: "Managing cyber risk in supply chains: A review and research agenda",
            authors: "Ghadge, A., et al.",
            details: "Supply Chain Management: An International Journal, 25(2), 223–240.",
            summary: "Reviews current approaches to managing cyber risk in supply chains and proposes research agenda for future developments.",
            link: "https://researchportal.hw.ac.uk/files/25264894/SCMIJ_AAP.pdf",
            doi: ""
        },
        {
            year: "2021",
            type: "academic",
            categories: ["academic", "industry"],
            title: "The role of personal relationships in supply chain risk information sharing (RIS)",
            authors: "van der Walt, M.",
            details: "South African Journal of Economic and Management Sciences, 24(1), a3703.",
            summary: "Examines how personal relationships affect risk information sharing in supply chains, with implications for cybersecurity communication.",
            link: "https://sajems.org/index.php/sajems/article/view/3703/2382",
            doi: ""
        },
        {
            year: "2019",
            type: "academic",
            categories: ["academic", "ai", "security"],
            title: "RIoTS: Risk Analysis of IoT Supply Chain Threats",
            authors: "Kieras, D., Farooq, U., & Zhu, Q.",
            details: "arXiv:1911.12862.",
            summary: "Analyzes security risks in IoT supply chains, relevant to understanding cyber-physical vulnerabilities in logistics.",
            link: "https://arxiv.org/abs/1911.12862",
            doi: ""
        }
    ];
    
    const citationsList = document.getElementById('citationsList');
    const loadMoreBtn = document.querySelector('.btn-load-more');
    
    // Disable button temporarily
    loadMoreBtn.disabled = true;
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    // Simulate loading delay
    setTimeout(() => {
        additionalCitations.forEach((citation, index) => {
            const citationElement = createCitationElement(citation);
            citationElement.style.opacity = '0';
            citationElement.style.transform = 'translateY(30px)';
            citationsList.appendChild(citationElement);
            
            // Add to allCitations array
            allCitations.push(citationElement);
            
            // Animate in
            setTimeout(() => {
                citationElement.style.opacity = '1';
                citationElement.style.transform = 'translateY(0)';
                citationElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, index * 200);
        });
        
        // Re-enable button or hide if no more citations
        setTimeout(() => {
            loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> All Citations Loaded';
            loadMoreBtn.disabled = true;
        }, additionalCitations.length * 200);
        
    }, 1000);
}

function createCitationElement(citation) {
    const citationDiv = document.createElement('div');
    citationDiv.className = `citation-item ${citation.categories.join(' ')}`;
    citationDiv.setAttribute('data-year', citation.year);
    
    const typeClass = citation.type === 'academic' ? 'academic' : 
                     citation.type === 'industry' ? 'industry' : 
                     citation.type === 'security' ? 'security' : 'ai';
    
    citationDiv.innerHTML = `
        <div class="citation-header">
            <div class="citation-type ${typeClass}">${citation.type}</div>
            <div class="citation-year">${citation.year}</div>
        </div>
        <div class="citation-content">
            <h3>${citation.title}</h3>
            <p class="citation-authors">${citation.authors}</p>
            <p class="citation-details">${citation.details}</p>
            <p class="citation-summary">${citation.summary}</p>
            <div class="citation-actions">
                ${citation.link ? `<a href="${citation.link}" class="citation-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> ${citation.doi ? 'DOI: ' + citation.doi : 'View Source'}
                </a>` : ''}
                <button class="btn-copy" onclick="copyCitation(this)" 
                    data-citation="${citation.authors} (${citation.year}). ${citation.title} ${citation.details}">
                    <i class="fas fa-copy"></i> Copy Citation
                </button>
            </div>
        </div>
    `;
    
    return citationDiv;
}

function initializeAnimations() {
    // Animate stats cards
    const statCards = document.querySelectorAll('.stat-card');
    const methodologyCards = document.querySelectorAll('.methodology-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate numbers in stat cards
                if (entry.target.classList.contains('stat-card')) {
                    animateNumber(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial states and observe
    [...statCards, ...methodologyCards].forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

function animateNumber(element) {
    const targetNumber = parseInt(element.textContent);
    let currentNumber = 0;
    const increment = targetNumber / 20; // 20 steps
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            element.textContent = targetNumber;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(currentNumber);
        }
    }, 50);
}

function loadCitationData() {
    // This could load citation data from an external source
    // For now, we'll use the static data in the HTML
    citationsLoaded = true;
}

// Search functionality
function searchCitations(query) {
    const searchTerm = query.toLowerCase();
    
    allCitations.forEach(citation => {
        const title = citation.querySelector('h3').textContent.toLowerCase();
        const authors = citation.querySelector('.citation-authors').textContent.toLowerCase();
        const summary = citation.querySelector('.citation-summary').textContent.toLowerCase();
        
        const matches = title.includes(searchTerm) || 
                       authors.includes(searchTerm) || 
                       summary.includes(searchTerm);
        
        if (matches || searchTerm === '') {
            citation.classList.remove('hidden');
        } else {
            citation.classList.add('hidden');
        }
    });
}

// Sort citations by year, author, or title
function sortCitations(sortBy) {
    const citationsList = document.getElementById('citationsList');
    const sortedCitations = [...allCitations].sort((a, b) => {
        switch(sortBy) {
            case 'year':
                return parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year'));
            case 'author':
                const authorA = a.querySelector('.citation-authors').textContent;
                const authorB = b.querySelector('.citation-authors').textContent;
                return authorA.localeCompare(authorB);
            case 'title':
                const titleA = a.querySelector('h3').textContent;
                const titleB = b.querySelector('h3').textContent;
                return titleA.localeCompare(titleB);
            default:
                return 0;
        }
    });
    
    // Clear and re-append sorted citations
    citationsList.innerHTML = '';
    sortedCitations.forEach(citation => {
        citationsList.appendChild(citation);
    });
}

// Export citations to BibTeX format
function exportToBibTeX() {
    const visibleCitations = allCitations.filter(citation => 
        !citation.classList.contains('hidden')
    );
    
    let bibTeX = '';
    visibleCitations.forEach((citation, index) => {
        const title = citation.querySelector('h3').textContent;
        const authors = citation.querySelector('.citation-authors').textContent;
        const year = citation.getAttribute('data-year');
        const details = citation.querySelector('.citation-details').textContent;
        
        bibTeX += `@article{citation${index + 1},\n`;
        bibTeX += `  title={${title}},\n`;
        bibTeX += `  author={${authors}},\n`;
        bibTeX += `  year={${year}},\n`;
        bibTeX += `  journal={${details}}\n`;
        bibTeX += `}\n\n`;
    });
    
    // Create and download file
    const blob = new Blob([bibTeX], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logistics-ai-security-citations.bib';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key.toLowerCase()) {
            case 'f':
                e.preventDefault();
                // Focus search if we had one
                break;
            case 'c':
                if (e.shiftKey) {
                    e.preventDefault();
                    exportToBibTeX();
                }
                break;
        }
    }
});