function updateProductNumber(isIncrease, productId) {
    const productNumberField = document.getElementById(productId);
    const productNumberString = productNumberField.value;
    const previousProductNumber = parseInt(productNumberString);

    let newProductNumber;
    if (isIncrease) {
        newProductNumber = previousProductNumber + 1;
    }
    else {
        newProductNumber = previousProductNumber - 1;

    }

    productNumberField.value = newProductNumber;
    return newProductNumber;
}

function updateProductTotalPrice(newProductNumber, productId, productPrice) {
    const newTotalPrice = newProductNumber * productPrice;
    document.getElementById(productId).innerText = newTotalPrice;
}

function getTextElementByValueId(elementId) {
    const productTotalElement = document.getElementById(elementId)
    const currentProductTotalElementString = productTotalElement.innerText;
    const currentProductTotal = parseInt(currentProductTotalElementString);
    return currentProductTotal;
}

function getSubTotal() {
    const currentPhoneTotal = getTextElementByValueId('phone-total');
    const currentCaseTotal = getTextElementByValueId('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    document.getElementById('sub-total').innerText = currentSubTotal;

    // calculate tax 
    const taxAmount = (currentSubTotal * 0.1);
    document.getElementById('tax-amount').innerText = taxAmount.toFixed(2);
    const finalTotal = currentSubTotal + taxAmount;
    document.getElementById('final-total').innerText = finalTotal;

}