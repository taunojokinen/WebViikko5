//const image = document.getElementById('myImage')
const dice = document.querySelector('img')

const randNum = (min,max) => {
    
    return Math.floor(Math.random() *max) + min
}

dice.addEventListener('click',() => {
//    alert("hello world")
    dice.src="./img/" + randNum(1,6) + ".png" 
})



