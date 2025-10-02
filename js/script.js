// Navigation functionality
console.log('Script loaded successfully');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
console.log('Hamburger:', hamburger, 'NavMenu:', navMenu);

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }));

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click handlers to navigation links (only for anchor links, not page links)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Only prevent default for anchor links (starting with #), not page links
        if (href && href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = href.substring(1);
                scrollToSection(targetId);
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.thesis-card, .point-card, .ecosystem-card');
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Floating elements animation enhancement
document.addEventListener('DOMContentLoaded', () => {
    const floatingElements = document.querySelectorAll('.element');
    
    floatingElements.forEach((element, index) => {
        // Add random slight rotation and position variation
        const randomDelay = Math.random() * 2;
        const randomRotation = Math.random() * 10 - 5;
        
        element.style.animationDelay = `${randomDelay}s`;
        element.style.transform = `rotate(${randomRotation}deg)`;
        
        // Add hover effect
        element.addEventListener('mouseenter', () => {
            element.style.transform = `scale(1.1) rotate(${randomRotation + 5}deg)`;
            element.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = `scale(1) rotate(${randomRotation}deg)`;
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    const thesisMeta = document.querySelector('.thesis-meta');
    
    if (heroTitle) {
        heroTitle.style.animation = 'fadeInUp 1s ease forwards';
    }
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeInUp 1s ease 0.2s forwards';
        heroSubtitle.style.opacity = '0';
    }
    if (thesisMeta) {
        thesisMeta.style.animation = 'fadeInUp 1s ease 0.4s forwards';
        thesisMeta.style.opacity = '0';
    }
    if (heroButtons) {
        heroButtons.style.animation = 'fadeInUp 1s ease 0.6s forwards';
        heroButtons.style.opacity = '0';
    }
});

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
`;
document.head.appendChild(style);

// Performance optimizations
let scrollTicking = false;

function optimizedScrollHandler() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    scrollTicking = false;
}

// Replace the existing scroll event with throttled version
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(optimizedScrollHandler);
        scrollTicking = true;
    }
});

// Preload critical resources
document.addEventListener('DOMContentLoaded', () => {
    // Preload other page resources
    const preloadPages = ['ecosystem.html', 'threats.html', 'dashboard.html', 'team.html', 'citations.html'];
    preloadPages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
    });
});

// Add touch-friendly interactions for mobile
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}