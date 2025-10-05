// Kykeon Analytics - Main JavaScript File

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    initializeParticles();
    initializeTypedText();
    initializeNavigation();
    initializeWarningsTable();
    initializeAnimations();
    initializeFilters();
}

// Particle background system using p5.js
let particles = [];
let particleCount = 50;

function initializeParticles() {
    new p5(function(p) {
        p.setup = function() {
            let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles-container');
            
            // Initialize particles
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 4)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                let particle = particles[i];
                
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(91, 140, 255, 100);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    let other = particles[j];
                    let distance = p.dist(particle.x, particle.y, other.x, other.y);
                    
                    if (distance < 100) {
                        p.stroke(91, 140, 255, 50);
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                }
            }
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
    });
}

// Initialize typed text animation
function initializeTypedText() {
    if (document.getElementById('typed-headline')) {
        new Typed('#typed-headline', {
            strings: ['Harm Reduction Analysis', 'Scientific Excellence', 'Public Safety First'],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Initialize navigation dropdowns
function initializeNavigation() {
    const dropdownTriggers = document.querySelectorAll('.group');
    
    dropdownTriggers.forEach(trigger => {
        const dropdown = trigger.querySelector('.dropdown');
        let timeout;
        
        trigger.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            if (dropdown) {
                dropdown.classList.add('active');
            }
        });
        
        trigger.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            }, 100);
        });
    });
}

// Warnings data
const warningsData = [
    {
        substance: 'Drostanolone propionate',
        source: 'Vendor A',
        date: '2024-09-15',
        analysis: 'Anabolic steroid with potential contamination',
        safety: 'high',
        comment: 'CAUTION! Potential carcinogenic impurity detected'
    },
    {
        substance: 'Testosterone isocaproate',
        source: 'Vendor B',
        date: '2024-09-12',
        analysis: 'Hormone compound with unknown additives',
        safety: 'medium',
        comment: 'Contains unlisted excipients'
    },
    {
        substance: 'Pregnenolone',
        source: 'Vendor C',
        date: '2024-09-10',
        analysis: 'Hormone precursor, correctly labeled',
        safety: 'low',
        comment: 'Product matches label claims'
    },
    {
        substance: 'Methyl-testosterone',
        source: 'Vendor D',
        date: '2024-09-08',
        analysis: 'Synthetic androgen with heavy metal contamination',
        safety: 'high',
        comment: 'CAUTION! Lead contamination detected'
    },
    {
        substance: 'Trenbolone base',
        source: 'Vendor E',
        date: '2024-09-05',
        analysis: 'Veterinary steroid, mislabeled as human grade',
        safety: 'high',
        comment: 'Not for human consumption'
    },
    {
        substance: 'Dicloqualone',
        source: 'Vendor F',
        date: '2024-09-03',
        analysis: 'Novel psychoactive substance',
        safety: 'high',
        comment: 'Unknown toxicity profile'
    },
    {
        substance: '2C-B-FLY',
        source: 'Vendor G',
        date: '2024-08-28',
        analysis: 'Psychedelic phenethylamine, correctly labeled',
        safety: 'medium',
        comment: 'Potent compound, dose carefully'
    },
    {
        substance: '4F-MPH',
        source: 'Vendor H',
        date: '2024-08-25',
        analysis: 'Fluorinated methylphenidate analog',
        safety: 'medium',
        comment: 'Stimulant with unknown long-term effects'
    }
];

// Initialize warnings table
function initializeWarningsTable() {
    const tableBody = document.getElementById('warningsTable');
    if (!tableBody) return;
    
    renderWarningsTable(warningsData);
}

// Render warnings table
function renderWarningsTable(data) {
    const tableBody = document.getElementById('warningsTable');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('div');
        row.className = 'table-row p-4 grid grid-cols-12 gap-4 text-sm';
        
        const safetyClass = item.safety === 'high' ? 'risk-high' : 
                           item.safety === 'medium' ? 'risk-medium' : 'risk-low';
        
        const statusBadge = item.safety === 'high' ? 'status-danger' : 
                           item.safety === 'medium' ? 'status-warning' : 'status-safe';
        
        const statusText = item.safety === 'high' ? 'HIGH RISK' : 
                          item.safety === 'medium' ? 'MEDIUM RISK' : 'LOW RISK';
        
        row.innerHTML = `
            <div class="col-span-3">
                <div class="font-medium text-white">${item.substance}</div>
                <div class="text-xs text-gray-400 mt-1">${item.comment}</div>
            </div>
            <div class="col-span-2 text-gray-300">${item.source}</div>
            <div class="col-span-2 text-gray-300">${formatDate(item.date)}</div>
            <div class="col-span-3 text-gray-300">${item.analysis}</div>
            <div class="col-span-2">
                <span class="status-badge ${statusBadge}">${statusText}</span>
            </div>
        `;
        
        tableBody.appendChild(row);
    });
    
    // Animate table rows
    anime({
        targets: '.table-row',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutQuart'
    });
}

// Initialize filters
function initializeFilters() {
    const substanceFilter = document.getElementById('substanceFilter');
    const riskFilter = document.getElementById('riskFilter');
    const dateFilter = document.getElementById('dateFilter');
    
    if (substanceFilter) {
        substanceFilter.addEventListener('input', filterWarnings);
    }
    
    if (riskFilter) {
        riskFilter.addEventListener('change', filterWarnings);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', filterWarnings);
    }
}

// Filter warnings data
function filterWarnings() {
    const substanceValue = document.getElementById('substanceFilter').value.toLowerCase();
    const riskValue = document.getElementById('riskFilter').value;
    const dateValue = document.getElementById('dateFilter').value;
    
    let filteredData = warningsData.filter(item => {
        const matchesSubstance = !substanceValue || item.substance.toLowerCase().includes(substanceValue);
        const matchesRisk = !riskValue || item.safety === riskValue;
        const matchesDate = !dateValue || item.date >= dateValue;
        
        return matchesSubstance && matchesRisk && matchesDate;
    });
    
    renderWarningsTable(filteredData);
}

// Clear all filters
function clearFilters() {
    document.getElementById('substanceFilter').value = '';
    document.getElementById('riskFilter').value = '';
    document.getElementById('dateFilter').value = '';
    renderWarningsTable(warningsData);
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('card-hover')) {
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutQuart',
                        delay: Math.random() * 200
                    });
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.card-hover').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
    
    // Animate sections on scroll
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                anime({
                    targets: section.querySelectorAll('h2, p, .btn-primary'),
                    opacity: [0, 1],
                    translateY: [20, 0],
                    delay: anime.stagger(100),
                    duration: 600,
                    easing: 'easeOutQuart'
                });
                
                sectionObserver.unobserve(section);
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Handle mobile menu (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other pages
window.KykeonAnalytics = {
    initializeApp,
    filterWarnings,
    clearFilters,
    formatDate,
    debounce
};

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        anime.running.forEach(animation => animation.pause());
    } else {
        // Resume animations when page becomes visible
        anime.running.forEach(animation => animation.play());
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('Kykeon Analytics Error:', e.error);
    // Could implement error reporting here
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}