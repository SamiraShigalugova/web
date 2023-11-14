// Функция для открытия попапа
function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'flex';
    
    // Меняем URL страницы с помощью History API
    history.pushState(null, null, '#popup');
  }
  
  // Функция для закрытия попапа
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
    
    // Меняем URL страницы с помощью History API
    history.pushState(null, null, '/');
  }
  
  // Обработчик клика по кнопке открытия формы
  document.getElementById('openPopupButton').addEventListener('click', function() {
    openPopup();
  });
  
  // Обработчик нажатия кнопки "Назад" в браузере
  window.addEventListener('popstate', function(event) {
    closePopup();
  });
  
  // Обработчик отправки формы
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var organization = document.getElementById('organization').value;
    var message = document.getElementById('message').value;
    
    // Отправка данных на сервер с помощью fetch
    fetch('https://formcarry.com/s/JaNllP6cta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phone: phone,
        organization: organization,
        message: message
      })
    })
    .then(function(response) {
      if (response.ok) {
        // Если данные успешно отправлены
        document.getElementById('messageBox').textContent = 'Сообщение успешно отправлено';
        document.getElementById('messageBox').className = 'message-box success';
        
        // Очистка данных формы
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('organization').value = '';
        document.getElementById('message').value = '';
      } else {
        // Если произошла ошибка при отправке данных
        document.getElementById('messageBox').textContent = 'Произошла ошибка';
        document.getElementById('messageBox').className = 'message-box error';
      }
    })
    .catch(function(error) {
      console.log(error);
      
      // Если произошла ошибка при отправке данных
      document.getElementById('messageBox').textContent = 'Произошла ошибка';
      document.getElementById('messageBox').className = 'message-box error';
    });
  });
  
  // Восстановление сохраненных значений формы при повторном открытии страницы
  window.addEventListener('load', function() {
    var fullName = localStorage.getItem('fullName');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');
    var organization = localStorage.getItem('organization');
    var message = localStorage.getItem('message');
    
    if (fullName) {
      document.getElementById('fullName').value = fullName;
    }
    if (email) {
      document.getElementById('email').value = email;
    }
    if (phone) {
      document.getElementById('phone').value = phone;
    }
    if (organization) {
      document.getElementById('organization').value = organization;
    }
    if (message) {
      document.getElementById('message').value = message;
    }
  });
  
  // Сохранение значений формы при изменении полей
  document.getElementById('fullName').addEventListener('input', function() {
    localStorage.setItem('fullName', this.value);
  });
  
  document.getElementById('email').addEventListener('input', function() {
    localStorage.setItem('email', this.value);
  });
  
  document.getElementById('phone').addEventListener('input', function() {
    localStorage.setItem('phone', this.value);
  });
  
  document.getElementById('organization').addEventListener('input', function() {
    localStorage.setItem('organization', this.value);
  });
  
  document.getElementById('message').addEventListener('input', function() {
    localStorage.setItem('message', this.value);
  });
  
