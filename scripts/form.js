// footer code
const currentYearElementSelector = document.getElementById('currentyear');
const currentYearVariable = new Date().getFullYear();
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate;

// Product Array
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
  
  // Populate the Product Name options
  document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  
  // Increment the review counter on the review.html page
  if (window.location.pathname === '/review.html') {
    if (localStorage.getItem('reviewCount') === null) {
      localStorage.setItem('reviewCount', 0);
    }
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);
  
    // Display the review count (optional)
    const reviewCountElement = document.createElement('p');
    reviewCountElement.textContent = `Number of reviews submitted: ${reviewCount}`;
    document.body.appendChild(reviewCountElement);
  }