let btn = document.querySelector("button");
let card1 = document.querySelector(".card-front");  
let card2 = document.querySelector(".card-back");  

btn.addEventListener("click",function(){
    card1.style.opacity = "0";
    card2.style.opacity = "1";

  });

           