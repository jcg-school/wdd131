const mobileMenuButton = document.querySelector('#mobile-menu');
const nav = document.querySelector('nav');
const currentYearSpan = document.querySelector('#currentyear');
const lastModifiedSpan = document.querySelector('#lastmodified');

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('show-nav');
    nav.classList.toggle('show-nav');
});

const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = lastModified.toLocaleDateString();

// About Hylandia section
const showDetailsLinks = document.querySelectorAll('nav a');
showDetailsLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const allDetails = document.querySelectorAll('.show-details, .hide-details');
        allDetails.forEach(detail => detail.classList.add('hide-details'));
        
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.remove('hide-details');
        document.getElementById(targetId).classList.add('show-details');
    });
});

const creatures = [
    { name: "Owlfox", habitat: "woodlands", description: "A stealthy hunter.", image: "images/owlfox.jpg" },
    { name: "Centi-Mount", habitat: "plains", description: "Incredible and dizzying.", image: "images/centi-mount.jpg" },
    { name: "Korusk Clam", habitat: "coastal", description: "Giant clams.", image: "images/korusk.jpg" },
    { name: "Shadowfeel Beast", habitat: "shadowfeel-habitat", description: "Unique and terrifying.", image: "images/shadowfeel.jpg" },
];

function createCreatureCard(creature) {
    const card = document.createElement('div');
    card.classList.add('creature-card');
    card.innerHTML = `
        <img src="${creature.image}" alt="${creature.name}" />
        <h3>${creature.name}</h3>
        <p>${creature.description}</p>
    `;
    return card;
}

function filterCreatures(habitat) {
    const container = document.getElementById('creature-cards-container');
    container.innerHTML = '';
    const filteredCreatures = habitat === 'all' ? creatures : creatures.filter(creature => creature.habitat === habitat);
    filteredCreatures.forEach(creature => container.appendChild(createCreatureCard(creature)));
}

document.querySelectorAll('nav ul li a').forEach(filterLink => {
    filterLink.addEventListener('click', (event) => {
        event.preventDefault();
        filterCreatures(filterLink.getAttribute('title'));
    });
});

filterCreatures('all');