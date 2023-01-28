//hello world
//hi forida

document.getElementById('btn-case-plus').addEventListener('click', function (event) {
    const newProductNumber = updateProductNumber(true, 'case-number-field');
    updateProductTotalPrice(newProductNumber, 'case-total', 59,);
    getSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function (event) {
    if (parseInt(document.getElementById('case-number-field').value) > 0) {
        const newProductNumber = updateProductNumber(false, 'case-number-field');
        updateProductTotalPrice(newProductNumber, 'case-total', 59,);
        getSubTotal();
    }

});