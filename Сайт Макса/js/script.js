
  document.querySelectorAll('.faq__item').forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
      // Закрыть все
      document.querySelectorAll('.faq__item').forEach(i => {
        if (i !== item) {
          i.classList.remove('active');
        }
      });

      // Переключить активный
      item.classList.toggle('active');
    });
  });

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
