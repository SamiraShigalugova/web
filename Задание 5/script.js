function calc() {
        //ссылка на элемент Select (Тип услуги)
        let type_tovara = document.getElementById("tovar");
        //ссылка на элемент input (Кол-во вариантов)
        let count = document.getElementById("count");
        //ссылка на элемент span, в него пишем стоимость
        let result = document.getElementById("result");
        let price = 0;
        price += parseInt(type_tovara.options[type_tovara.selectedIndex].value);
        if(count.value>0)
        price = parseInt(count.value) * price;
else
alert("Количество не подходит");
        result.innerHTML = price;
}
function sbros()
{
        let result = document.getElementById("result");
        let price=0;
        result.innerHTML=price;
}
