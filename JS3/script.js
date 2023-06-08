/* 1 */
let field1 = document.getElementById("field1");
let res1 = document.getElementById("res1");
let button1 =document.getElementById("button1");

button1.addEventListener("click", ()=>{
    let price = field1.value;
    switch (true){
        case (price < 0):
            res1.innerHTML = "Price is not number"; break;
        default:
            let tax = price < 1000 ? 0.05 : 0.1;
            let taxCalc = price * tax;
            let totalPrice = parseFloat(price) + parseFloat(taxCalc);
            res1.innerHTML = `Price: ${price}$; Tax: ${taxCalc}$; Total: ${totalPrice}$`;
            break;
    }
});

/* 2 */
let button2 = document.getElementById("button2");
let res2 = document.getElementById("res2");

button2.addEventListener("click", ()=>{
    switch (Number(document.getElementById("field2").value)){
        case 12:
        case 1:
        case 2: res2.innerHTML = "Winter"; break;
        case 3:
        case 4:
        case 5: res2.innerHTML = "Spring"; break;
        case 6:
        case 7:
        case 8: res2.innerHTML = "Summer"; break;
        case 9:
        case 10:
        case 11: res2.innerHTML = "Fall"; break;
        default: res2.innerHTML = `This month doesn't exist`; break;
    }
});

/* 3 */
let button3 = document.getElementById("button3");
let res3 = document.getElementById("res3");

button3.addEventListener("click", ()=>{
    switch (Number(document.getElementById("field3").value)){
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :res3.innerHTML = `This is work day`; break;
        case 6 :
        case 7 :res3.innerHTML = `This is weekend`; break;
        default: res3.innerHTML = `This day doesn't exist`; break;
    }
});

/* 4 */
let button4 = document.getElementById("button4");
let res4 = document.getElementById("res4");
button4.addEventListener("click", ()=>{
    switch (true){
        case document.getElementById("field4").value >= 18: res4.innerHTML = `Ви можете голосувати`; break;
        default: res4.innerHTML = `Ви не можете голосувати`; break;
    }
});

/* 5 */
let field5 = document.getElementById("field5");
let res5 = document.getElementById("res5");
let button5 = document.getElementById("button5")

button5.addEventListener("click", () => {
    switch (field5.value.toLowerCase()) {
        case "січень":
        case "березень":
        case "травень":
        case "липень":
        case "серпень":
        case "жовтень":
        case "грудень": res5.innerHTML = "У цьому місяці непарна кількість днів"; break;
        case "лютий": res5.innerHTML = "У лютому залежно від року може бути 28 або 29 днів"; break;
        case "квітень":
        case "червень":
        case "вересень":
        case "листопад": res5.innerHTML = "У цьому місяці парна кількість днів"; break;
        default: res5.innerHTML = "Такого місяця не існує"; break;
    }
});

/* 6 */
let field6 = document.getElementById("field6");
let button6 = document.getElementById("button6");
let res6 = document.getElementById("res6");

button6.addEventListener("click", ()=>{
   res6.innerHTML = field6.value % 2 === 0 ?  "Парне" : "Не парне" ;
});

/* 7 */
let field7 = document.getElementById("field7");
let button7 = document.getElementById("button7");
let res7 = document.getElementById("res7");

button7.addEventListener("click", ()=>{
    res7.innerHTML = field7.value === "" ? "Пустий" : "Не пустий";
});

/* 8 */
let field8_1 = document.getElementById("field8_1");
let field8_2 = document.getElementById("field8_2");
let button8 = document.getElementById("button8");
let res8 = document.getElementById("res8");

button8.addEventListener("click", ()=>{
    res8.innerHTML = field8_1.value.includes(field8_2.value) ? "Містить" : "Не містить";
});

/* 9 */
let button9 = document.getElementById("button9");
let res9 = document.getElementById("res9");

button9.addEventListener("click", ()=>{
    let array = [];
    res9.innerHTML = (array.length === 0) ? "Порожній" : "Не порожній";
 });

/* 10 */
let field10 = document.getElementById("field10");
let button10 = document.getElementById("button10");
let res10 = document.getElementById("res10");

button10.addEventListener("click", ()=>{
    let array = [3, 20, 4, 8, 10];
    res10.innerHTML = (Number(field10.value) === array[0]) ? "Нульовий елемент" : "Не нульовий елемент";
});

/* 11 */
let field11 = document.getElementById("field11");
let button11 = document.getElementById("button11");
let res11 = document.getElementById("res11");

button11.addEventListener("click", ()=>{
    res11.innerHTML = (Number(field11.value) >= 0 && Number(field11.value) <= 1) ? "Відповідає критеріям" : "Не відповідає критеріям";
});
/* 12 */
let field12 = document.getElementById("field12");
let button12 = document.getElementById("button12");
let res12 = document.getElementById("res12");

button12.addEventListener("click", () => {
        res12.innerHTML = (field12.value.includes("2022")) ? "Відповідає критеріям" : "Не відповідає критеріям";
    });
/* 13 */
let field13 = document.getElementById("field13");
let button13 = document.getElementById("button13");
let res13 = document.getElementById("res13");

button13.addEventListener("click", () => {
    res13.innerHTML = (field13.value >= 18) ? "Дорослий" : "Неповнолітній";
});

/* 14 */
let field14 = document.getElementById("field14");
let button14 = document.getElementById("button14");
let res14 = document.getElementById("res14");

button14.addEventListener("click", () => {
    res14.innerHTML = (field14.value.length > 10) ? "Довгий рядок" : "Короткий рядок";
});

/* 15 */
let field15_1 = document.getElementById("field15_1");
let field15_2 = document.getElementById("field15_2");
let button15 = document.getElementById("button15");
let res15 = document.getElementById("res15");

button15.addEventListener("click", () => {
    let lettersWord1 = field15_1.value.toLowerCase().split('').sort().join('');
    let lettersWord2 = field15_2.value.toLowerCase().split('').sort().join('');

    res15.innerHTML = (lettersWord1 === lettersWord2) ? "Анаграма" : "Не анаграма";
});