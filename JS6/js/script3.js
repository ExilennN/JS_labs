try{if (getCookie("LogIn") === "true") { window.location.href = 'index1.html'; }}
catch { setCookie("LogIn", "false"); }

const allowedUsers = localStorage.getItem('AllowedUsers').split(',');

let usernameInput = document.getElementById('usernameInput');
let button = document.getElementById('logInB');
button.addEventListener('click', ()=>{ 
    if(allowedUsers.includes(String(usernameInput.value))) { 
        setCookie("LogIn", "true"); window.location.href = 'index1.html'; }
    else {alert("You don`t have access");}
 });

function setCookie(name, value, expires = "", path = "", domain = "", secure = "") {
    document.cookie = `${name}=${value}` +
        (expires ? ";expires=" + expires.toUTCString() : "") +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        (secure ? ";secure=" + secure : "")
}

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