let addB = document.getElementById("addButton");
let deleteB = document.getElementById("deleteButton");
let updateB = document.getElementById("updateButton");
let username = document.getElementById("inputUsername");
let info = document.getElementById("inputInfo");
let greetings = document.getElementById("greetings");
let greetingsPhrase = document.getElementById("startPhrase");
let lastPost = document.getElementById("last_post");

function randomNumber(max) {return Math.floor(Math.random() * max);}

function setCookie(name, value){ document.cookie = `${name}=${value}`; }

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

addB.addEventListener("click", ()=>{
    if (!username.value) { alert("Some field are empty"); return; }
    if (!info.value) { alert("Some field are empty"); return; }
    localStorage.setItem("Username", username.value);
    setCookie("info", info.value);
    location.reload();
});

deleteB.addEventListener("click", ()=>{localStorage.clear(); deleteCookie("info"); location.reload();});

updateB.addEventListener("click", ()=>{
    if (!localStorage.getItem("Username")) { 
        localStorage.setItem("Username", "LEEEEEROOOOOOOOOY JEEEENKINS");
        greetingsPhrase.textContent = `Your Greatness, `;
        greetings.classList.add("rainbow-text")
        greetings.textContent = `${localStorage.getItem("Username")}`;
        setCookie("info", `Welcome to the Universe #${randomNumber(1000)}`);
        lastPost.textContent = `${getCookie("info")}`
    }
    else { greetings.classList.add("rainbow-text"); }
});

if (localStorage.getItem("Username")) { greetingsPhrase.textContent = `Hey there, `; greetings.textContent = `${localStorage.getItem("Username")}`; }
else { greetingsPhrase.textContent = `Hello newie, `; greetings.textContent = `Guardian`;}

if (getCookie("info")) {lastPost.textContent = `${getCookie("info")}`;}
else { lastPost.textContent = "Nothing here, maybe you can add something";}