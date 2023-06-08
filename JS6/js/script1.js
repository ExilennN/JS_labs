const addToCartButtons = document.querySelectorAll('#products button[data-name][data-price]');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {      
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push ({name, price});

        localStorage.setItem('cart', JSON.stringify(cart));
    });
});
