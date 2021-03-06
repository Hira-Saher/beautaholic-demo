



// add the cart count to the cart
var CurrentCart = JSON.parse(localStorage.getItem('myCart'));
if(CurrentCart){
var mycartcount = document.getElementById('mycartcount');
if(mycartcount){
  mycartcount.innerHTML = CurrentCart.length;
  }
}
// add the cart count to the cart



//=========load JSON to LOCAL STORAGE===============//

let jsonData = `{
  "category": [
    {
      "name": "makeup",
      "id": 1,
      "image": "images/products/001.png",
      "subCategory": [
        {
          "c_id": 1,
          "category": "makeup",
          "name": "BB Cream",
          "image": "images/products/01.jpg",
          "desc": "5 in 1 Daily Moisturizer",
          "type": "all skin type",
          "price": 80,
          "productPageLink": "product-1.html"
        },
        {
          "c_id": 2,
          "category": "makeup",
          "name": "Makeup Fixer",
          "image": "images/products/02.jpg",
          "desc": "Firmly setting the make-up",
          "type": "all skin type",
          "price": 150,
          "productPageLink": "product-2.html"
        },
        {
          "c_id": 3,
          "category": "makeup",
          "name": "Makeup Remover",
          "image": "images/products/03.jpg",
          "desc": "Effectively removes make-up",
          "type": "all skin type",
          "price": 130,
          "productPageLink": "product-3.html"
        },
        {
          "c_id": 6,
          "category": "makeup",
          "name": "HD Finishing Powder",
          "image": "images/products/06.jpg",
          "desc": "Mineral Based Oil-Free",
          "type": "For All Skin type",
          "price": 160,
          "productPageLink": "product-6.html"
        },
        {
          "c_id": 7,
          "category": "makeup",
          "name": "Liquid Foundation",
          "image": "images/products/07.jpg",
          "desc": "Available For All skin types",
          "type": "For All Skin type",
          "price": 170,
          "productPageLink": "product-7.html"
        }
      ]
    },
    {
      "name": "skincare",
      "id": 2,
      "image": "images/products/002.png",
      "subCategory": [
        {
          "c_id": 4,
          "category": "skincare",
          "name": "Anti Aging Cream",
          "image": "images/products/04.jpg",
          "desc": "Age Revive",
          "type": "For aging skin",
          "price": 180,
          "productPageLink": "product-4.html"
        },
        {
          "c_id": 5,
          "category": "skincare",
          "name": "Collagen Moisturizer",
          "image": "images/products/05.jpg",
          "desc": "SPF-10 (For All Skin Type)",
          "type": "For Teenagers",
          "price": 200,
          "productPageLink": "product-5.html"
        },
        {
          "c_id": 8,
          "category": "skincare",
          "name": "Tea-Tree Oil",
          "image": "images/products/08.jpg",
          "desc": "Suitable for blemished skin",
          "type": "For blemished skin",
          "price": 190,
          "productPageLink": "product-8.html"
        }
      ]
    },
    {
      "name": "haircare",
      "id": 3,
      "image": "images/products/003.png",
      "subCategory": [
        {
          "c_id": 9,
          "category": "haircare",
          "name": "Rose Hip Hair",
          "image": "images/products/09.jpg",
          "desc": "Smoothing Shampoo",
          "type": "For Frizzy hairs",
          "price": 250,
          "productPageLink": "product-9.html"
        },
        {
          "c_id": 10,
          "category": "haircare",
          "name": "Honey & Vitamin B",
          "image": "images/products/10.jpg",
          "desc": "Sulfate-Free Shampoo",
          "type": "For Split Ends",
          "price": 250,
          "productPageLink": "product-10.html"
        },
        {
          "c_id": 11,
          "category": "haircare",
          "name": "Cucumber And Green Tea",
          "image": "images/products/11.jpg",
          "desc": "Herbal Shampoo",
          "type": "For dry hairs",
          "price": 250,
          "productPageLink": "product-11.html"
        }
      ]
    }
  ]
}
`;

let myJson = localStorage.getItem('myJson');

if(!myJson){
localStorage.setItem('myJson',jsonData);
}


//=========load JSON to LOCAL STORAGE===============//




//=========cart work===========================//
let carts = document.querySelectorAll('.fa-shopping-cart');

for (let i=0; i < carts.length; i++) {
   carts[i].addEventListener('click', () => {
     cartNumbers(carts[i].id);
  })
  
}



function cartNumbers(productid) {
  //console.log("The product clicked is" , productid);


let myJsonData = localStorage.getItem('myJson');
let myCart = localStorage.getItem('myCart');

let UpdatedCart = [];

// this will insert exisitng cart data to array
if(myCart){
  _myCart = JSON.parse(myCart);
  for (var i = 0; i < _myCart.length; i++) {
    UpdatedCart.push(_myCart[i]);
  }

}
// this will insert exisitng cart data to array


if(myJsonData){
  var data = JSON.parse(myJsonData);
  for (let item of data.category) {
    //console.log(item.subCategory); 
    for (let category of item.subCategory) {
       //console.log(category.name);

       if(category.c_id == productid){

        UpdatedCart.push(category);
        //console.log(category);

        }
      }
    }
  }



localStorage.setItem('myCart',JSON.stringify(UpdatedCart));

var mycartcount = document.getElementById('mycartcount');
if(mycartcount){
  mycartcount.innerHTML = UpdatedCart.length;
}
//=======================cart work end===================//

  
}


