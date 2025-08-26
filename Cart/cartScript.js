document.addEventListener('DOMContentLoaded', () => {

    const cartEmptyText = document.querySelector("#cart-empty");
    const cartWrapper = document.querySelector("#cart-wrapper");
    const total = document.querySelector("#total");
   
    let quantity = 0 
    let totalPrice = 0 
    const addToCartItems = [];
    
    const itemFromLocalStorage = JSON.parse(localStorage.getItem('products'))
    addToCartItems.push(itemFromLocalStorage)
    
    if(addToCartItems.length === 0) {
        cartEmptyText.hidden = true;
    }
   
    displayCartItems()
    
    function displayCartItems() {
        addToCartItems.forEach((item) => {            
            item.forEach((item) => {                           
                const productCard = document.createElement('div')
                productCard.setAttribute('id', 'middle')
                productCard.innerHTML = `
                    <div id="box">
                       <img src=../${item.image}   id="middle-image">                                               
                       <div id="card-text">
                            <h2 id="text"> ${item.productName}</h2>
                            <div id="sec-text" > ${item.description}</div>
                        </div> 
                        <h3 style="color: teal; margin: 5px; padding-left: 21px;">${item.price}
                        </h3>
                        <div id="card-base"> 
                       <div id="card-button">
                          <button id="button">${item.aboutBtn}</button>
                          <button id="button">${item.buy}</button>
                          <a ><button productId=${item.id} id="cart-Btn">Remove</button></a>
                          <br>                                                               
                       </div>
                    </div>        
                </div> `
                                        
                if(cartWrapper){
                    cartWrapper.appendChild(productCard)
                }
                productCard.addEventListener('click' , (e) => {
                    if(e.target.id === 'cart-Btn') {
                        productCard.remove()                        
                    }
                })
            })                   
        })
        
    }
    
    const findTotal = () => {
        if(addToCartItems.length === 0) return;
        addToCartItems.map((item) => {
            item.map((item) => {
                totalPrice += item.price;
                quantity = addToCartItems[0].length                 
            })
        })
        console.log(totalPrice);                 
        total.innerHTML = `<p id='total-text'> Total Items: ${quantity}</p> <p id='total-text'> Total Price: ${totalPrice} </p>`

    }
    findTotal()
})    













// //Add To Cart

// let cart = [];

// const cartItems = (imageUrl, product, description, price) => {
//     cart.push({imageUrl, product, description, price});
    
//     createCartItem();
// }

// const createCartItem = () => {
//     let listItem = document.querySelector("#");
//     let totlePriceShow = document.querySelector("#");

//     listItem = '';
//     let totlePrice = 0;

//     cart.forEach((item) => {
//         const list = document.createElement('li');
        
//         const img = document.createElement('img')
//         img.src = item.imageUrl;
//         const prodName = document.createElement('h2')
//         prodName.textContent = item.product;
//         const prodDesc = document.createElement('div')
//         prodDesc.textContent = item.description;
//         const prodPrice = document.createElement('div')
//         prodPrice.textContent = item.price

//         list.appendChild(img);
//         list.appendChild(prodName);
//         list.appendChild(prodDesc);
//         list.appendChild(prodPrice);

//         listItem.appendChild(list);

//         totlePrice  += item.price;
//     })
// }




// document.addEventListener('DOMContentLoaded', () => {

//     const menu = document.getElementById('menu')
    
//     const productItems = [
//         {
//             name: 'iphone 11',
//             id: 1,
//             price: 70000,
//             description: 'A smart phone'
//         },       
//         {
//             name: 'laptop',
//             id: 2,
//             price: 3000,
//             description: 'A laptop'
//         },       
//         {
//             name: 'ps5',
//             id: 3,
//             price: 50000,
//             description: 'A gaming console'
//         }
//     ]
    
//     const cartItems = [];
//     const totelPrice = 0;

//     productItems.forEach((items) => {
//         const allItems = document.createElement('div'); 
//         allItems.style.width = '500px';
//         allItems.style.display = 'flex';
//         allItems.style.margin = '30px';
//         allItems.innerHTML = `
//         <span>${items.name}</span>
//         <h5>${items.price}</h5>
//         <p>${items.description}</p>
//         <button item-id='${items.id}'>Add to Cart</button>`   
//         menu.appendChild(allItems);
//         addToCart(allItems);
       
//     });

//     function addToCart(allItems) {
//          allItems.addEventListener('click', (e) => {
//             if(e.target.tagName === 'BUTTON') {
//                const itemId = e.target.getAttribute('item-id') 
                             
//                const cartItem = productItems.find((items) => {                   
//                    return items.id === parseInt(itemId)
//                })                    
//                cartItems.push(cartItem) 
//                console.log(cartItems);                     
//                displayCartItems()   
//                adPrice()                           
//             } else return            
//         })        
//     }
    
//     const cartList = document.querySelector('ol')
//     const total = document.querySelector('#total')
//     function displayCartItems() {
    
        
//     }
        
//     function adPrice() {
//         cartItems.forEach((items) => {

//         })
        
        
//     }
//     total.innerHTML = `total price : ${totelPrice}`
// })