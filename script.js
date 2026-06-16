document.addEventListener('DOMContentLoaded', () => {
  
  const likeButtons = document.querySelectorAll('.like-btn');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const heart = button.querySelector('i');
      const countElement = button.querySelector('.like-count');
      let count = parseInt(countElement.textContent);
      
      if (button.classList.contains('liked')) {
        // Descurtir
        button.classList.remove('liked');
        heart.classList.remove('fas');
        heart.classList.add('far');
        count--;
      } else {
        // Curtir
        button.classList.add('liked');
        heart.classList.remove('far');
        heart.classList.add('fas');
        count++;
      }
      
      countElement.textContent = count;
    });
  });
});
