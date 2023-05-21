let hint = document.getElementById("hint");
let guessB = document.getElementById("guessButton");
let input = document.getElementById("numberInput");
let tryCounter = document.getElementById("try-counter");
let guide = document.getElementById("guide");

function setCookie(name, value){ document.cookie = `${name}=${value};`; }

function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].split("=")
        var cookieName = decodeURIComponent(cookie[0]);
        var cookieValue = decodeURIComponent(cookie[1]);
        if(cookieName === name) {
            return cookieValue;
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function randomNumber(max) {return Math.floor(Math.random() * max);}

window.addEventListener("load", () => {
    setCookie("NumberToGuess", `${randomNumber(100)+1}`);
    setCookie("tries", "0");
});

guessB.addEventListener("click", ()=>{
    if (!input.value) { hint.style.color= "darkred"; hint.textContent = "Guess field is empty!"; return; }
    let numberToGuess = Number(getCookie("NumberToGuess"));
    let number = input.value;
    if (number == numberToGuess) {
            setCookie("tries", Number(getCookie("tries"))+1); hint.textContent = "GREATINGS! Your guess!";
            guessB.textContent = "Reload Game"; guessB.addEventListener("click", ()=>{location.reload();});
        }
    else if (number > numberToGuess) { setCookie("tries", Number(getCookie("tries"))+1); hint.textContent = "Your number is BIGGER"; }
    else if (number < numberToGuess) { setCookie("tries", Number(getCookie("tries"))+1); hint.textContent = "Your number is SMALLER";}
    tryCounter.textContent = `Try count: ${getCookie("tries")};`
});


