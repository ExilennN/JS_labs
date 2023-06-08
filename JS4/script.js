//1. Створіть власну функцію, яка додає до тексту градієнтний ефект, змінюючи
// значення стилів CSS для background-imag
function setColor(text){
    text.style.backgroundImage = 'linear-gradient(90deg ,#45f65a, #998797)';
}
let button1 = document.getElementById("button1");
let span1 = document.getElementById("span1");
setColor(span1);
button1.addEventListener("click", ()=>{ setColor(span1);});

// 3. Створіть функцію, яка додає до тексту ефект "розтягнутості", змінюючи значення
// стилів CSS для text-stretch.
function setStretch(text){
        text.style.fontStretch = 'extra-condensed';
}
let button2 = document.getElementById("button2");
let span2 = document.getElementById("span2");
button2.addEventListener("click", ()=>{ setStretch(span2); });

// 4. Змініть функцію зміни кольору переднього плану так, щоб вона приймала
// значення HEX-коду кольору з зовнішнього джерела, наприклад, з форми
// введення.
let button3 = document.getElementById("button3");
let span3= document.getElementById("span3");
let input3 = document.getElementById("input3");
button3.addEventListener("click", ()=>{
    setUserColor(span3, input3.value);
});

//6. Змініть функцію зміни кольору переднього плану так, щоб вона дозволяла
// вибирати кольори з палітри кольорів, що відображається на сторінці.
function setUserColor(text, color){
    text.style.color = color;
}

let button4 = document.getElementById("button4");
let span4 = document.getElementById("span4");
let input4 = document.getElementById("input4");
button4.addEventListener("click", ()=>{
    setUserColor(span4, input4.value);
});

// 7. Створіть функцію, яка збільшує розмір тексту при кожному натисканні кнопки
// "збільшити", і зменшує його при кожному натисканні кнопки "зменшити".
function sizeUp_Down(text, changeValue){
    let fontSize = parseFloat(window.getComputedStyle(text, null).getPropertyValue('font-size'));
    text.style.fontSize = (fontSize + changeValue) + 'px';
}

let button5_1 = document.getElementById("button5.1");
let button5_2 = document.getElementById("button5.2");
let span5 = document.getElementById("span5");

button5_1.addEventListener("click", ()=> { sizeUp_Down(span5, 1); });
button5_2.addEventListener("click", ()=> { sizeUp_Down(span5, -1); });