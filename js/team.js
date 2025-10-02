// Team page functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeTeamAnimations();
    initializeInteractiveElements();
});

function initializeTeamAnimations() {
    // Animate member cards
    const memberCards = document.querySelectorAll('.member-card');
    const roleCards = document.querySelectorAll('.role-card');
    const insightItems = document.querySelectorAll('.insight-item');
    const findingCards = document.querySelectorAll('.finding-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Set initial states and observe
    [...memberCards, ...roleCards, ...insightItems, ...findingCards].forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

function initializeInteractiveElements() {
    // Add hover effects to member cards
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.member-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1) rotate(5deg)';
                avatar.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.member-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Add click interactions for role cards
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            const responsibilities = this.querySelector('.role-responsibilities');
            if (responsibilities) {
                // Toggle visibility of detailed responsibilities
                if (responsibilities.style.maxHeight === '0px' || !responsibilities.style.maxHeight) {
                    responsibilities.style.maxHeight = responsibilities.scrollHeight + 'px';
                    responsibilities.style.opacity = '1';
                } else {
                    responsibilities.style.maxHeight = '0px';
                    responsibilities.style.opacity = '0.5';
                }
            }
        });
        
        // Set initial state for responsibilities (collapsed on mobile)
        if (window.innerWidth <= 768) {
            const responsibilities = card.querySelector('.role-responsibilities');
            if (responsibilities) {
                responsibilities.style.maxHeight = '0px';
                responsibilities.style.overflow = 'hidden';
                responsibilities.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
                responsibilities.style.opacity = '0.5';
            }
        }
    });
    
    // Add interactive effects for insight items
    const insightItems = document.querySelectorAll('.insight-item');
    insightItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.insight-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(-5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.insight-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Add pulse animation to vulnerability insights
    const vulnerabilityItems = document.querySelectorAll('.insight-item.vulnerability');
    vulnerabilityItems.forEach(item => {
        setInterval(() => {
            const icon = item.querySelector('.insight-icon');
            if (icon) {
                icon.style.animation = 'pulse 1s ease-in-out';
                setTimeout(() => {
                    icon.style.animation = '';
                }, 1000);
            }
        }, 5000);
    });
}

// Add smooth scrolling between sections
function scrollToMember(memberName) {
    const memberCard = document.querySelector(`[data-member="${memberName}"]`);
    if (memberCard) {
        memberCard.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add highlight effect
        memberCard.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
        setTimeout(() => {
            memberCard.style.boxShadow = '';
        }, 2000);
    }
}

// Team member profile expansion
function expandMemberProfile(memberName) {
    const memberCard = document.querySelector(`[data-member="${memberName}"]`);
    if (!memberCard) return;
    
    const content = memberCard.querySelector('.member-content');
    const isExpanded = memberCard.classList.contains('expanded');
    
    if (isExpanded) {
        memberCard.classList.remove('expanded');
        content.style.maxHeight = '';
    } else {
        memberCard.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Dynamic content loading simulation
function loadAdditionalInsights() {
    const additionalInsights = [
        {
            icon: 'fas fa-clock',
            title: 'Real-time Operations',
            description: 'SF Express operates 24/7 with continuous data flow and real-time decision making, making system availability critical.',
            isVulnerability: false
        },
        {
            icon: 'fas fa-mobile-alt',
            title: 'Mobile Integration',
            description: 'Extensive use of mobile devices for scanning and tracking creates additional attack surfaces.',
            isVulnerability: true
        }
    ];
    
    const insightGrid = document.querySelector('.insight-grid');
    if (!insightGrid) return;
    
    additionalInsights.forEach((insight, index) => {
        setTimeout(() => {
            const insightElement = document.createElement('div');
            insightElement.className = `insight-item ${insight.isVulnerability ? 'vulnerability' : ''}`;
            insightElement.innerHTML = `
                <div class="insight-icon">
                    <i class="${insight.icon}"></i>
                </div>
                <div class="insight-text">
                    <h5>${insight.title}</h5>
                    <p>${insight.description}</p>
                </div>
            `;
            
            insightElement.style.opacity = '0';
            insightElement.style.transform = 'translateY(20px)';
            insightGrid.appendChild(insightElement);
            
            setTimeout(() => {
                insightElement.style.opacity = '1';
                insightElement.style.transform = 'translateY(0)';
                insightElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, 100);
        }, index * 500);
    });
}

// Export team data for other pages
window.teamData = {
    members: [
        {
            name: 'Kenta Lipsey',
            role: 'Security Analysis & Risk Assessment',
            aiUsage: 'Light user',
            focus: 'Curious perspective on AI effectiveness and stability'
        },
        {
            name: 'Hanrui Tang',
            role: 'Systems Integration & Data Analysis',
            aiUsage: 'Moderate enthusiast',
            focus: 'Strategic AI leveraging while maintaining security'
        },
        {
            name: 'Brian Yuan',
            role: 'Technical Implementation & Model Analysis',
            aiUsage: 'Moderate user',
            focus: 'Practical approach with awareness of AI limitations'
        },
        {
            name: 'Ajit Mallavarapu',
            role: 'AI Security & Threat Modeling',
            aiUsage: 'TBD',
            focus: 'Placeholder - AI security focus and threat analysis'
        }
    ],
    keyFindings: [
        'Critical infrastructure dependencies create cascading failure risks',
        'Data-centric operations require paramount data integrity',
        'Human-in-the-loop oversight is essential for AI transparency',
        'Rapidly evolving threats demand adaptive defense systems'
    ]
};

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .member-card.expanded .member-content {
        max-height: none !important;
    }
    
    .pulse-animation {
        animation: teamPulse 2s infinite;
    }
    
    @keyframes teamPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .highlight-effect {
        position: relative;
    }
    
    .highlight-effect::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 20px;
        z-index: -1;
        opacity: 0;
        animation: highlightGlow 2s ease-in-out;
    }
    
    @keyframes highlightGlow {
        0%, 100% { opacity: 0; }
        50% { opacity: 0.3; }
    }
`;
document.head.appendChild(style);

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        // Enhance tab navigation for role cards
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('role-card')) {
            focusedElement.style.outline = '2px solid #667eea';
            focusedElement.style.outlineOffset = '2px';
        }
    }
});

// Remove focus outline when clicking
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('role-card')) {
        e.target.style.outline = 'none';
    }
});