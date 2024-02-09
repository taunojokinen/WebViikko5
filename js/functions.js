const dice = document.getElementById('myImage')

const randNum = (min,max) => {
//    alert("hello world")
    return Math.floor(Math.random() *max) + min
    
}

dice.addEventListener('click',() => {
    dice.src="./img/" + randNum(1,6) + ".png" 
})



