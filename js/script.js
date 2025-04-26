  const openModalBtn = document.getElementById('open-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modal = document.getElementById('modal');

  openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Закрытие по клику на фон
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal__overlay')) {
      modal.classList.remove('active');
    }
  });

  // Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Анимация при скролле
function animateOnScroll() {
  const elements = document.querySelectorAll(
    '.hero__container, .why-us, .benefits, .steps, .faq, .online-consult, .contacts-form'
  );

  elements.forEach(el => {
    const elementPosition = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      el.classList.add('visible');
      
      // Анимация для элементов why-us
      if (el.classList.contains('why-us')) {
        document.querySelectorAll('.item-why-us').forEach(item => {
          item.classList.add('visible');
        });
      }
    }
  });
}

// Запуск при загрузке и скролле
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Анимация FAQ
document.querySelectorAll('.faq__question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    // Закрываем все ответы
    document.querySelectorAll('.faq__answer').forEach(item => {
      if (item !== answer) {
        item.style.maxHeight = null;
        item.previousElementSibling.classList.remove('active');
      }
    });

    // Открываем/закрываем текущий
    question.classList.toggle('active');
    answer.style.maxHeight = isOpen ? null : answer.scrollHeight + 'px';
  });
});

