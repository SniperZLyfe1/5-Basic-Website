
const lightMode = document.querySelector('.lightbulb-light')
const nightMode = document.querySelector('.lightbulb-dark')

let currentLighting = 'rgb(41, 41, 41)'
let currentTextColor = 'white'

function loadTitleText(){
    let titleText = "Hi, I'm Ali"
    let sum = 1;
    const h1Text = document.querySelector('.my-bio h1')
        console.log(h1Text)
    for(let i = 0; i < titleText.length; i++){
        setTimeout(() => {
            h1Text.innerHTML += titleText[i]
        }, 100*sum);
        sum++
    }
}

function loadBioText(){
    let bioText = `I'm a software engineer with a focus on the javascript programming language, react,
     and monga DB. I primarily do web design and application development. Additionally, I want to pursue 
     a career in game production.`
    let sum = 1;
    const smallText = document.querySelector('.my-bio p')
        console.log(bioText)
    for(let i = 0; i < bioText.length; i++){
        setTimeout(() => {
            smallText.innerHTML += bioText[i]
        }, 5*sum);
        sum++
    }
}

loadTitleText()
loadBioText()

lightMode.addEventListener('click', toggleLighting)
nightMode.addEventListener('click', toggleLighting)

function toggleLighting(){
    lightMode.classList.toggle('hidden')
    nightMode.classList.toggle('hidden')
    currentLighting = currentLighting === 'rgb(41, 41, 41)' ? 'white' : 'rgb(41, 41, 41)'
    currentTextColor = currentTextColor === 'white' ? 'rgb(56, 117, 182)': 'white'
    document.body.style.backgroundColor = currentLighting
    document.body.style.color = currentTextColor
}



