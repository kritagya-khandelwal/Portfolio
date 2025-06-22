const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

// Services slider functionality
const servicesContainer = document.querySelector('.services');
const slideLeftBtn = document.querySelector('.slide-btn--left');
const slideRightBtn = document.querySelector('.slide-btn--right');

if (servicesContainer && slideLeftBtn && slideRightBtn) {
    function getSlideAmount() {
        // Get the width of a service card including its gap
        const serviceCard = servicesContainer.querySelector('.service');
        if (!serviceCard) return 320;
        
        const cardStyle = window.getComputedStyle(serviceCard);
        const cardWidth = serviceCard.offsetWidth;
        const cardMargin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
        return cardWidth + cardMargin;
    }

    function updateSlideButtons() {
        const isAtStart = servicesContainer.scrollLeft === 0;
        const isAtEnd = servicesContainer.scrollLeft + servicesContainer.clientWidth >= servicesContainer.scrollWidth;

        slideLeftBtn.style.opacity = isAtStart ? '0.5' : '1';
        slideRightBtn.style.opacity = isAtEnd ? '0.5' : '1';
    }

    slideLeftBtn.addEventListener('click', () => {
        servicesContainer.scrollBy({
            left: -getSlideAmount(),
            behavior: 'smooth'
        });
    });

    slideRightBtn.addEventListener('click', () => {
        servicesContainer.scrollBy({
            left: getSlideAmount(),
            behavior: 'smooth'
        });
    });

    // Update button visibility based on scroll position
    servicesContainer.addEventListener('scroll', updateSlideButtons);

    // Update on window resize
    window.addEventListener('resize', () => {
        updateSlideButtons();
    });

    // Initial button state
    updateSlideButtons();
}
