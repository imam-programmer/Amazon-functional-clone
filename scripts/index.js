let itemsContainer = document.querySelector(".items-container");
let innerHTML = "";
items.map((e) => {
  return innerHTML += `<div class="product-box">
                <img class="item-image" src="${e.image}" alt="img1">
                <div class="rating">
                    ${e.rating.stars} ⭐ | (${e.rating.count})
                </div>
                <div class="company-name">${e.company}</div>
                <div class="item-name">${e.item_name}</div>
                <div class="price">
                    <span class="current-price">TK ${e.current_price}</span>
                    <span class="original-price">TK ${e.original_price}</span>
                    <span class="discount">(${e.discount_percentage}% off)</span>
                </div>
                <button class="btn-add-bag" onclick="addProduct(${e.id})">Add to Bag</button> 
   </div>`;
});
itemsContainer.innerHTML = innerHTML;
let productCartadd = [];
let secetedItem = document.querySelector(".bag-item-count");

function addProduct(e) {
  productCartadd.push(e);
  localStorage.setItem("selected",JSON.stringify(productCartadd))
  if (productCartadd.length > 0) {
    secetedItem.innerHTML = productCartadd.length;
   
    secetedItem.style.visibility = "visible";
  }
  console.log(productCartadd);
}
secetedItem.style.visibility = "hidden";


