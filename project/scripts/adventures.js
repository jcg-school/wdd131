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

/* // About Hylandia, get one section to appear at a time...*/
// Get the elements containing the content
const theRealm = document.querySelector('#hylandia');
const citySanctuary = document.querySelector('#sanctuary');
const shadoworest = document.querySelector('#shadowfeel');

// Function to handle the click event
function handleClick(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Check if the clicked link is one of the specific links
    if (event.currentTarget.getAttribute('title') === 'hylandia' ||
        event.currentTarget.getAttribute('title') === 'sanctuary' ||
        event.currentTarget.getAttribute('title') === 'shadowfeel') {

        // Get the target ID from the clicked link's title attribute
        const targetId = event.currentTarget.getAttribute('title');

        // Remove 'show-details' and 'hide-details' classes from all elements
        theRealm.classList.remove('show-details', 'hide-details');
        citySanctuary.classList.remove('show-details', 'hide-details');
        shadoworest.classList.remove('show-details', 'hide-details');

        // Add 'hide-details' class to all elements
        theRealm.classList.add('hide-details');
        citySanctuary.classList.add('hide-details');
        shadoworest.classList.add('hide-details');

        // Add 'show-details' class to the clicked element's corresponding content
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

// Attach event listener to all navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleClick);
});


const creatureType = [
    {
      creatureName: "Owl-fox",
      creatureHome: "Woodlands, Plains",
      creatureDetails:"The owl-fox is a creature well-known for it's ability to move silently both through the air and on the ground. While a predator itself, these hard-to-catch creatures are often hunted for their pelts, which make surprisingly silent clothes and armor.",
      imageUrl:""
    },

    {
        creatureName: "Korusk Clam",
        creatureHome: "Coasts",
        creatureDetails:"Korusk clams are massive clams of impressive strength and durability. Their clamshells prove to be effective, if heavy, brestplates and shields. And they are as good as any bear trap for any would be blunderers.",
        imageUrl:""
      },

      {
        creatureName: "Saddle-pede",
        creatureHome: "Underground",
        creatureDetails:"These centi-steeds are an ancient organism that thrive deep underground. These mounts can climb extremely quickly, they have a cpaable bite, and they are uniquely agile and flexible. The primary downside is that without special training and mounting equipment they are next to impossible to ride.",
        imageUrl:""
      },

      {
        creatureName: "Dreadlegs",
        creatureHome: "Shadowfeel",
        creatureDetails:"The dreadlegs is a massive spider with ten eyes and ten legs from the shadowfeel realm - it feeds off of anxiety, fear, and unsurety. While it can be weakened by working to calm those nearby or involved, once one of these spawn it needs to be faced head on - paralytic bite and all. When a dreadlegs manifests it prefers to find dark corners that have enough height to keep it off the ground. Rather than attack head on, dreadlegs usually sit, watch, and wait continuing to feed on growing fear until it decides it is time to move on.",
        imageUrl:""
      },

      /*{
        creatureName: " ",
        creatureHome: " ",
        creatureDetails:"",
        imageUrl:""
      },*/
  ];

  function createCreatureCard(creature) {
    let card = document.createElement("div");
    card.classList.add("creature-card");
    card.innerHTML = `
        <h3>${creature.creatureName}</h3>
        <p>Home: ${creature.creatureHome}</p>
        <p>${creature.creatureDetails}</p>
        <figure>
            <img src="${creature.imageUrl}" alt="${creature.creatureName}" loading="lazy">
            <figcaption class="screen-reader-only">${creature.creatureName}</figcaption>
        </figure>
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