document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: "product 1", price: 1000, image: "./assets/image-8.jpg" },
        { id: 2, name: "product 2", price: 1500, image: "./assets/image-2.jpg" },
        { id: 3, name: "product 3", price: 2000, image: "./assets/image-3.jpg" },
        { id: 4, name: "product 4", price: 2500, image: "./assets/image-4.jpg" },
        { id: 5, name: "product 5", price: 3000, image: "./assets/image-5.jpg" },
        { id: 6, name: "product 6", price: 3500, image: "./assets/image-6.jpg" },
        { id: 7, name: "product 7", price: 4000, image: "./assets/image-7.jpg" },
        { id: 8, name: "product 8", price: 4500, image: "./assets/image-8.jpg" },
        { id: 9, name: "product 9", price: 5000, image: "./assets/image-9.jpg" },
        { id: 10, name: "product 10", price: 5500, image: "./assets/image-10.jpg" },
        { id: 11, name: "product 11", price: 6000, image: "./assets/image-11.avif" },
        { id: 12, name: "product 12", price: 6500, image: "./assets/image-12.jpg" },
    ];
    var productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const goToCartButton = document.getElementById("go-to-cart");
    const shoppingCart = document.getElementById("shopping-cart");

    let cart = [];

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.setAttribute("data-id", product.id);
        productCard.setAttribute("data-name", product.name);
        productCard.setAttribute("data-price", product.price);
        productCard.setAttribute("data-image", product.image);
        // productCard.innerText = 'sdfsd';
        productCard.innerHTML = `
            <img src="${product.image}" alt ="${product.name}">
            <h3> ${product.name}</h3>
            <p>Price: $${product.price}</p>  
            <button class = "add-to-cart">Add to Cart</button>
            `;
        productList.append(productCard);

    });

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const productCard = e.target.closest(".product");
            const id = productCard.getAttribute("data-id");
            const name = productCard.getAttribute("data-name");
            const price = parseInt(productCard.getAttribute("data-price")); //add to parseFloat
            const image = productCard.getAttribute("data-image");

            addToCart(id, name, price, image);
        });
    });

    goToCartButton.addEventListener("click", function(){

        shoppingCart.classList.toggle("hidden")
    });

    function addToCart(id, name, price, image) {
        const itemIndex = cart.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            cart[itemIndex].quantity += 1;
        } else {
            cart.push({ id, name, price, image, quantity: 1 });
        }
        updateCart();
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement("li");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            const info = document.createElement("div");
            info.textContent = `${item.name} - $${item.price}  ${item.quantity}`;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove");
            removeButton.addEventListener("click", () => removeFromCart(item.id));

            listItem.appendChild(img);
            listItem.appendChild(info);
            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);

            total += item.price * item.quantity;

        });

        totalPriceElement.textContent = total;

    }

    document.getElementById("checkout").addEventListener("click", () => {
        if (cart.length > 0) {
            const cartJSON = JSON.stringify(cart);
            console.log("Cart:", cartJSON);
            alert('Checkout: ' + cartJSON);
            cart = [];
            updateCart();

        } else {
            alert("cart is emty")
        }
    });

});