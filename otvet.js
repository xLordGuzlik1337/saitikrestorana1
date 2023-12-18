document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.querySelector('.answer');
        answer.classList.toggle('answer-visible');
      });
    });
  });
  