const loadingContainer = document.querySelector('.loading-container')
const websiteContainer = document.querySelector('.main-website')
const allSections = document.querySelectorAll('.section')

setTimeout(() => {
    loadingContainer.classList.add('hidden')
    websiteContainer.classList.remove('hidden')
},5000)


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('section--show',entry.isIntersecting)
       
    })
})

allSections.forEach(section => observer.observe(section))