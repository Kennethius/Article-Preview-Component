//Selectors
let popupContainer = document.querySelector('.share');
let popup = document.querySelector('#myPopup');
let shareBtn = document.querySelector('#share-btn');




//Event Listeners
popupContainer.addEventListener('click', popupFunction);


//Functions
function popupFunction() {

    popup.classList.toggle("show");
    
}

