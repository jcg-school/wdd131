const mainnav = document.querySelector('.nav-menu');
const hambutton = document.querySelector('#mobile-menu');

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

const theRealm = document.querySelector('#hylandia');
const citySanctuary = document.querySelector('#sanctuary');
const shadoworest = document.querySelector('#shadowfeel');

function handleClick(event) {
    

    if (event.currentTarget.getAttribute('title') === 'hylandia' ||
        event.currentTarget.getAttribute('title') === 'sanctuary' ||
        event.currentTarget.getAttribute('title') === 'shadowfeel') {

        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('title');

        theRealm.classList.remove('show-details', 'hide-details');
        citySanctuary.classList.remove('show-details', 'hide-details');
        shadoworest.classList.remove('show-details', 'hide-details');

        theRealm.classList.add('hide-details');
        citySanctuary.classList.add('hide-details');
        shadoworest.classList.add('hide-details');

        if (targetId === 'hylandia') {
            theRealm.classList.add('show-details');
            theRealm.classList.remove('hide-details');
        } else if (targetId === 'sanctuary') {
            citySanctuary.classList.add('show-details');
            citySanctuary.classList.remove('hide-details');
        } else if (targetId === 'shadowfeel') {
            shadoworest.classList.add('show-details');
            shadoworest.classList.remove('hide-details');
        }
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleClick);
});


const creatureType = [
    {
      creatureName: "Owl-fox",
      creatureHome: "Woodlands, Plains",
      creatureDetails: "The owl-fox is a creature well-known for its ability to move silently both through the air and on the ground. While a predator itself, these hard-to-catch creatures are often hunted for their pelts, which make surprisingly quiet clothes and armor.",
      imageUrl: "images/owl-fox.webp"
    },
    {
        creatureName: "Korusk Clam",
        creatureHome: "Coasts",
        creatureDetails: "Korusk clams are massive clams of impressive strength and durability. Their clamshells prove to be effective, if heavy, breastplates and shields. And they are as good as any bear trap for any shoreline blunderers.",
        imageUrl: "images/korusk-clam.webp"
    },
    {
        creatureName: "Saddle-pede",
        creatureHome: "Underground",
        creatureDetails: "These centi-steeds are an ancient organism that thrive deep underground. These mounts can climb extremely quickly, they have a capable bite, and they are uniquely agile and flexible. The primary downside is that without special training and mounting equipment they are next to impossible to ride. If you've ever tried to ride a bull spiraling into a cave you can barely fit in then you'll know what we mean.",
        imageUrl: "images/saddle-pede.webp"
    },
    {
        creatureName: "Dreadlegs",
        creatureHome: "Shadowfeel",
        creatureDetails: "The dreadlegs is a large spider with ten eyes and ten legs from the shadowfeel realm - it feeds off of anxiety, fear, and unsurety. While it can be weakened by working to calm those nearby or involved, once one of these spawn it needs to be faced head on - paralytic bite and all. When a dreadlegs manifests it prefers to find dark corners that are off the ground. Rather than attack head on, dreadlegs usually sit, watch, and wait continuing to feed on growing fear until it decides it is time to move on. Many dreadlegs have the ability to appear larger than they really are - but some really are that big. Watch out.",
        imageUrl: "images/dreadlegs.webp"
    }
];

function createCreatureCard(creature) {
    let card = document.createElement("div");
    card.classList.add("creature-card");
    
    card.style.backgroundImage = `url('${creature.imageUrl}')`;

    card.innerHTML = `
        <h3>${creature.creatureName}</h3>
        <p>Home: ${creature.creatureHome}</p>
        <p>${creature.creatureDetails}</p>
    `;
    return card;
}

function filterAndDisplayCreatures(filterFunction) {
    let container = document.querySelector('.creature-card-container');
    container.innerHTML = '';

    let filteredCreatures = creatureType.filter(filterFunction);

    filteredCreatures.forEach(creature => {
        let card = createCreatureCard(creature);
        container.appendChild(card);
    });
}

filterAndDisplayCreatures(() => true);

document.querySelector('a[title="all"]').addEventListener('click', event => {
    event.preventDefault();
    filterAndDisplayCreatures(() => true);
});

document.querySelector('a[title="woodlands"]').addEventListener('click', event => {
    event.preventDefault();
    filterAndDisplayCreatures(creature => {
        const habitats = creature.creatureHome.split(',').map(habitat => habitat.trim());
        return habitats.includes('Woodlands');
    });
});

document.querySelector('a[title="plains"]').addEventListener('click', event => {
    event.preventDefault();
    filterAndDisplayCreatures(creature => {
        const habitats = creature.creatureHome.split(',').map(habitat => habitat.trim());
        return habitats.includes('Plains');
    });
});

document.querySelector('a[title="coastal"]').addEventListener('click', event => {
    event.preventDefault();
    filterAndDisplayCreatures(creature => {
        const habitats = creature.creatureHome.split(',').map(habitat => habitat.trim());
        return habitats.includes('Coasts');
    });
});

document.querySelector('a[title="underground"]').addEventListener('click', event => {
    event.preventDefault();
    filterAndDisplayCreatures(creature => {
        const habitats = creature.creatureHome.split(',').map(habitat => habitat.trim());
        return habitats.includes('Underground');
    });
});

document.querySelector('a[title="shadowfeel-habitat"]').addEventListener('click', event => {
    event.preventDefault();
    filterAndDisplayCreatures(creature => {
        const habitats = creature.creatureHome.split(',').map(habitat => habitat.trim());
        return habitats.includes('Shadowfeel');
    });
});