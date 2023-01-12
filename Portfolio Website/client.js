const lightMode = document.querySelector('.lightbulb-light')
const nightMode = document.querySelector('.lightbulb-dark')
const cursorHover = document.querySelector('.cursor-hover')  

let currentLighting = 'rgb(41, 41, 41)'
let currentTextColor = 'white'

function loadTitleText(){
    let titleText = "Hi, I'm Ali"
    let sum = 1;
    const h1Text = document.querySelector('.my-bio h1')
    for(let i = 0; i < titleText.length; i++){
        setTimeout(() => {
            h1Text.innerHTML += titleText[i]
        }, 100*sum);
        sum++
    }
}

function loadBioText(){
    let bioText = `I'm a software engineer with a focus on the javascript programming language, react,
     and monga DB. I primarily do web design and application development. Additionally, I'm doing 
     game development as well.`
    let sum = 1;
    const smallText = document.querySelector('.my-bio p')
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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('section--show',entry.isIntersecting))
})

const allSections = document.querySelectorAll('.section')
allSections.forEach(section => observer.observe(section))

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('game-trans-show',entry.isIntersecting))
})

const imageBlur = document.querySelectorAll('.game-trans')
imageBlur.forEach(img => observer2.observe(img))

document.addEventListener('mousemove', (e) => {
    cursorHover.style.opacity = '1';
    cursorHover.style.left = `${e.pageX}px`
    cursorHover.style.top = `${e.pageY}px`
})