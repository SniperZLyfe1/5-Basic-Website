const loadingContainer = document.querySelector('.loading-container')
const websiteContainer = document.querySelector('.main-website')

setTimeout(() => {
    loadingContainer.classList.add('hidden')
    websiteContainer.classList.remove('hidden')
},5000)