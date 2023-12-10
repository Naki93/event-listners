document.addEventListener('DOMContentLoaded', function(){

    // const sayHiButton = document.getElementsByTagName(button)
    const buttonElement = document.querySelector('button')
    const spanElement = document.querySelector('span')

    buttonElement.addEventListener('click', function(){
//why is the prompt not given a variable?
const whatIsYourName = prompt('what is your name?')
spanElement.textContent = whatIsYourName
    })
})