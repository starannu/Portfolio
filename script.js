// Navigation color change
// nav

document.addEventListener('scroll', () => 
    {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, .image-container');
    
    window.requestAnimationFrame(() => 
        {
        const scrollPosition = window.scrollY + (window.innerHeight / 3);
        
        sections.forEach(section => 
            {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) 
                {
                if (section.classList.contains('image-container')) 
                    {
                    navLinks.forEach(link => 
                        {
                        link.style.color = '#ffffff';
                    });
                } else if (section.classList.contains('hero-section')) 
                    {
                    navLinks.forEach(link => 
                        {
                        link.style.color = '#333333';
                    });
                } else {
                    navLinks.forEach(link => 
                        {
                        link.style.color = '#333333';
                    });
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slideshow .project-image');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const dotsContainer = document.querySelector('.slide-dots');

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        updateDots(index);
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    function goToSlide(index) {
        slideIndex = index;
        showSlide(slideIndex);
    }

    function updateDots(index) 
    {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Initialize the slideshow
    showSlide(slideIndex);

    // Auto advance slides
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    const slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshow.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});