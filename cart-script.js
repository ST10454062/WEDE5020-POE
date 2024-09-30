function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    let total = 0;

    cartItemsDiv.innerHTML = ''; // Clear existing content

    cart.forEach((item, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            ${item.paintName}: R${item.price}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total: R${total}`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload the cart to reflect changes
}

function checkout() {
    localStorage.removeItem('cart');
    alert('Thank you for your purchase!');
    window.location.href = 'index.html'; // Redirect to shop page
}

loadCart();
