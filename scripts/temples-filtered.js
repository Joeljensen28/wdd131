const menuToggle = document.querySelector('button');
const navMenu = document.querySelector('nav');
const mainElement = document.querySelector('main');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
        menuToggle.textContent = 'X';
    } else {
        menuToggle.textContent = '☰';
    }
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Stockholm Sweden",
        location: "Stockholm, Sweden",
        dedicated: "1985, July, 2",
        area: 31000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
    },
    {
        templeName: "Manhatten New York",
        location: "New York City, New York, United States of America",
        dedicated: "2002, June, 13",
        area: 20630,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
    }
  ];

function createTempleCard(temple) {
    let name = temple['templeName'];
    let templeLoc = temple['location'];
    let dedication = temple['dedicated'];
    let templeArea = temple['area'];
    let image = temple['imageUrl'];

    let templeCard = `
        <h3>${name}</h3>
        <figcaption>
            <p>Location: ${templeLoc}</p>
            <p>Dedicated: ${dedication}</p>
            <p>Size: ${templeArea} sq ft</p>
        </figcaption>
        <img src="${image}" alt="${name}" loading="lazy">
    `;

    return templeCard;
}

const allTemples = document.querySelector('#home');
const oldTemples = document.querySelector('#old');
const newTemples = document.querySelector('#new');
const largeTemples = document.querySelector('#large');
const smallTemples = document.querySelector('#small');

document.addEventListener('DOMContentLoaded', () => {
    let templeCards = temples.map(createTempleCard);

    for (let templeCard of templeCards) {
        let newFig = document.createElement('figure');
        newFig.innerHTML = templeCard;
        mainElement.appendChild(newFig);
    };
});

const currentYear = new Date().getFullYear();
const currentYearElement = document.querySelector("#currentyear");
currentYearElement.textContent = currentYear;

let oLastModif = new Date(document.lastModified);
const lastModifiedElement = document.querySelector("#lastmodified");
lastModifiedElement.textContent = oLastModif;

oldTemples.addEventListener('click', () => {
    event.preventDefault();
    const filteredCards = temples.filter(temple => temple.dedicated.includes('18'));
    let templeCards = filteredCards.map(createTempleCard);
    mainElement.innerHTML = '<h2>Old Temples</h2>';
    for (let templeCard of templeCards) {
        let newFig = document.createElement('figure');
        newFig.innerHTML = templeCard;
        mainElement.appendChild(newFig);
    }
});

newTemples.addEventListener('click', () => {
    event.preventDefault();
    const filteredCards = temples.filter(temple => temple.dedicated.includes('20'));
    let templeCards = filteredCards.map(createTempleCard);
    mainElement.innerHTML = '<h2>New Temples</h2>';
    for (let templeCard of templeCards) {
        let newFig = document.createElement('figure');
        newFig.innerHTML = templeCard;
        mainElement.appendChild(newFig);
    }
});

largeTemples.addEventListener('click', () => {
    event.preventDefault();
    const filteredCards = temples.filter(temple => temple.area >= 90000);
    let templeCards = filteredCards.map(createTempleCard);
    mainElement.innerHTML = '<h2>Large Temples</h2>';
    for (let templeCard of templeCards) {
        let newFig = document.createElement('figure');
        newFig.innerHTML = templeCard;
        mainElement.appendChild(newFig);
    }
});

smallTemples.addEventListener('click', () => {
    event.preventDefault();
    const filteredCards = temples.filter(temple => temple.area < 10000);
    let templeCards = filteredCards.map(createTempleCard);
    mainElement.innerHTML = '<h2>Small Temples</h2>';
    for (let templeCard of templeCards) {
        let newFig = document.createElement('figure');
        newFig.innerHTML = templeCard;
        mainElement.appendChild(newFig);
    }
});