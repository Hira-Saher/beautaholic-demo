
// add the cart count to the cart
var CurrentCart = JSON.parse(localStorage.getItem('myCart'));
if(CurrentCart){
var mycartcount = document.getElementById('mycartcount');
if(mycartcount){
  mycartcount.innerHTML = CurrentCart.length;
  }
}
// add the cart count to the cart



function categorySelected(mycategory){
console.log(mycategory);
fetchData(mycategory);



}


function fetchData(mycategory) {

  
let myJsonData = localStorage.getItem('myJson');

//==============this will get first item of every category
var products = '';
if(myJsonData){
  var data = JSON.parse(myJsonData);
  for (let item of data.category) {
    //console.log(item.subCategory); 
    for (let category of item.subCategory) {
       //console.log(category.name);

       if(mycategory.length > 0){

if (mycategory == category.category) {

  products += `<div class="col-md-3 card-body">
                  <div class="product2-top card-top">
                    <div class="overlay card-icons">
                      <button type="button" class="btn btn-secondary card-icons-item" title="View">
                        <a href="${category.productPageLink}" data-tip="Quick View"><i class="fa fa-eye" aria-hidden="true"></i></a>
                      </button>
                      <button type="button" class="btn btn-secondary card-icons-item" title="Wishlist">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-secondary card-icons-item" title="Cart">
                        <a href="#mycartcount">  <i class="fa fa-shopping-cart" aria-hidden="true" id="${category.c_id}"></i> </a>
                      </button>
                    </div>
            
                    <img src="${category.image}" onclick="location.href='${category.productPageLink}';"/>
                  </div>
                  <div class="product-bottom text-center" onclick="location.href='${category.productPageLink}';">
                    <ul class="rating">
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star disable"></li>
                    </ul>
                    <a href="${category.productPageLink}" data-tip="Quick View"><h4 class="card-heading">${category.name}</h4></a>
                    <h5 class="card-details">${category.desc}</h5>
                    <h6 class="card-price">Price:$${category.price}</h6>
                    <button id="shopnow-btn">View More</button>
                  </div>
                </div>`;


}

         

       }else{

         products += `<div class="col-md-3 card-body">
                  <div class="product2-top card-top">
                    <div class="overlay card-icons">
                      <button type="button" class="btn btn-secondary card-icons-item" title="View">
                        <a href="${category.productPageLink}" data-tip="Quick View"><i class="fa fa-eye" aria-hidden="true"></i></a>
                      </button>
                      <button type="button" class="btn btn-secondary card-icons-item" title="Wishlist">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                      </button>
                      <button type="button" class="btn btn-secondary card-icons-item" title="Cart">
                       <a href="#mycartcount">  <i class="fa fa-shopping-cart" aria-hidden="true" id="${category.c_id}"></i> </a>
                      </button>
                    </div>
            
                    <img src="${category.image}" onclick="location.href='${category.productPageLink}';"/>
                  </div>
                  <div class="product-bottom text-center" onclick="location.href='${category.productPageLink}';">
                    <ul class="rating">
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star"></li>
                      <li class="fa fa-star disable"></li>
                    </ul>
                    <a href="${category.productPageLink}" data-tip="Quick View"><h4 class="card-heading">${category.name}</h4></a>
                    <h5 class="card-details">${category.desc}</h5>
                    <h6 class="card-price">Price:$${category.price}</h6>
                    <button id="shopnow-btn">View More</button>
                  </div>
                </div>`;
       }
       
        //break;
    }
  }
}

let productcategory = document.getElementById('productcategory');
if(productcategory){
productcategory.innerHTML = products;  



let carts = document.querySelectorAll('.fa-shopping-cart');

for (let i=0; i < carts.length; i++) {
   carts[i].addEventListener('click', () => {
     cartNumbers(carts[i].id);
  })
  
}


}

//==============this will get first item of every category


}


fetchData('');
