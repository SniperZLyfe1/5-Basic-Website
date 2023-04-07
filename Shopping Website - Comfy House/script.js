import {productsList} from './products.js'

const productContainer = document.querySelector('.products-container')
const navContainer = document.querySelector('.nav-container')
const cartIconLabel = document.querySelector('.right-sidebar')
const cartContainer = document.querySelector('.cart-container')
const totalAmountLabel = document.querySelector('.total-cart-amount')
const toggleRightSideBar = document.querySelector('.right-sidebar')
const rightContainer = document.querySelector('.right-sidebar-container')
const clearCart = document.querySelector('.cleart-cart')

toggleRightSideBar.addEventListener('click', () => rightContainer.classList.toggle('hidden'))

function createProduct(backgroundImg, title, price){
    const product = document.createElement('div')
    product.className = 'products'
    product.innerHTML = `
        <div class="product-img" style="background-image: url('${backgroundImg}')">
            <button class="add-cart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
        </div>
        <h2 class="product-title">${title}</h2>
        <small class="product-price">$${price}</small>
    `
    productContainer.appendChild(product)
}

productsList.map((product) => {
    createProduct(product.image,product.name,product.price)
})

window.addEventListener('scroll',(e) => {
    const pos = window.scrollY
    if(pos > 820){
        navContainer.classList.add('active')
    }else{
        navContainer.classList.remove('active')
    }
})

const observer = new IntersectionObserver(enteries => {
    enteries.forEach(entry =>{
        entry.target.classList.add('active', entry.isIntersecting)
    })
})

observer.observe(productContainer)

const addToCartBtn = document.querySelectorAll('.add-cart')
let allPrices = []

addToCartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const imgURL = (btn.closest('.products').querySelector('.product-img').style.backgroundImage).slice(5,-2)
        const productTitle = btn.closest('.products').querySelector('.product-title').innerHTML
        const productPrice = btn.closest('.products').querySelector('.product-price').innerHTML
        cartContainer.innerHTML += `
            <div class="cart-item">
                <div class="left-side">
                    <div class="left-side-img"><img class="cart-image" src="${imgURL}" alt="${productTitle}"></div>
                    <div class="right-side-img">
                        <small class="cart-name">${productTitle}</small>
                        <small class="cart-price">${productPrice}</small>
                        <button class="cart-remove">remove</button>
                    </div>
                </div>
                <div class="right-side">
                    <i class="fa-solid fa-chevron-up cart-counter-up"></i>
                    <small class="cart-item-amount">0</small>
                    <i class="fa-solid fa-chevron-down cart-counter-down"></i>
                </div>
            </div>
        `
        cartIconLabel.setAttribute('data-value',document.querySelectorAll('.cart-item').length)
        const removeCartBtn = document.querySelectorAll('.cart-remove')
        const cardPrice = document.querySelectorAll('.cart-price')
        const increaseCount = document.querySelectorAll('.cart-counter-up')
        const decreaseCount = document.querySelectorAll('.cart-counter-down')
        allPrices = []
        cardPrice.forEach(price => allPrices.push(Number(price.innerHTML.slice(1))))
        console.log(allPrices)
        totalAmountLabel.innerHTML = (allPrices.reduce((a,c) => a+c,0)).toFixed(2)
        
        removeCartBtn.forEach(remove => {
            remove.addEventListener('click', () => {
                const price = remove.closest('.cart-item').querySelector('.cart-price').innerHTML.slice(1)
                const currentCount = Number(remove.closest('.cart-item').querySelector('.cart-item-amount').innerHTML)
                for(let i = 0; i <= currentCount; i++){
                    allPrices.splice(allPrices.indexOf(+price),1)
                }
                remove.closest('.cart-item').remove()
                cartIconLabel.setAttribute('data-value',document.querySelectorAll('.cart-item').length)
                totalAmountLabel.innerHTML = (allPrices.reduce((a,c) => a+c,0)).toFixed(2)
            })
        })

        increaseCount.forEach(increase => {
            increase.addEventListener('click', () => {
                const price = increase.closest('.cart-item').querySelector('.cart-price').innerHTML.slice(1)
                const currentCount = increase.closest('.cart-item').querySelector('.cart-item-amount').innerHTML
    
                allPrices.push(Number(price))
                totalAmountLabel.innerHTML = (allPrices.reduce((a,c) => a+c,0)).toFixed(2)
                increase.closest('.cart-item').querySelector('.cart-item-amount').innerHTML = Number(currentCount)+1
            })
        })

        decreaseCount.forEach(decrease => {
            decrease.addEventListener('click', () => {
                const price = decrease.closest('.cart-item').querySelector('.cart-price').innerHTML.slice(1)
                const currentCount = decrease.closest('.cart-item').querySelector('.cart-item-amount').innerHTML
                if(+currentCount < 1) return
                allPrices.splice(allPrices.indexOf(+price),1)
                totalAmountLabel.innerHTML = (allPrices.reduce((a,c) => a+c,0)).toFixed(2)
                decrease.closest('.cart-item').querySelector('.cart-item-amount').innerHTML = Number(currentCount)-1
            })
        })
        
    })
})

clearCart.addEventListener('click', () => {
    allPrices = []
    totalAmountLabel.innerHTML = 0;
    cartContainer.innerHTML = ''
    cartIconLabel.setAttribute('data-value',0)
})