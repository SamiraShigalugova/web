function calc() {
        //ссылка на элемент Select (Тип услуги)
        let type_tovara = document.getElementById("tovar");
        //ссылка на элемент input (Кол-во вариантов)
        let count = document.getElementById("count");
        //ссылка на элемент span, в него пишем стоимость
        let result = document.getElementById("result");
        let price = 0;
        price += parseInt(type_tovara.options[type_tovara.selectedIndex].value);
        price = parseInt(count.value) * price;
        result.innerHTML = price;
}
function sbros()
{
        let result = document.getElementById("result");
        let price=0;
        result.innerHTML=price;
}