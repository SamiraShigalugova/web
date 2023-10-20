window.addEventListener("DOMContentLoaded",function (event){
let kolvo = document.getElementById('quantity');
let radios = document.getElementsByName('serviceType');
const options = document.getElementById('options');
let optionSelect = document.getElementById('option');
let sv = document.getElementById('svoistvo');
let svCheckbox = document.getElementById('property');
let sb=document.getElementById("button2");
let calc=document.getElementById("button");
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
    basePrice += 5000;
    if(optionSelect.value === 'option2')
    basePrice += 1000;
    if(optionSelect.value === 'option3')
    basePrice += 2000;
  }
  // Добавление стоимости свойства товара, если выбрано
  if (svCheckbox.style.display !== 'none' && svCheckbox.checked) {
    basePrice += 200;
  }
  let result=document.getElementById("price");
  if(quantity>0)
  {
    totalPrice = basePrice * quantity;
    result.innerHTML=totalPrice;
  }
  else alert("Неверное количество");
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
function sbros()
{
        let result1 = document.getElementById("price");
        let price=0;
        result1.innerHTML=price;
        options.style.display = 'none';
        sv.style.display = 'none';
}
// Обработчик изменения типа услуги
for (const radio of radios) {
  radio.addEventListener("change", updateForm);
}
//Обработчик сброса
sb.addEventListener("click",sbros);
//Обработчик изменения цены
calc.addEventListener("click",calculatePrice);
});
