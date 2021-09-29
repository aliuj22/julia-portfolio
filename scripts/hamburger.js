//Hamburger menu section

const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});
console.log(hamburger)