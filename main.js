// add phone cart event handler
const addPhoneBtn = document.getElementById("addPhoneCart");
addPhoneBtn.addEventListener("click", function () {
    addCartItem("phoneQuantity");
})
// remove phone cart event handler
const removePhoneBtn = document.getElementById("removePhoneCart");
removePhoneBtn.addEventListener("click", function () {
    removeCartItem("phoneQuantity");
})
// add phone case cart event handler
const addPhoneCaseBtn = document.getElementById("addPhoneCaseCart");
addPhoneCaseBtn.addEventListener("click", function () {
    addCartItem("phoneCaseQuantity");
})
// remove phone case cart event handler
const removePhoneCaseBtn = document.getElementById("removePhoneCaseCart");
removePhoneCaseBtn.addEventListener("click", function () {
    removeCartItem("phoneCaseQuantity")
})
function addCartItem(id) {
    const quantity = document.getElementById(id).value;
    const itemValue = parseInt(quantity) + 1;
    document.getElementById(id).value = itemValue;
}
function removeCartItem(id) {
    const quantity = document.getElementById(id).value;
    if (quantity > 1) {
        const itemValue = parseInt(quantity) - 1;
        document.getElementById(id).value = itemValue;
    }
    else {
        alert("Cart item can't be negative");
    }
}