function addToCart(paintName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ paintName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${paintName} added to cart!`);
}

function goToCart() {
    window.location.href = 'cart.html';
}

function joinaworkshop(){
    window.location.href = 'workshops.html';
}
function shopnow(){
    window.location.href = 'shop.html';
}
