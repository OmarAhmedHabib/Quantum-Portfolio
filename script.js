// 🌌 Quantum Portfolio JavaScript

$(document).ready(function() {
    // 🔤 Typewriter Effect for Hero Section
    const typewriterText = "Exploring the Future of Web Development";
    let i = 0;
    const typewriterElement = $('.typewriter');
    
    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.text(typewriterElement.text() + typewriterText.charAt(i));
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
    
    // 🌠 Animated Particles for Hero Section
    function createParticles() {
        const particlesContainer = $('#particles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = $('<div class="particle"></div>');
            const size = Math.random() * 5 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const animationDuration = Math.random() * 20 + 10;
            const animationDelay = Math.random() * 5;
            const colors = ['#00f7ff', '#bd00ff', '#ff0080'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.css({
                width: size + 'px',
                height: size + 'px',
                left: posX + '%',
                top: posY + '%',
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                animationDuration: animationDuration + 's',
                animationDelay: animationDelay + 's'
            });
            
            particlesContainer.append(particle);
        }
    }
    
    // Create particles when document is ready
    createParticles();
    
    // 🎛️ Skill Circles Animation
    function animateSkillCircles() {
        $('.skill-circle').each(function() {
            const percent = $(this).data('percent');
            const cssPercent = (percent / 100) * 360;
            
            // Set CSS variable for conic gradient
            this.style.setProperty('--percent', cssPercent + 'deg');
            
            // Animate the percentage text
            $(this).find('.skill-percent').text('0%');
            
            $({countNum: 0}).animate({countNum: percent}, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $(this).siblings('.skill-percent').text(Math.floor(this.countNum) + '%');
                },
                complete: function() {
                    $(this).siblings('.skill-percent').text(percent + '%');
                }
            });
        });
    }
    
    // 🎯 Scroll Animations
    function animateOnScroll() {
        $('.glass-card, .project-card, .skill-card').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    }
    
    // 🔄 Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
        const target = $($(this).attr('href'));
        
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    // 📬 Contact Form Validation
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();
        const responseElement = $('#form-response');
        
        // Clear previous messages
        responseElement.removeClass('text-success text-danger').text('');
        
        // Validate fields
        if (!name || !email || !message) {
            responseElement.addClass('text-danger').text('> Error: All fields are required!');
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            responseElement.addClass('text-danger').text('> Error: Please enter a valid email address!');
            return;
        }
        
        // Simulate form submission
        responseElement.addClass('text-success').text('> Transmitting message...');
        
        setTimeout(() => {
            responseElement.text('> Message transmitted successfully! Quantum response incoming...');
            
            // Reset form
            $('#contact-form')[0].reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                responseElement.text('');
            }, 5000);
        }, 1500);
    });
    
    // 🎛️ Initialize animations when elements come into view
    $(window).on('scroll', function() {
        animateOnScroll();
    });
    
    // 🎯 Trigger animations on page load
    setTimeout(animateOnScroll, 500);
    
    // 🎛️ Animate skill circles when skills section comes into view
    $(window).on('scroll', function() {
        const skillsSection = $('#skills');
        const sectionTop = skillsSection.offset().top;
        const sectionBottom = sectionTop + skillsSection.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
            if (!skillsSection.hasClass('skills-animated')) {
                skillsSection.addClass('skills-animated');
                animateSkillCircles();
            }
        }
    });
    
    // 🌈 Add hover sound effects (optional)
    // Uncomment the following code if you want to add hover sounds
    /*
    $('.btn-glow, .project-card, .social-icon').on('mouseenter', function() {
        // Create audio context and oscillator for hover sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'sine';
            oscillator.frequency.value = 800;
            gainNode.gain.value = 0.1;
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Audio context not supported or user interaction required
            console.log('Audio not supported or user interaction required');
        }
    });
    */
    
    // 🌟 Add circuit lines to hero section
    function createCircuitLines() {
        const circuitContainer = $('.circuit-lines');
        const lineCount = 20;
        
        for (let i = 0; i < lineCount; i++) {
            const line = $('<div class="circuit-line"></div>');
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const width = Math.random() * 200 + 50;
            const animationDelay = Math.random() * 5;
            
            line.css({
                top: top + '%',
                left: left + '%',
                width: width + 'px',
                animationDelay: animationDelay + 's'
            });
            
            circuitContainer.append(line);
        }
    }
    
    // Create circuit lines
    createCircuitLines();
});

// 🌌 Additional animations for better performance
document.addEventListener('DOMContentLoaded', function() {
    // Add scanline effect to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const scanline = document.createElement('div');
        scanline.className = 'scanline';
        heroSection.appendChild(scanline);
    }
});
