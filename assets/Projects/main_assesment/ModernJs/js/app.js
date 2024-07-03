let totalProducts = [];
let totalUsers = [];

let mainpage = document.getElementById('main-content');
let adminPageContent = document.getElementById('admin-page');
let container = document.getElementById('products-list');
let usercontainer = document.getElementById('user-list');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let productSearch = document.getElementById('product-search');
let userSearch = document.getElementById('user-search');
let adminUserList = document.getElementById('admin-user-list');
let adminProductList = document.getElementById('admin-product-list');
let transactionPage = document.getElementById('transaction-page');
let transactionProductList = document.getElementById('transaction-product-list');
let transactionUsername = document.getElementById('transaction-username');
let totalprice = document.getElementById('total-price');
let productsContainer = document.createElement('div');
productsContainer.className = 'row';
container.appendChild(productsContainer);

// Fetch product
fetch("assets/products.json")
  .then(res => res.json())
  .then(data => {
    totalProducts = data.ProductCollection;
    cartProduct(totalProducts);
  })

// adding a new user
let useridvalue;

function generateRandomId(){
  return Math.floor(9000000 + Math.random()*8999999)
}

function showNumber(){
  useridvalue = generateRandomId();
  userId.innerHTML = useridvalue;
}
showNumber();

function addUser() {
  let usernamevalue = userName.value.trim();

  if (usernamevalue && useridvalue) {
    let user = { username: usernamevalue, userid: useridvalue };
    totalUsers.push(user);
    displayUsers(totalUsers);
    userName.value = '';
    showNumber();

    userId.value = '';
  } 
  else {
    alert('Enter username');
  }
}

//display users
function displayUsers(userList) {
  usercontainer.innerHTML = '';
  adminUserList.innerHTML = '';

  userList.forEach(user => {
    let listUsers = document.createElement('div');
    listUsers.className = 'd-flex justify-content-between align-items-baseline  border border-2 rounded mt-2 p-3';
    listUsers.innerHTML = `
      <h6 class="text-secondary text-center">${user.username}</h6>
      <h6 class="text-secondary text-center">${user.userid}</h6>
      <button class="btn btn-warning text-white fw-bold" onclick="selectUser('${user.username}', '${user.userid}')">ADD</button>
      `;
    usercontainer.appendChild(listUsers);

    let adminUserDiv = document.createElement('div');
    adminUserDiv.className = 'd-flex justify-content-between align-items-baseline border border-2 rounded mt-2 p-3';
    adminUserDiv.innerHTML = `<h5 class="text-secondary text-center">${user.username}</h5>
                              <h5 class="text-secondary text-center">${user.userid}</h5>`;
    adminUserList.appendChild(adminUserDiv);
  });
}

// User search in admin page
const adminUserSearch = document.getElementById('admin-user-search');
adminUserSearch.addEventListener('input', () => {
  const searchTerm = adminUserSearch.value.trim().toLowerCase();
  const filteredUsers = totalUsers.filter(user =>
    user.username.toLowerCase().includes(searchTerm)
  );
  displayUsers(filteredUsers);
});

//user search
userSearch.addEventListener('input', () => {
  const searchTerm = userSearch.value.trim().toLowerCase();
  const filteredUsers = totalUsers.filter(user =>
    user.username.toLowerCase().includes(searchTerm)
  );
  displayUsers(filteredUsers);
});

//display cartProduct 
function cartProduct(listdata) {
  productData(listdata);

  // product search
  productSearch.addEventListener('input', () => {
    const searchTerm = productSearch.value.trim().toLowerCase();
    const filteredData = totalProducts.filter(product => product.ProductId.toLowerCase().includes(searchTerm));
    productData(filteredData);
  });
}

//display productData
function productData(listdata) {
  productsContainer.innerHTML = '';
  adminProductList.innerHTML = '';

  listdata.forEach(product => {
    let columProductContainer = document.createElement('div');
    columProductContainer.className = 'col-md-3 mb-3';
    columProductContainer.innerHTML = `
       <div class="card h-100">          
          <img src='${product.ProductPicUrl}' class="card-img-top" width='100px' height='150' alt="${product.ProductId}">
          <div class="card-body">
          <h5 class="card-title">${product.ProductId}</h5>
          <p class="card-text">Category: ${product.Category}</p>
          <p class="card-text">Price: ${product.Price}</p>
          <p class="card-text">Quantity: ${product.Quantity}</p>
          <button class="btn btn-warning text-white fw-bold" onclick="selectProduct('${product.ProductId}','${product.ProductPicUrl}', '${product.Category}', '${product.Price}', '${product.Quantity}')">ADD</button>
          </div>
          </div>
          `;
    productsContainer.appendChild(columProductContainer);

    let adminProductDiv = document.createElement('div');
    adminProductDiv.innerHTML = `<p>${product.ProductId} - ${product.Category} - ${product.Price}</p>`;
    adminProductDiv.className = 'border-bottom p-2';
    adminProductList.appendChild(adminProductDiv);
  });
}

