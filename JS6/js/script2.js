

const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartTable = document.querySelector('.table tbody');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

cartItems.forEach(item => {
    const { name, price } = item;
    const total = price;
    totalPrice += total;

    const row = `
        <tr>
            <td>${name}</td>
            <td><img class="gold" src="images/gold.png"><span class="price">${price}</span></td>
        </tr>
    `;

    cartTable.insertAdjacentHTML('beforeend', row);
});
totalPriceElement.textContent = `${totalPrice}`;

const clearButton = document.getElementById("clear-storage");
clearButton.addEventListener('click', () => {
    localStorage.clear();
});