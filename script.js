// Script File

//Home Section Starts
var menuBtn = document.querySelector(
    '.main-navbar .menu-btn'
)
var menuList = document .querySelector('.main-navbar .nav-list')
menuBtn.addEventListener('Click', function(){
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
})

$('.partners-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* ==