// Selected user and products
let selectedUser = null;
let selectedProducts = [];

function selectUser(username, userid) {
  selectedUser = { username, userid };
  // navigateToTransactionPage();
}

function selectProduct(ProductId, ProductPicUrl, Category, Price, ) {
  let product = { ProductId, ProductPicUrl, Category, Price, Quantity:1 };
  selectedProducts.push(product);
  //   navigateToTransactionPage();
}

// Navigate to transaction page
function navigateToTransactionPage() {
  if (selectedUser && selectedProducts.length > 0) {
    transactionUsername.textContent = selectedUser.username;
    transactionProductList.innerHTML = '';
    let totalamount = 0;
    selectedProducts.forEach((product,index) => {
      const productPrice = product.Price;

      const productItem = document.createElement('div');
      productItem.className = '';
      productItem.innerHTML = `     
           <div class='d-flex indebtn justify-content-between align-items-center border border-2 rounded mt-2 p-3'> 
          <img src="${product.ProductPicUrl}"width=70px>
          <p class="mb-0">${product.ProductId}</p>
           <button class="btn btn-danger " style='height: 40px'
          onclick="decreaseQuantity(this)">
          <i class="fas fa-minus"></i>
          </button>            
          <div class="d-block text-center">
          <input id="form1"min="1"name="quantity"value="${product.Quantity}"type="number"class="form-control"/>
          <label class="form-label mt-1" for="form1">Quantity</label>
          </div>
          <button class="btn btn-success gradient-custom"style='height: 40px'
          onclick="increaseQuantity(this)">
          <i class="fas fa-plus"></i>
          </button>
          <p class="h4 proPrice">${productPrice * product.Quantity}</p>
          <button type="button"class="delete btn btn-primary btn-sm me-1 mb-2" ><i class="fas fa-trash"></i></button>
          </div>
          `;
      transactionProductList.appendChild(productItem);
      
      totalamount += product.Price * product.Quantity;

      //delete the product in transaction page
      const deleteIcon = productItem.querySelector('.delete');
      deleteIcon.addEventListener('click', () => {
        selectedProducts.splice(index, 1);
        productItem.remove();
      });

    });
    totalprice.innerText = totalamount;
    
    mainpage.style.display = 'none';
    transactionPage.classList.remove('d-none');
    transactionPage.classList.add('d-block');
  }
  else {
    alert('Please select user and product');
  }
}

//increase quantity
function increaseQuantity(button) {
  const parentDiv = button.closest('.indebtn');
  const quantityInput = parentDiv.querySelector('input[name="quantity"]');
  const priceProduct = parentDiv.querySelector('.proPrice');
  const productPrice = (priceProduct.textContent) / (quantityInput.value);
  
  quantityInput.stepUp();
  const newQuantity = quantityInput.value;
  priceProduct.textContent = productPrice * newQuantity;
}
//decrease quantity
function decreaseQuantity(button) {
  const parentDiv = button.closest('.indebtn');
  const quantityInput = parentDiv.querySelector('input[name="quantity"]');
  const priceProduct = parentDiv.querySelector('.proPrice');
  const productPrice = (priceProduct.textContent) / (quantityInput.value);
  
  quantityInput.stepDown();
  const newQuantity = quantityInput.value;
  priceProduct.textContent = productPrice * newQuantity;
}

// transaction page back button
let addcartBackBtn = document.getElementById('back-button');
addcartBackBtn.addEventListener('click', () => {
  transactionPage.classList.add('d-none');
  document.getElementById('main').classList.remove('d-none');
  resetTransaction();
});

//payment button
document.getElementById('payment-button').addEventListener('click', () => {
  paymentSuccessModal();
  resetTransaction();
  selectedUser = null;
  selectedProducts = [];
});

//chectout page
let checkoutBtn = document.getElementById('checkoutProduct');
checkoutBtn.addEventListener('click',()=>{
  paymentSuccessModal()
  resetTransaction();
  selectedUser = null;
  selectedProducts = [];

})

//payment modal
function paymentSuccessModal(){
  let paymentSucces = new bootstrap.Modal(document.getElementById('paymentmodal'));
  paymentSucces.show();
}
// admin page
function showAdminPage() {
  mainpage.style.display = 'none';
  adminPageContent.style.display = 'block';
  transactionPage.style.display = 'none'
}

//admin page back button
const backToMainButton = document.getElementById('back-to-main-button');
backToMainButton.addEventListener('click', () => {
  mainpage.style.display = 'block';
  adminPageContent.style.display = 'none';
  transactionPage.style.display = 'none'
  navigateToTransactionPage.style.display= 'none'
  resetTransaction();
});

function resetTransaction() {
  transactionPage.classList.remove('d-block');
  transactionPage.classList.add('d-none');
  mainpage.style.display = 'block';
}

//theme
var nav = document.getElementById('nav');
function mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  nav.classList.toggle('nav')
}


