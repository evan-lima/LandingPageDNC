const card1 = window.document.getElementById("card1");
const card2 = window.document.getElementById("card2");
const card3 = window.document.getElementById("card3");
const arrowLeft = window.document.getElementById("arrow-l");
const arrowRight = window.document.getElementById("arrow-r");

function MoveRight(){
    card1.style = "display:none";
    card3.style = "display:flex";
    arrowRight.style = "display:none";
    arrowLeft.style = "display:flex";
}

function MoveLeft(){
    card1.style = "display:flex";
    card3.style = "display:none";
    arrowRight.style = "display:flex";
    arrowLeft.style = "display:none";
}