// При открытии страницы восстанавливаем значения полей формы из LocalStorage, если они есть
document.addEventListener('DOMContentLoaded', function() {
    var fullNameInput = document.getElementById('fullName');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var organizationInput = document.getElementById('organization');
    var messageInput = document.getElementById('message');
    
    fullNameInput.value = localStorage.getItem('fullName');
    emailInput.value = localStorage.getItem('email');
    phoneInput.value = localStorage.getItem('phone');
    organizationInput.value = localStorage.getItem('organization');
    messageInput.value = localStorage.getItem('message');
  });
  
  // При отправке формы сохраняем значения полей в LocalStorage
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var fullNameInput = document.getElementById('fullName');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var organizationInput = document.getElementById('organization');
    var messageInput = document.getElementById('message');
    
    localStorage.setItem('fullName', fullNameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('phone', phoneInput.value);
    localStorage.setItem('organization', organizationInput.value);
    localStorage.setItem('message', messageInput.value);
    
    // Отправка данных формы с помощью AJAX
    var formData = new FormData(document.getElementById('feedbackForm'));
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formcarry.com/s/JaNllP6cta', true);
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          document.getElementById('result').textContent = 'Форма успешно отправлена!';
          fullNameInput.value = '';
          emailInput.value = '';
          phoneInput.value = '';
          organizationInput.value = '';
          messageInput.value = '';
          localStorage.clear();
        } else {
          document.getElementById('result').textContent = 'Ошибка при отправке формы.';
        }
      }
    };
    
    xhr.send(formData);
  });
  
  // При клике на кнопку открываем попап и меняем URL страницы с помощью History API
  document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
    history.pushState({popupOpen: true}, '', '?popupOpen=true');
  });
  
  // При закрытии попапа скрываем его и меняем URL страницы с помощью History API
  document.addEventListener('click', function(event) {
    if (event.target.id !== 'openPopup' && event.target.closest('#popup') === null) {
      document.getElementById('popup').style.display = 'none';
      history.pushState({popupOpen: false}, '', window.location.origin + window.location.pathname);
    }
  });
  
  // При нажатии кнопки "Назад" в браузере закрываем попап
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.popupOpen === false) {
      document.getElementById('popup').style.display = 'none';
    }
  });