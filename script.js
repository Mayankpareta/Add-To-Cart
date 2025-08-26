const productWrapper = document.querySelector('#wrapper');
const productCard = document.querySelector('#middle');

const productItems = [
    {
        image: 'public/pexels-ekaterina-bolovtsova-6766261.jpg',
        id: '1',
        productName: 'Roller Facial Massager ',
        description: 'Amazing Benefits - It helps to improve blood circulation, skin tone, skin elasticity and lymphatic drainage.',
        price: 428,
        aboutBtn: 'Learn More',
        buyBtn: 'Buy',
        addToCartBtn: 'Add to Cart'
    },
    {
        image: 'public/pexels-karolina-grabowska-4041392.jpg',
        id: '2',
        productName: 'Face Serum',
        description: 'NATURAL GLOW BOOSTER: This glow serum ensures high delivery of Vit C directly into your skin.',
        price: 199,
        aboutBtn: 'Learn More',
        buyBtn: 'Buy',
        addToCartBtn: 'Add To Cart'
    },
    {
        image: 'public/pexels-laryssa-suaid-798122-1667071.jpg',
        id: '3',
        productName: 'Lip Balm',
        description: 'Natural ingredients blended to curate an enriching lip balm Rejuvenates the lips and repairs them Results visible in days Easy to apply',
        price: 210,
        aboutBtn: 'Learn More',
        buyBtn: 'Buy',
        addToCartBtn: 'Add To Cart'
    },
    {
        image: 'public/pexels-pixabay-279480.jpg',
        id: '4',
        productName: 'Hair Serum',
        description: ' It boosts hair density and regenerates new hair by restarting the hair growth cycle',
        price: 99,
        aboutBtn: 'Learn More',
        buyBtn: 'Buy',
        addToCartBtn: 'Add To Cart'
    }
]

const cartItems = []

productItems.map((item) => {
    const productCard = document.createElement('div')
    productCard.setAttribute('id', 'middle')
    productCard.innerHTML = `
         <div id="box">
            <img src=${item.image}  id="middle-image">                                               
        <div id="card-text">
          <h2 id="text"> ${item.productName}</h2>
            <div id="sec-text" > ${item.description}</div>
        </div> 
        <h3 style="color: teal; margin: 5px; padding-bottom: 10px; padding-left: 21px;">price: ${item.price}$</h3>
        <div id="card-base"> 
           <div id="card-button">
              <button id="button">${item.aboutBtn}</button>
              <button id="button">${item.buyBtn}</button>
              <button productId=${item.id} id="cart-Btn">${item.addToCartBtn}</button>
              <br>                                                                      
           </div>
        </div>        
    </div>
    `
    productWrapper.appendChild(productCard)
})

productWrapper.addEventListener('click', (e) => {
    if (e.target.id === 'cart-Btn') {
        const productId = e.target.getAttribute('productId')
        const cartProduct = productItems.find((items) => {
            return items.id === (productId)
        })
        cartItems.push(cartProduct)
        localStorage.setItem('products', JSON.stringify(cartItems))

    }
})
