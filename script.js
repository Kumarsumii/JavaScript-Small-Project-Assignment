function getAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function premiumStatus(status) {
    if (status)
        return "Yes"
    else
        return "No"
}

function getData() {
    var customerName = prompt("Your Name:");
    var dateOfBirth = prompt("Enter date. (YYYY/MM/DD)");
    var address = prompt("Enter Address:");
    var premium = confirm("Do you have premium:(OK for YES, CANCEL for NO)");
    
    console.log(customerName);
    console.log(dateOfBirth);
    console.log(getAge(dateOfBirth));
    console.log(address);
    console.log(premium);
    
    return {customerName:customerName , dateOfBirth: dateOfBirth, address: address, premium: premium}
}

function transactionBilling(productPrice, deliveryCharge, premium) {
    if(!premium)
        return { productPrice: productPrice, deliveryCharge: deliveryCharge, totalCharges: productPrice + deliveryCharge, grandTotal: productPrice + deliveryCharge }
    else
        return { productPrice: productPrice, deliveryCharge: deliveryCharge, totalCharges: productPrice + deliveryCharge, grandTotal: ((productPrice + deliveryCharge)-((productPrice + deliveryCharge)*(0.05)))  }
}

function contentLoad() {
    
    //Profile Load
    var customerDetails = getData();
    document.getElementById("customerName").innerHTML = customerDetails.customerName;
    document.getElementById("dateOfBirth").innerHTML = document.getElementById("dateOfBirth").innerHTML+customerDetails.dateOfBirth;
    document.getElementById("age").innerHTML = document.getElementById("age").innerHTML+getAge(customerDetails.dateOfBirth);
    document.getElementById("address").innerHTML = document.getElementById("address").innerHTML+customerDetails.address;
    document.getElementById("premium").innerHTML = document.getElementById("premium").innerHTML+premiumStatus(customerDetails.premium);
    transactionBillingLoad(customerDetails.premium);
}

function transactionBillingLoad(premium) { 

    //Transaction Calculation and load
    var transactionDetails = transactionBilling(2040, 40, premium);
    document.getElementById("productPrice").innerHTML = document.getElementById("productPrice").innerHTML+transactionDetails.productPrice;
    document.getElementById("deliveryCharge").innerHTML =  document.getElementById("deliveryCharge").innerHTML+transactionDetails.deliveryCharge;
    document.getElementById("totalPrice").innerHTML = document.getElementById("totalPrice").innerHTML+transactionDetails.totalCharges;
    document.getElementById("grandTotal").innerHTML = document.getElementById("grandTotal").innerHTML+transactionDetails.grandTotal;
    if (premium) {
        var premiumPrice = (transactionDetails.productPrice + transactionDetails.deliveryCharge) * 0.05;
        document.getElementById("premiumPrice").innerHTML = document.getElementById("premiumPrice").innerHTML+(-premiumPrice);
        document.getElementById("premiumPrice").style.display = "block";
    }
}
contentLoad();

