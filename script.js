//toggle burger
let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.nav-list');

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-navbar');

})

// typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    