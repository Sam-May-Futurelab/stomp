// STOMP Sneaker Store - Interactive JavaScript with GSAP

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // LOTTIE BACKGROUND ANIMATION
    // ========================================    // Initialize Lottie animation for hero background
    const heroLottieContainer = document.getElementById('hero-lottie');
    if (heroLottieContainer) {
        const lottieAnimation = lottie.loadAnimation({
            container: heroLottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: false, // We'll start it manually for better control
            path: 'images/hero-lottie.json',
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true
            }
        });
        
        // Wait for animation to load then start with smooth settings
        lottieAnimation.addEventListener('data_ready', function() {
            lottieAnimation.setSpeed(0.6); // Slower speed for smoother effect
            lottieAnimation.play();
        });
        
        // Force seamless looping by restarting at loop end
        lottieAnimation.addEventListener('loopComplete', function() {
            // No pause - immediately continue
            lottieAnimation.goToAndPlay(0);
        });
        
        // Fallback for complete event
        lottieAnimation.addEventListener('complete', function() {
            lottieAnimation.goToAndPlay(0);
        });
    }
    
    // ========================================
    // HERO SECTION ANIMATIONS
    // ========================================
    
    // Hero content animation
    const heroTl = gsap.timeline({ delay: 0.5 });
      heroTl
        .fromTo("#hero-content h1", 
            { y: 100, opacity: 0 },
            { duration: 1.2, y: 0, opacity: 1, ease: "power3.out" }
        )
        .fromTo("#hero-content p", 
            { y: 50, opacity: 0 },
            { duration: 1, y: 0, opacity: 1, ease: "power2.out" }, 
            "-=0.8"
        )
        .fromTo("#hero-content button", 
            { y: 30, opacity: 0 },
            { duration: 0.8, y: 0, opacity: 1, stagger: 0.2, ease: "back.out(1.7)" }, 
            "-=0.6"
        );
    
    // Hero sneaker animation
    gsap.fromTo("#hero-sneaker", 
        { scale: 0.8, opacity: 0, rotation: -10 },
        { duration: 1.5, scale: 1, opacity: 1, rotation: 0, ease: "elastic.out(1, 0.5)", delay: 1 }
    );
      // Scroll indicator animation
    gsap.fromTo("#scroll-indicator", 
        { y: 30, opacity: 0 },
        { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 2 }
    );
    
    // ========================================
    // PARALLAX EFFECTS
    // ========================================
    
    // Hero parallax layers
    gsap.to(".hero-sneaker-layer-1", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: -150,
        rotation: 20,
        ease: "none"
    });
    
    gsap.to(".hero-sneaker-layer-2", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: -100,
        rotation: -15,
        ease: "none"
    });
    
    gsap.to(".hero-sneaker-layer-3", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: -50,
        rotation: 10,
        ease: "none"
    });
    
    // Hero content parallax
    gsap.to("#hero-content", {
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        y: -100,
        ease: "none"
    });
    
    // ========================================
    // SCROLL-TRIGGERED ANIMATIONS
    // ========================================
      // Featured Products Section
    gsap.fromTo(".product-card", 
        {
            y: 80,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: "#featured-products",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.2,
            ease: "power3.out"
        }
    );
      // Section titles animation
    gsap.utils.toArray("h2").forEach(title => {
        gsap.fromTo(title,
            {
                y: 50,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: title,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                duration: 1,
                y: 0,
                opacity: 1,
                ease: "power2.out"
            }
        );
    });
      // About/Craft section animations
    gsap.fromTo("#craft-content",
        {
            x: -100,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: "#about-section",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            duration: 1.2,
            x: 0,
            opacity: 1,
            ease: "power3.out"
        }
    );
    
    gsap.fromTo("#craft-images",
        {
            x: 100,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: "#about-section",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            duration: 1.2,
            x: 0,
            opacity: 1,
            ease: "power3.out"
        }
    );
      // Testimonials animation
    gsap.fromTo(".testimonial-card",
        {
            y: 60,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: "#testimonials",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.3,
            ease: "power2.out"
        }
    );
      // Newsletter section animation
    gsap.fromTo("#newsletter-form",
        {
            scale: 0.9,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: "#newsletter",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            scale: 1,
            opacity: 1,
            ease: "back.out(1.7)"
        }
    );
    
    // ========================================
    // STICKY FOOTER BEHAVIOR
    // ========================================
    
    let stickyFooter = document.getElementById('sticky-footer');
    let lastScrollY = window.scrollY;
    
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
            const currentScroll = self.scroll();
            
            // Show sticky footer when scrolling up and past hero
            if (currentScroll < lastScrollY && currentScroll > window.innerHeight) {
                stickyFooter.style.transform = 'translateY(0)';
            } else {
                stickyFooter.style.transform = 'translateY(100%)';
            }
            
            lastScrollY = currentScroll;
        }
    });
    
    // ========================================
    // BUTTON INTERACTIONS
    // ========================================
    
    // CTA button animation
    document.getElementById('cta-button').addEventListener('mouseenter', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(225, 6, 0, 0.3)",
            ease: "power2.out"
        });
    });
    
    document.getElementById('cta-button').addEventListener('mouseleave', function() {
        gsap.to(this, {
            duration: 0.3,
            scale: 1,
            boxShadow: "0 0px 0px rgba(225, 6, 0, 0)",
            ease: "power2.out"
        });
    });
    
    // Product card hover animations
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.4,
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.4,
                y: 0,
                scale: 1,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                ease: "power2.out"
            });
        });
    });
    
    // ========================================
    // NAVBAR BEHAVIOR
    // ========================================
    
    let navbar = document.getElementById('navbar');
    
    ScrollTrigger.create({
        trigger: "body",
        start: "100px top",
        end: "bottom bottom",
        onUpdate: self => {
            if (self.direction === -1) {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            } else {
                // Scrolling down
                if (self.scroll() > 100) {
                    navbar.style.transform = 'translateY(-100%)';
                }
            }
        }
    });
    
    // ========================================
    // SCROLL INDICATOR BEHAVIOR
    // ========================================
    
    document.getElementById('scroll-indicator').addEventListener('click', function() {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: "#featured-products",
            ease: "power2.inOut"
        });
    });
    
    // Hide scroll indicator after scrolling
    ScrollTrigger.create({
        trigger: "#featured-products",
        start: "top 80%",
        onEnter: () => {
            gsap.to("#scroll-indicator", {
                duration: 0.5,
                opacity: 0,
                y: 20,
                ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            gsap.to("#scroll-indicator", {
                duration: 0.5,
                opacity: 1,
                y: 0,
                ease: "power2.out"
            });
        }
    });
    
    // ========================================
    // NEWSLETTER FORM INTERACTION
    // ========================================
    
    const emailInput = document.querySelector('#newsletter-form input');
    const signupButton = document.querySelector('#newsletter-form button');
    
    signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (emailInput.value.trim() === '') {
            // Shake animation for empty input
            gsap.to(emailInput, {
                duration: 0.1,
                x: -10,
                repeat: 5,
                yoyo: true,
                ease: "power2.inOut",
                onComplete: () => {
                    emailInput.focus();
                }
            });
            return;
        }
        
        // Success animation
        gsap.to(signupButton, {
            duration: 0.3,
            scale: 0.95,
            ease: "power2.out",
            onComplete: () => {
                signupButton.innerHTML = 'SUBSCRIBED!';
                signupButton.style.backgroundColor = '#10B981';
                
                gsap.to(signupButton, {
                    duration: 0.3,
                    scale: 1,
                    ease: "back.out(1.7)"
                });
                
                setTimeout(() => {
                    signupButton.innerHTML = 'SIGN UP';
                    signupButton.style.backgroundColor = '';
                    emailInput.value = '';
                }, 2000);
            }
        });
    });
    
    // ========================================
    // DYNAMIC BACKGROUND EFFECTS
    // ========================================
    
    // Background gradient animation based on scroll
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        onUpdate: self => {
            const progress = self.progress;
            const bgGradient = document.getElementById('bg-gradient');
            
            // Change gradient intensity based on scroll progress
            const opacity1 = 0.05 + (progress * 0.1);
            const opacity2 = 0.1 + (progress * 0.05);
            
            bgGradient.style.background = `linear-gradient(135deg, rgba(225, 6, 0, ${opacity1}) 0%, transparent 50%, rgba(225, 6, 0, ${opacity2}) 100%)`;
        }
    });
    
    // ========================================
    // PERFORMANCE OPTIMIZATIONS
    // ========================================
    
    // Lazy loading for images (when actual images are added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading-placeholder');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // MOBILE OPTIMIZATIONS
    // ========================================
    
    // Disable parallax on mobile for better performance
    if (window.innerWidth <= 768) {
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.scrub) {
                trigger.kill();
            }
        });
    }
    
    // Touch device optimizations
    if ('ontouchstart' in window) {
        // Reduce animation complexity for touch devices
        gsap.globalTimeline.timeScale(1.5);
    }
    
    // ========================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================
    
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(10);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    
    // Keyboard navigation for buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    // Smooth scroll to top function
    window.scrollToTop = function() {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: 0,
            ease: "power2.inOut"
        });
    };
    
    // Debug function for development
    window.debugAnimations = function() {
        console.log('GSAP Animations:', gsap.globalTimeline.getChildren());
        console.log('ScrollTrigger instances:', ScrollTrigger.getAll());
    };
    
    console.log('🔥 STOMP store loaded successfully!');
});

// ========================================
// RESIZE HANDLER
// ========================================

window.addEventListener('resize', function() {
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
    
    // Recalculate parallax effects if needed
    if (window.innerWidth <= 768) {
        // Disable parallax on mobile
        ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.scrub) {
                trigger.kill();
            }
        });
    }
});

// ========================================
// LOADING PERFORMANCE
// ========================================

// Preload critical resources
const preloadResources = [
    'https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
];

preloadResources.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'style';
    document.head.appendChild(link);
});

// Service Worker would go here in production
// Currently disabled to avoid 404 errors in development
