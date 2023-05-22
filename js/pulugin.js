const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBlur = document.querySelectorAll('.hiddenb');
hiddenBlur.forEach((el) => observer.observe(el));

const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => observer.observe(el));

const slideLeft = document.querySelectorAll('.slide-left');
slideLeft.forEach((el) => observer.observe(el));

const slideUp = document.querySelectorAll('.slide-up');
slideUp.forEach((el) => observer.observe(el));

// offset things
let spans = document.querySelectorAll('.skills .container .all .progress > span');
let skills = document.querySelector('.skills')
window.onscroll = function() {
    if(window.scrollY >= skills.offsetTop - 150) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

// overlay
let intro  = document.getElementById('intro');
let hOne = document.querySelectorAll('h1')[0];
let hTow = document.querySelectorAll('h1')[1];
let hthree = document.querySelectorAll('h1')[2];
let intro2  = document.getElementById('intro2');
setTimeout(remove,1900);
function remove() {
    intro.style.transform = 'translateY(-10000px)';
}
setTimeout(rem,2100);
function rem() {
    intro2.style.height = '0';
}