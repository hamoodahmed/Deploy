// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    // Check for saved theme preference or respect system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-theme');
    }
    
    // Toggle theme function
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        
        // Save the current theme to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Add event listener to theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
    
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scrolling for internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    // Calculate offset to account for fixed header
                    const offsetTop = targetElement.offsetTop - 80; // 80px offset for header height
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    navLinks.forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });
    
    // Update active link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100; // Add offset to trigger earlier
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Typewriter effect for hero subtitle
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = ''; // Clear the text initially
        
        let i = 0;
        const speed = 100; // Speed in milliseconds
        
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        // Start the typewriter effect after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const formMessage = document.getElementById('form-message');
            
            // Simple validation
            if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
                showMessage(formMessage, 'Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                showMessage(formMessage, 'Please enter a valid email address.', 'error');
                return;
            }
            
            // In a real application, you would send the form data to a server here
            // For this example, we'll just show a success message
            showMessage(formMessage, 'Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset the form
            contactForm.reset();
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // Function to show form messages
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `form-message ${type}`;
        element.style.display = 'block';
    }
    
    // Initialize active link based on current URL hash
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`a[href="${currentHash}"]`);
        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }
});