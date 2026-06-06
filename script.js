let productContainer = document.querySelector(".product-div-container");
console.log(data)

let innerHTML=""
data.map((e)=>{
   innerHTML+= `<div class="product-div">
          <img class="product-div-img" src=${e.img} alt="" />
          <h2>
         ${e.productDetails}
          </h2>
          <h6>${e.rating} ⭐ (${e.view})</h6>
          <h6>${e.buyingCount}+ brought in past mounth</h6>
          <div class="price">
            <h1 >$${e.price.buyingPrice}<sup>${e.price.buyingPriceSquar}</sup></h1>
            <span>${e.price.disCount}% off</span>
          </div>
          <button>Add to cart</button>
        </div>`;
})
productContainer.innerHTML=innerHTML