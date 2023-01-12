const hamburger = document.querySelector("#bar-btn");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})