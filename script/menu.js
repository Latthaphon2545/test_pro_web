const product = [
  {
    id: 1,
    img: 'images/Thai-Omelette-HP-191008.jpg',
    name: 'Omelet',
    price: 50,
    type: 'fry',
    AddOn: ['Egg', 'Onion', 'Tomato', 'Chili', 'Salt', 'Pepper']
  },
  {
    id: 2,
    img: 'images/fried-chicken.jpg',
    name: 'Fried Chicken',
    price: 60,
    type: 'fry',
    AddOn: ['Chicken', 'Salt', 'Pepper', 'Oil']
  },
  {
    id: 3,
    img: 'images/stir-fry-with-curry.jpg',
    name: 'Stir fry with curry',
    price: 70,
    type: 'stir-fry',
    AddOn: ['Chicken', 'Salt', 'Pepper', 'Oil', 'Curry']
  }
];

// let nav = document.querySelector("nav");
//       window.addEventListener("scroll", () => {
//         if (document.documentElement.scrollTop > 20) {
//           nav.classList.add("category");
//         } else {
//           nav.classList.remove("category");
//         }
// });

$(document).ready(() => {
  var html = '';
  for (let i = 0; i < product.length; i++) {
      html += ` <div onclick="openProductDetail(${i})" class="menu-items ${product[i].type}">
                  <img class="menu-img" src="${product[i].img}" alt="${product[i].name}"/>
                  <p style="font-size: 4vw">${product[i].name}</p>
                  <div class="price">
                    <p style="font-size: 3.5vw">${numberWithCommas(product[i].price)}</p>
                  </div>
                </div>`;
  }
  $("#productlist").html(html);
})

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}

function searchsomething(elem) {
  var value = $('#'+elem.id).val();
  var html = '';
  for (let i = 0; i < product.length; i++) {
    var name = product[i].name.toLowerCase();
    if (name.includes(value.toLowerCase())){
      html += ` <div onclick="openProductDetail(${i})" class="menu-items ${product[i].type}">
                  <img class="menu-img" src="${product[i].img}" alt="${product[i].name}"/>
                  <p style="font-size: 4vw">${product[i].name}</p>
                  <div class="price">
                    <p style="font-size: 3.5vw">${numberWithCommas(product[i].price)}</p>
                  </div>
                </div>`;
    }
  }
  if(html == '') {
        $("#productlist").html(`<p>Not found product</p>`);
  } else {
      $("#productlist").html(html);
  }
}

function searchproduct(param) {
  // console.log(param)
  $(".menu-items").css('display', 'none')
  if(param == 'all') {
      $(".menu-items").css('display', 'block')
  }
  else {
      $("."+param).css('display', 'block')
  }
}

function hide_show_EverythingExceptDetail(P) {
  var top_container = document.getElementsByClassName("top-container")[0];
  var my_order = document.getElementsByClassName("my-order")[0];
  var nav = document.getElementsByTagName("nav")[0];
  var menu_container = document.getElementsByClassName("menu-container")[0];
  if(P == 'hide') {
    top_container.style.display = "none";
    my_order.style.display = "none";
    nav.style.display = "none";
    menu_container.style.display = "none";
  }
  else {
    top_container.style.display = "";
    my_order.style.display = "";
    nav.style.display = "";
    menu_container.style.display = "";
  }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index; 
    // Hide everything except the detail element
    hide_show_EverythingExceptDetail('hide');
    // Get references to the HTML elements
    var foodDetail = document.getElementById("fooddetail");
    var nameElement = document.getElementById("name");
    var priceElement = document.getElementById("price");
    var imgElement = document.getElementById("mdd-img");
    var addOnElement = document.getElementById("addon");
    // Populate the details based on the selected product
    if (index >= 0 && index < product.length) {
        imgElement.src = product[index].img;
        nameElement.textContent = product[index].name;
        priceElement.textContent = product[index].price;
        for(let i = 0; i < product[index].AddOn.length; i++) {
          var li = document.createElement("li");
          var input = document.createElement("input");
          input.setAttribute("type", "checkbox");
          input.setAttribute("name", "addon");
          input.setAttribute("value", product[index].AddOn[i]);
          li.appendChild(input);
          li.appendChild(document.createTextNode(product[index].AddOn[i]));
          addOnElement.appendChild(li);
        }
    }
    // Show the food detail element
    foodDetail.style.display = "block";
}

function closefooddetail() {
  var foodDetail = document.getElementById("fooddetail");
  foodDetail.style.display = "none";
  var li = document.querySelectorAll("#addon li");
  for(let i = 0; i < li.length; i++) {
    li[i].remove();
  }
  // Show everything except the detail element
  hide_show_EverythingExceptDetail('show');
}

var cart = [];
function addtocart(){
  // console.log("add to cart")
  var pass = true;
    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index ) {
            // console.log('found same product')
            cart[i].count++;
            // console.log(cart[i].count)
            pass = false;
        }
    }
    if(pass) {
      var checkbox_addon = document.querySelectorAll("#addon input");
      var addon = [];
      for(let i = 0; i < checkbox_addon.length; i++) {
        if(checkbox_addon[i].checked) {
          addon.push(checkbox_addon[i].value)
        }
      }
      var obj = {
          index: productindex,
          id: product[productindex].id,
          name: product[productindex].name,
          price: product[productindex].price,
          img: product[productindex].img,
          addon: addon,
          count: 1
      };
      // console.log(obj)
      cart.push(obj)
  }
  // console.log(cart)
  $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
  $('#cart').css('display','block')
  hide_show_EverythingExceptDetail('hide');
  rendercart();
}

function rendercart(){
  if(cart.length > 0){
    var html = '';
        for (let i = 0; i < cart.length; i++){
            html += ` <div class="ordered-list">
                      <img src="${cart[i].img}" style="width: 110px; height: 70px;">
                      <div class="detail">
                          <div class="food-name">
                              <p>${cart[i].name}</p>
                          </div>           
                          <div class="price">
                              <p>${numberWithCommas(cart[i].price * cart[i].count)}</p>
                          </div>
                          <div class="add-ons">
                            <p>${cart[i].addon}</p>
                          </div>
                          <!-- <div class="toppings">
                            <p>minced pork</p>
                          </div> -->
                      </div>
                      <div class="updown-count">
                        <p class="sign" onclick="deinitems('-', ${i})">-</p>
                        <p id="countitems">${cart[i].count}</p>
                        <p class="sign" onclick="deinitems('+', ${i})">+</p>
                      </div>
                      </div>`
        }
        $("#mylist").html(html);
  }
  else {
    $("#mylist").html(`<p>Not found product</p>`);
  }
}

function closeCart() {
  $('#cart').css('display','none')
  hide_show_EverythingExceptDetail('show');
}

function deinitems(action, index) {
  if(action == '-') {
      if(cart[index].count > 0) {
          cart[index].count--;
          $("#countitems"+index).text(cart[index].count)
      }
        if (cart[index].count <= 0) {
            var confirm_delete = confirm("Do you want to delete this item?");
            if (confirm_delete) {
                cart.splice(index, 1);
            }
            else {
                cart[index].count = 1;
            }
        }
  }
  else if(action == '+') {
      cart[index].count++;
      $("#countitems"+index).text(cart[index].count)
  }
  rendercart();
}