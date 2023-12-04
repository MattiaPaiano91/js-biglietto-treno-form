const myButton = document.getElementById('special-button');



myButton.addEventListener('click', function() {
    const ageInput = document.getElementById('age');
    const ageInputValue = parseInt(ageInput.value);
    
    const kminput = document.getElementById('km');
    const kminputvalue = parseInt(kminput.value);
    
    let ticketPrice = (kminputvalue * 0.21);

if (ageInputValue < 18){
    price = (ticketPrice * 0.8).toFixed(2);
}

else if(ageInputValue > 65){
    price = (ticketPrice * 0.6).toFixed(2);
}

else{
    price = ticketPrice.toFixed(2);
 }
 document.getElementById('input-result').innerHTML = price
}
)
