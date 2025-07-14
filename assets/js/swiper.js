(function () {
    const slider = document.getElementById('customSlider');
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function slidesPerView() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    let currentIndex = 0;
    let perView = slidesPerView();

    const pagination = document.getElementById('pagination');

    function createPagination() {
        pagination.innerHTML = '';
        const pageCount = Math.ceil(totalSlides / perView);
        for (let i = 0; i < pageCount; i++) {
            const dot = document.createElement('button');
            dot.setAttribute('aria-label', `Ga naar slide ${i + 1}`);
            dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
            dot.classList.add(
                'w-4', 'h-4', 'rounded-full', 'bg-blue-400', 'cursor-pointer',
                'opacity-50', 'hover:opacity-80', 'transition-opacity'
            );
            if (i === 0) dot.classList.add('opacity-100');
            dot.addEventListener('click', () => {
                currentIndex = i * perView;
                updateSlider();
                updatePagination();
            });
            pagination.appendChild(dot);
        }
    }

    function updatePagination() {
        const dots = pagination.children;
        const activePage = Math.floor(currentIndex / perView);
        for (let i = 0; i < dots.length; i++) {
            dots[i].setAttribute('aria-current', i === activePage ? 'true' : 'false');
            dots[i].classList.toggle('opacity-100', i === activePage);
            dots[i].classList.toggle('opacity-50', i !== activePage);
        }
    }

    function updateSlider() {
        if (currentIndex < 0) currentIndex = totalSlides - perView;
        if (currentIndex > totalSlides - perView) currentIndex = 0;

        const slideWidthPercent = 100 / perView;
        const offset = -(currentIndex * slideWidthPercent);
        slider.style.transform = `translateX(${offset}%)`;

        updatePagination();
    }

    document.getElementById('prevSlide').addEventListener('click', () => {
        currentIndex -= perView;
        if (currentIndex < 0) currentIndex = totalSlides - perView;
        updateSlider();
    });

    document.getElementById('nextSlide').addEventListener('click', () => {
        currentIndex += perView;
        if (currentIndex > totalSlides - perView) currentIndex = 0;
        updateSlider();
    });

    let startX = 0;
    let isDragging = false;

    slider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoScroll();
    });

    slider.addEventListener('touchmove', e => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        if (diff > 50) {
            currentIndex -= perView;
            if (currentIndex < 0) currentIndex = totalSlides - perView;
            updateSlider();
            isDragging = false;
        } else if (diff < -50) {
            currentIndex += perView;
            if (currentIndex > totalSlides - perView) currentIndex = 0;
            updateSlider();
            isDragging = false;
        }
    });

    slider.addEventListener('touchend', () => {
        isDragging = false;
        startAutoScroll();
    });

    window.addEventListener('resize', () => {
        const oldPerView = perView;
        perView = slidesPerView();
        if (perView !== oldPerView) {
            currentIndex = 0;
            createPagination();
            updateSlider();
        }
    });

    let autoScrollInterval = null;
    const autoScrollDelay = 10000;

    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            currentIndex += perView;
            if (currentIndex > totalSlides - perView) currentIndex = 0;
            updateSlider();
        }, autoScrollDelay);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    slider.addEventListener('mouseenter', stopAutoScroll);
    slider.addEventListener('mouseleave', startAutoScroll);

    createPagination();
    updateSlider();
    startAutoScroll();
})();
