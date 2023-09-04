const navMobile = document.querySelector('.nav-mobile');
const menuBurger = document.querySelector('.menu');
const navMobileItems = document.querySelectorAll('.nav-mobile--list--item');

menuBurger.addEventListener("click", function(){
    navMobile.classList.toggle('open');
})

navMobileItems.forEach((item) => {
    item.addEventListener("click", () => {
        navMobile.classList.toggle('open');
    });
});