let body = document.getElementById('body')
let sound1 = document.getElementById('first-sound')
let sound2 = document.getElementById('second-sound')
let sequence = document.getElementById('Sequence')
let clean = document.getElementById('Clean')
let array = ['a','s','d','f']
let index = 0

function PlaySound1(){
    sound1.currentTime = 0
    sound1.play()
}
function PlaySound2(){
    sound2.currentTime = 0
    sound2.play()
}
function ShowSequence(){
    sequence.innerText = array.slice(index).join(' ')
}
let Check = function (key){
    if(key === array[index]){
        index++
        if(index === array.length)
        {
            alert("Victory!")
            sequence.innerText = ''
            clean.innerText = "YOU WON!"
        }
        else
            sequence.innerText = array.slice(index).join(' ')
    }
    else
        alert("Defeat!")
}
document.addEventListener("keydown",(e)=>{
    //1
    switch(e.key){
        //1
        case 'q': PlaySound1()
            break
        case 'w': PlaySound2()
            break
        //2
        case '+': {
            e.preventDefault()
            let currentSize = parseInt(window.getComputedStyle(document.body).fontSize)
            let size = currentSize + 10
            document.body.style.fontSize = `${size}px`
        }
            break
        case '-':{
            e.preventDefault()
            let currentSize = parseInt(window.getComputedStyle(document.body).fontSize)
            let size = currentSize - 10
            document.body.style.fontSize = `${size}px`
        }
            break
        //3
        case 'r': body.style.backgroundColor = "red"
            break
        case 'g': body.style.backgroundColor = "green"
            break
        case 'b': body.style.backgroundColor = "blue"
            break
        //4
        case 'z': body.style.background = 'url(../images/papa1.jpg)'
            break
        case 'x': body.style.background = 'url(../images/papa2.jpg)'
            break
        //5
        default: Check(e.key)
        break
    }
})
document.addEventListener("DOMContentLoaded", ShowSequence)


