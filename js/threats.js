// Threats page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeVulnerabilityCategories();
    initializeTimelineAnimation();
});

function toggleCategory(categoryId) {
    const category = document.querySelector(`[data-category="${categoryId}"]`);
    const content = category.querySelector('.category-content');
    const button = category.querySelector('.expand-btn');
    
    if (content.classList.contains('expanded')) {
        // Collapse
        content.classList.remove('expanded');
        button.classList.remove('expanded');
    } else {
        // Expand
        content.classList.add('expanded');
        button.classList.add('expanded');
        
        // Animate vulnerability items
        const items = content.querySelectorAll('.vuln-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
            
            // Initial hidden state for animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        });
    }
}

function initializeVulnerabilityCategories() {
    const categories = document.querySelectorAll('.vulnerability-category');
    
    categories.forEach((category, index) => {
        const header = category.querySelector('.category-header');
        const categoryId = category.getAttribute('data-category');
        
        // Add click handler
        header.addEventListener('click', () => toggleCategory(categoryId));
        
        // Initial animation
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 150);
        
        // Set initial hidden state
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

function initializeTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Intersection Observer for timeline items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate timeline marker
                const marker = entry.target.querySelector('.timeline-marker');
                marker.style.transform = 'scale(1)';
                marker.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        
        const marker = item.querySelector('.timeline-marker');
        marker.style.transform = 'scale(0.8)';
        marker.style.opacity = '0.7';
        marker.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        
        observer.observe(item);
    });
}

// Add hover effects for motivation cards
document.addEventListener('DOMContentLoaded', function() {
    const motivationCards = document.querySelectorAll('.motivation-card');
    
    motivationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.motivation-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.motivation-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Add interactive effects for vulnerability items
document.addEventListener('DOMContentLoaded', function() {
    const vulnItems = document.querySelectorAll('.vuln-item');
    
    vulnItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a pulse effect when clicked
            this.style.transform = 'translateX(5px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateX(0) scale(1)';
            }, 200);
        });
    });
});

// Keyboard navigation for categories
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('category-header')) {
            e.preventDefault();
            const category = focusedElement.closest('.vulnerability-category');
            const categoryId = category.getAttribute('data-category');
            toggleCategory(categoryId);
        }
    }
});

// Make category headers focusable for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        header.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        });
    });
});