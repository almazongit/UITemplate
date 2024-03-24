document.addEventListener("DOMContentLoaded", function () {

    // ---------- СЛАЙДЕР services-event ----------
    // Получаем слайды и стрелки управления
    const slider = document.getElementById('slider');
    const slides = slider.querySelectorAll('.events-slide');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');

    let currentSlide = 0; // Индекс текущего слайда
    // Функция для отображения нужного слайда
    function showSlide(index) {
        // Скрываем все слайды
        slides.forEach(slide => slide.style.display = 'none');
        // Отображаем нужный слайд
        slides[index].style.display = 'flex';
    }
    // Обработчик клика на левую стрелку
    leftArrow.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });
    // Обработчик клика на правую стрелку
    rightArrow.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
    // Показываем первый слайд при загрузке страницы
    showSlide(currentSlide);


    // ---------- СЛАЙДЕР portfolio-info ----------
    // Получаем блоки проектов и стрелки управления
    const portfolio = document.querySelector('.portfolio');
    const projects = portfolio.querySelectorAll('.project');
    const leftArrowPortfolio = document.querySelector('.left-portfolio');
    const rightArrowPortfolio = document.querySelector(' .right-portfolio');

    let currentPosition = 0; // Текущая позиция слайдера

    // Функция для сдвига блоков проектов
    function shiftProjects(direction) {
        const projectWidth = projects[0].offsetWidth; // Ширина одного блока проекта
        const shiftAmount = projectWidth * direction; // Расстояние, на которое нужно сдвинуть проекты
        // Устанавливаем новую позицию слайдера
        currentPosition += shiftAmount;
        // Ограничиваем позицию слайдера, чтобы не выходить за границы
        currentPosition = Math.min(0, Math.max(-(projects.length - 3) * projectWidth, currentPosition));
        // Применяем сдвиг к блокам проектов
        portfolio.style.transform = `translateX(${currentPosition}px)`;
    }
    // Обработчики клика на стрелки влево и вправо
    leftArrowPortfolio.addEventListener('click', () => shiftProjects(1)); // Сдвигаем вправо на один проект
    rightArrowPortfolio.addEventListener('click', () => shiftProjects(-1)); // Сдвигаем влево на один проект

});