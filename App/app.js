var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

//progressBar//

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

// auto navigation
// var repeat = function(activeClass) {
//     let active = document.getElementsByClassName('active');
//     let i = 1;

//     var repeater = () => {
//         setTimeout(function() {
//             [...active].forEach((activeSlide) => {
//                 activeSlide.classList.remove('active');
//             });

//             slides[i].classList.add('active');
//             btns[i].classList.add('active');
//             i++;

//             if (slides.length == i) {
//                 i = 0;
//             }
//             if (i >= slides.length) {
//                 return;
//             }
//             repeater();
//         }, 10000);
//     }
//     repeater();
// }
// repeat();

const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

$(function() {
    var elements = $(".text, .img").toArray();
    $(window).scroll(function() {
        elements.forEach(function(item) {
            if ($(this).scrollTop() >= $(item).offset().top - 400) {
                $(item).addClass("reveal");
            }
        });
    });
    elements.forEach(function(item) {
        if ($(this).scrollTop() >= $(item).offset().top - 400) {
            $(item).addClass("reveal");
        }
    });
});