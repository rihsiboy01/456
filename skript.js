var inputElement = document.querySelector("input");
var buttonElement = document.querySelector("button");


inputElement.oninput = function () {
    if (inputElement.value.length > 0) {
        buttonElement.classList.add("ib"); 
    } else {
        buttonElement.classList.remove("ib"); 
    }
};

    
