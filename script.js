const hamburgerspan = document.querySelector('.hamburger span');
const toggle = document.querySelector('.hamburger input');
const map = document.querySelector('.nav ul');
const putih = document.querySelector('.nav ul a');

toggle.addEventListener('click', toggle => {
    map.classList.toggle('slide');
})