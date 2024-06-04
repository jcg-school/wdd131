// form code
    // array
    const products = [
        {
          id: fc-1888,
          name: "flux capacitor",
          avg-rating: 4.5
        },
        {
          id: fc-2050,
          name: "power laces",
          averagerating: 4.7
        },
        {
          id: fs-1987,
          name: "time circuits",
          averagerating: 3.5
        },
        {
          id: ac-2000,
          name: "low voltage reactor",
          averagerating: 3.9
        },
        {
          id: jj-1969,
          name: "warp equalizer",
          averagerating: 5.0
        }
      ];

// footer code
const currentYearElementSelector = document.getElementById('currentyear');
const currentYearVariable = new Date().getFullYear();
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate;