const menuToggle = document.querySelector('button');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
        menuToggle.textContent = 'X';
    } else {
        menuToggle.textContent = '☰';
    }
});

const currentYear = new Date().getFullYear();
const currentYearElement = document.querySelector("#currentyear");
currentYearElement.textContent = currentYear;

let oLastModif = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = oLastModif;