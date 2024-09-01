let cart = [];

function addToCart(itemName, price) {
    cart.push({ itemName, price });
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');

    cartItemsDiv.innerHTML = ''; // Clear current cart items
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.itemName} - R${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    totalSpan.textContent = total;
}

function clearCart() {
    cart = [];
    updateCart();
}

