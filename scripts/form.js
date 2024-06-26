
const currentYearElementSelector = document.getElementById('currentyear');
const currentYearVariable = new Date().getFullYear();
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate;

const products = [
    {
      id: 'fc-1888',
      name: 'flux capacitor',
      avg_rating: 4.5
    },
    {
      id: 'fc-2050',
      name: 'power laces',
      avg_rating: 4.7
    },
    {
      id: 'fs-1987',
      name: 'time circuits',
      avg_rating: 3.5
    },
    {
      id: 'ac-2000',
      name: 'low voltage reactor',
      avg_rating: 3.9
    },
    {
      id: 'jj-1969',
      name: 'warp equalizer',
      avg_rating: 5.0
    }
  ];
  
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });


function updateReviewCount() {
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
    document.querySelector(".posted-reviews").textContent = numReviews;
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (this.checkValidity()) {
        let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
        numReviews++;
        localStorage.setItem("numReviews-ls", numReviews);
        updateReviewCount();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    updateReviewCount();
});
