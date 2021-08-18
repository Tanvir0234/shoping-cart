function product(isAdd){
    let phoneNumber =document.getElementById('phone-number');
    if(isAdd==true){
        const getPhoneNumber = parseInt(phoneNumber.value) + 1;
        phoneNumber.value =getPhoneNumber;
    }
    else if(phoneNumber.value>0){
        const getPhoneNumber = parseInt(phoneNumber.value) - 1;
        phoneNumber.value =getPhoneNumber;
    }
    
    
}

document.getElementById('phone-plus').addEventListener('click',function(){
product(true);
})

document.getElementById('phone-minus').addEventListener('click',function(){
product(false);
})