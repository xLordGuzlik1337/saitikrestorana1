document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылку на кнопку авторизации
    const authButton = document.getElementById('authButton');
  
    // Получаем ссылки на формы регистрации и входа
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
  
    // При клике на кнопку авторизации
    authButton.addEventListener('click', function(event) {
      event.preventDefault();
      // Переключаем видимость форм регистрации и входа
      registerForm.style.display = 'block';
      loginForm.style.display = 'block';
    });
  });
  