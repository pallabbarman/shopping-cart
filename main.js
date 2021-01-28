// case increase 
// document.getElementById("case-increase").addEventListener("click", function () {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// });
// case decrease 
// document.getElementById("case-decrease").addEventListener("click", function () {
//     const caseInput =document.getElementById("case-count");
//     const caseCount=parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// });
// phone function
// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }
// case function
// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// }

// phone increase 
document.getElementById("phone-increase").addEventListener("click", function () {
    handleProductChange('phone', true);
});

// phone decrease 
document.getElementById("phone-decrease").addEventListener("click", function () {
    handleProductChange('phone', false);
});

// case increase 
document.getElementById("case-increase").addEventListener("click", function () {
    handleProductChange('case', true);
});

// case decrease 
document.getElementById("case-decrease").addEventListener("click", function () {
    handleProductChange('case', false);
});

// product count and pricing 
function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal();
}

// total calculation 
function calculateTotal() {
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = totalPrice;
    const tax = Math.round(totalPrice * .1);
    document.getElementById('tax-amount').innerText = tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

// product input 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}