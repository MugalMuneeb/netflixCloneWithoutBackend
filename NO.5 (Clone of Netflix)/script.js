// Slider--------------------------------
const container = document.getElementById('main-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const scrollAmount = container.offsetWidth / 4.5;

leftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// FAQ--------------------------------
const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

//plus icon rotate--------------------------------
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('rotate');
    });
});
// Footer part -------------------------------
 function toggleInfo() {
    var info = document.getElementById("moreInfo");
    info.style.display = info.style.display === "none" ? "block" : "none";
  }