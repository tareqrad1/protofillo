"use strict";

let bgToggle = document.querySelector('.bg-toggle');
let toggleIcon = document.querySelector('.toggle-icon');
let h5 = document.querySelector('nav .container .right .toggle > h5');
let nav = document.querySelector('nav');
toggleIcon.addEventListener('click',(e) => {
    toggleIcon.classList.toggle('active');
    document.body.classList.toggle('bodyBg');
    if(document.body.classList.contains('bodyBg')) {
        document.body.style.setProperty('--paragraph-color','rgba(250, 244, 230, 1)');
        document.body.style.setProperty('--black-text','rgba(250, 244, 230, 1)');
        document.body.style.setProperty('--blue-text','rgba(250, 244, 230, 1)');
        document.body.style.setProperty('--white-color','#3C3B3A');
        document.body.style.setProperty('--bag-thing','none');
        nav.style.boxShadow = 'none';
        h5.innerHTML = 'Light mode:';
    }else {
        document.body.style.setProperty('--paragraph-color','#202020');
        document.body.style.setProperty('--black-text','#000');
        document.body.style.setProperty('--blue-text','rgba(0, 101, 255, 1)');
        document.body.style.setProperty('--white-color','#fff');
        document.body.style.setProperty('--bag-thing','rgb(242 244 246)');
        nav.style.boxShadow = '0px 25px 65px rgba(0, 0, 0, 0.15)';
        h5.innerHTML = 'Dark mode:';
    } 
});

// start the bars-toggle
let menu = document.querySelector('.menu-icon');
let iteam = document.getElementById('right');
let span1 = document.querySelectorAll('.menu-icon> span')[0];
let span2 = document.querySelectorAll('.menu-icon> span')[1];
let span3 = document.querySelectorAll('.menu-icon> span')[2];

menu.onclick = function() {
    iteam.classList.toggle('active');
    span1.classList.toggle('active1');
    span2.classList.toggle('active2');
    span3.classList.toggle('active3');
}

// start the nav Fixed
window.addEventListener('scroll',() => {
    if(scrollY >= 160) {
        nav.classList.add('fixed');
    }else {
        nav.classList.remove('fixed');
    }
});