//Selectors
let popupContainer = document.querySelector('.avatar_container');
let popup = document.querySelector('#myPopup');





//Event Listeners
popupContainer.addEventListener('click', popupFunction);


//Functions
function popupFunction() {

    popup.classList.toggle("show");

}


