const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const currentYearElementSelector = document.getElementById('currentyear');
const currentYearVariable = new Date().getFullYear();
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate;


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
  // Add more temple objects here...
	{
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
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
    templeName: "Adelaide, Australia",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
];


function createTempleCard(temple) {
    let card = document.createElement("div");
    card.classList.add("temple-card");
    card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedication: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
        <figure>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
            <figcaption class="screen-reader-only">${temple.templeName} Temple</figcaption>
        </figure>
    `;
    return card;
}

function filterAndDisplayTemples(filterFunction) {
    let container = document.querySelector('.container');
    container.innerHTML = '';

    let filteredTemples = temples.filter(filterFunction);

    filteredTemples.forEach(function(temple) {
        let card = createTempleCard(temple);
        container.appendChild(card);
    });
}

filterAndDisplayTemples(function() {
    return true; // Return true for all temples (no filtering criteria)
});

document.querySelector('a[title="home"]').addEventListener('click', function(event) {
    event.preventDefault();
    // Call filterAndDisplayTemples with no filtering criteria to show all temples
    filterAndDisplayTemples(function() {
        return true; // Return true for all temples (no filtering criteria)
    });
});

document.querySelector('a[title="old"]').addEventListener('click', function(event) {
    event.preventDefault();
    filterAndDisplayTemples(function(temple) {
        let year = parseInt(temple.dedicated.slice(0, 4));
        return year <= 1900;
    });
});

document.querySelector('a[title="new"]').addEventListener('click', function(event) {
    event.preventDefault();
    filterAndDisplayTemples(function(temple) {
        let year = parseInt(temple.dedicated.slice(0, 4));
        return year > 2000;
    });
});

document.querySelector('a[title="large"]').addEventListener('click', function(event) {
    event.preventDefault();
    filterAndDisplayTemples(function(temple) {
        return temple.area >= 90000;
    });
});

document.querySelector('a[title="small"]').addEventListener('click', function(event) {
    event.preventDefault();
    filterAndDisplayTemples(function(temple) {
        return temple.area <= 10000;
    });
});

/*
temples.forEach(function(temple) {
    let card = document.createElement("div");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let imageContainer = document.createElement("figure"); 
    let image = document.createElement("img");
    let caption = document.createElement("figcaption");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedication.textContent = `Dedication: ${temple.dedicated}`;
    area.textContent = `Area: ${temple.area} sq ft`;
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `${temple.templeName} Temple`);
    image.setAttribute("loading", "lazy");
    caption.textContent = `${temple.templeName} Temple`;

    imageContainer.appendChild(image);
    imageContainer.appendChild(caption);
    
    // imageContainer.setAttribute("id", "temple-figure");
    // image.classList.add("temple-image");
    caption.classList.add("screen-reader-only");
    // card.classList.add("figurecontainer");

    // image.style.height = "250px";
    // image.style.width = "250px";
	
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(imageContainer); 

    document.querySelector(".container").appendChild(card);
});
*/
