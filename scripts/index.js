function firstShow(){

    let main=document.querySelector("main")
     let multipleProduct="";
     items.map((e)=>{
    return multipleProduct+=`<div class="product">
        <img src="./${e.image}" alt="">
        <p>${e.rating.stars} <span class="star">★★★★★</span> | (${e.rating.count})</p>
        <h2>${e.company}</h2>
        <h5>${e.item_name}</h5>
        <h1>$${e.current_price} <span class="original-price">$${e.original_price}</span> <span class="discount">${e.discount_percentage}% OFF</span></h1>
        <button>Add to Cart</button>
     </div>`
     })
     main.innerHTML=multipleProduct;
}
firstShow()
let 