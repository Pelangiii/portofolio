// toogle navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    // remove
menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Can use Html', 'Can use CSS', 'and I like Formula 1 :D', 'Thank you :DD'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

// sertif

$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
  });
