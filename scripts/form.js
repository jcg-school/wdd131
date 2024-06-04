

// footer code
const currentYearElementSelector = document.getElementById('currentyear');
const currentYearVariable = new Date().getFullYear();
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate;