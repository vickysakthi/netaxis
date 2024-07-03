let products = [
    {
        id: 101,
        product: "Headset",
        price: 7000,
        img:"./asset/Image.png"
    },
    {
        "id": 102,
        "product": "Oppo",
        "price": 45000,
        "img":'./asset/iphone.jfif'
    },
    {
        "id": 103,
        "product": "One-plus",
        "price": 6000,
        "img":'/asset/iphone.jfif'
    },
    {
        "id": 104,
        "product": "Vivo",
        "price": 4000,
        "img":'/asset/iphone.jfif'
    },
    {
        "id": 105,
        "product": "Samsung",
        "price": 5000,
        "img":'/asset/iphone.jfif'
    },
    {
        "id": 106,
        "product": "Laptop",
        "price": 8000,
        "img":'/asset/iphone.jfif'
    },
    {
        "id": 107,
        "product": "pc",
        "price": 10000,
        "img":'/asset/iphone.jfif'
    },
    {
        "id": 108,
        "product": "Headset",
        "price": 2000,
        "img":'/asset/iphone.jfif'
    }
  ];
let cart = [];
let col2card;

let loginpage = document.getElementById('login-page');
let userpage = document.getElementById('user-list');
let cartpage = document.getElementById('cart-list');

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  loginpage.style.display = 'none';
  userpage.style.display = 'block';

  displayProducts(products);
});

function displayProducts(list) {
  userpage.innerHTML = '';
  let buttonCard = document.createElement('div');
  buttonCard.className = 'card mt-4 bg-info';

  let userName = document.getElementById('name');
  let userHeader = document.createElement('h4');
  userHeader.className = 'text-white text-center';
  userHeader.textContent = userName.value;
  userName.value = '';
  buttonCard.appendChild(userHeader);

  let button = document.createElement('div');
  button.className = 'd-flex justify-content-between p-4';
  button.innerHTML = `<span class='btn btn-danger text-white'>
<a href="./main.html"><i class="fa-solid fa-arrow-left"></i></a>
  </span>
  <span class='btn btn-primary text-white' id='cart-list-page' onclick='displayCart()'>Cart Page</span>`;
  buttonCard.appendChild(button);

  let searchInput = document.createElement('input');
  searchInput.className = "form-control me-2 w-25";
  searchInput.type = "search";
  searchInput.placeholder = "Search";
  searchInput.setAttribute('aria-label', 'Search');
  searchInput.id = 'searchTerm';
  buttonCard.appendChild(searchInput);

  let mainDiv = document.createElement('div');
  mainDiv.className = 'row mt-4 ';

  let col1 = document.createElement('div');
  col1.className = 'col-lg-6 border bg-white';
  let col1card = document.createElement('div');
  let col1Text = document.createElement('p');
  col1Text.className='text-center fs-4'
  col1Text.innerText = 'Product List';

  col1card.appendChild(col1Text);
  col1.appendChild(col1card);
  mainDiv.appendChild(col1);

  let col2 = document.createElement('div');
  col2.className = 'col-lg-6 border bg-white';
  col2card = document.createElement('div'); 
  let col2Text = document.createElement('p');
  col2Text.className='text-center fs-4'
  col2Text.innerText = 'Cart';

  col2.appendChild(col2Text);
  col2.appendChild(col2card);
  mainDiv.appendChild(col2);

  list.forEach((e) => {
      let productDiv = document.createElement('div');
      productDiv.className = 'border p-2 ';
      productDiv.innerHTML = `<div class='d-flex justify-content-between p-2 fw-bold fs-4'> ${e.product} 
                              <button class='btn btn-outline-warning btn-sm ms-2' onclick='addToCart(${e.id})'>Add</button></div>`;
      col1card.appendChild(productDiv);
      searchfunction()
  });

  buttonCard.appendChild(mainDiv);
  userpage.appendChild(buttonCard);
  displayCart();

  
  function searchfunction(){
    searchInput.addEventListener('input', function() {
      let searchTerm = this.value.toLowerCase().trim();
      let filteredData = products.filter(product => product.product.toLowerCase().includes(searchTerm));
      search(filteredData);
  });
}
function search(el){
  while (col1card.firstChild){
    col1card.removeChild(col1card.firstChild)
  }
  let productDiv1 = document.createElement('div');
  productDiv1.className = 'border p-2 ';
  productDiv1.innerHTML = `<div class='d-flex justify-content-between p-2 fw-bold fs-4'> ${el.product} 
                          <button class='btn btn-outline-warning btn-sm ms-2' onclick='addToCart(${el.id})'>Add</button></div>`;
  col1card.appendChild(productDiv1);
}
}

function addToCart(productId) {
  let productToAdd = products.find(product => product.id === productId);
  cart.push(productToAdd);
  displayCart();
}

function displayCart() {
  col2card.innerHTML = ''; 

  cart.forEach(product => {
      let productDiv2 = document.createElement('div');
      productDiv2.className = 'border p-2 mb-2';
      productDiv2.innerHTML = `<div class='d-flex justify-content-between p-2 fw-bold fs-4'>${product.product}
                  <button class='btn btn-outline-danger btn-sm ms-2' onclick='removeFromCart(${product.id})'>Remove</button>
              </div>`;
      col2card.appendChild(productDiv2);
  });
}

function removeFromCart(productId) {
  let index = cart.findIndex(product => product.id === productId);
  if (index !== -1) {
      cart.splice(index, 1);
      displayCart();
  }
}
displayProducts(products);
