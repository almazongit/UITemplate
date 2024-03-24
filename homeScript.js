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