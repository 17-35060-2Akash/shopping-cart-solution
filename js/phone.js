

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newProductNumber = updateProductNumber(true, 'phone-number-field');
    updateProductTotalPrice(newProductNumber, 'phone-total', 1219);
    getSubTotal();

});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    if (parseInt(document.getElementById('phone-number-field').value) > 0) {
        const newProductNumber = updateProductNumber(false, 'phone-number-field');
        updateProductTotalPrice(newProductNumber, 'phone-total', 1219);
        getSubTotal();
    }
});