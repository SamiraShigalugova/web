function calc() {
        //ссылка на элемент Select (Тип)
        let type_tovara = document.getElementById("tovar");
        //ссылка на элемент input (Кол-во)
        let count = document.getElementById("count");
        //ссылка на элемент span, в него пишем стоимость
        let result = document.getElementById("result");
        let price = 0;
        price += parseInt(type_tovara.options[type_tovara.selectedIndex].value);
        if(count.value>0)
        price = parseInt(count.value) * price;
        else alert("Количество не подходит");
        result.innerHTML = price;
}
function sbros()
{
        let result = document.getElementById("result");
        let price=0;
        result.innerHTML=price;
}
window.addEventListener('DOMContentLoaded', function () {
        console.log("DOM fully loaded and parsed");
        let b = document.getElementById("button");
        let c = document.getElementById("button2");
        let d=document.getElementById("tovar");
        b.addEventListener("click", calc);
        c.addEventListener("click", sbros);
        d.addEventListener("change",calc);
});
