function product(getProduct,price,isIncrease){
    const phoneNumber =document.getElementById(getProduct + '-number');
    let getPhoneNumber = phoneNumber.value;
    if(isIncrease==true){
        getPhoneNumber = parseInt(phoneNumber.value) + 1;
        
    }
    else if(phoneNumber.value>0){
        getPhoneNumber = parseInt(phoneNumber.value) - 1;
    }
    //update total
    phoneNumber.value = getPhoneNumber;
    const phoneTotal = document.getElementById(getProduct + '-total');
     phoneTotal.innerText = getPhoneNumber * price;

     //Calculate  Total function calling------
     calculation();
    
   
}
function getInputvalue(product){
    const  productNumber = parseInt(document.getElementById(product + '-number').value);
    return productNumber;
}
// Last Calculation Part----------
function calculation(){
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /  10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=total;
}



// phone Increasing part ----
document.getElementById('phone-plus').addEventListener('click',function(){

product('phone',1219,true);

})
//phone Decreasing Part-----
document.getElementById('phone-minus').addEventListener('click',function(){

product('phone',1219,false);

})
// case increasing part -----
document.getElementById('case-plus').addEventListener('click',function(){

product('case',59, true);

})
// case decreasing part----
document.getElementById('case-minus').addEventListener('click',function(){
    product( 'case',59, false);
})

