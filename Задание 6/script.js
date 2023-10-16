const kolvo = document.getElementById('quantity');
const radios = document.getElementsByName('serviceType');
const options = document.getElementById('options');
const optionSelect = document.getElementById('option');
const sv = document.getElementById('svoistvo');
const svCheckbox = document.getElementById('property');
const priceText = document.getElementById('price');

// Обработчик изменения количества
kolvo.addEventListener('change', calculatePrice);
// Обработчик изменения опции товара
optionSelect.addEventListener('change', calculatePrice);
// Обработчик изменения свойства товара
svCheckbox.addEventListener('change', calculatePrice);
// Обработчик изменения типа услуги
for (const radio of radios) {
  radio.addEventListener('change', updateForm);
}

// Функция для пересчета цены товара
function calculatePrice() 
{
  const quantity = kolvo.value;
  let basePrice = 0;
  // Определение базовой стоимости в зависимости от выбранного типа услуги
  for (const radio of radios) {
    if (radio.checked) {
      const serviceType = radio.value;
      switch (serviceType) {
        case 'type1':
          basePrice = 100;
          break;
        case 'type2':
          basePrice = 200;
          break;
        case 'type3':
          basePrice = 300;
          break;
      }
      break;
    }
  }
  // Добавление стоимости опции товара, если выбрана
  if (optionSelect.style.display !== 'none') {
    if(optionSelect.value === 'option1')
    basePrice += 50;
    if(optionSelect.value === 'option2')
    basePrice += 100;
    if(optionSelect.value === 'option3')
    basePrice += 200;
  }
  // Добавление стоимости свойства товара, если выбрано
  if (svCheckbox.style.display !== 'none' && svCheckbox.checked) {
    basePrice += 20;
  }
  const totalPrice = basePrice * quantity;
  priceText.textContent = 'Цена: ' + totalPrice + ' руб.';
}
// Функция для обновления формы в зависимости от выбранного типа услуги
function updateForm() {
  const serviceType = this.value;
  // Проверка и отображение/скрытие опций товара
  if (serviceType === 'type2') {
    options.style.display = 'block';
  } else {
    options.style.display = 'none';
  }
  if (serviceType === 'type3') {
    sv.style.display = 'block';
  } else {
    sv.style.display = 'none';
  }
  calculatePrice();
}
