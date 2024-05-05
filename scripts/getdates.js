const currentYearElementSelector = document.getElementById('currentyear'); //here currentyear is the id of the span element being selected
const currentYearVariable = new Date().getFullYear();
// currentYearElementSelector.textContent = currentYearVariable; //this is a valid method, but best practice is to use .innerhtml, I forgot why.
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified'); // select element
const lastModifiedDate = new Date(document.lastModified); // get last date modified into a variable
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`; // use variable twice in quotes & $ to call variables to format as strings
// if you do not format it, and you change the below expression to end in "= lastModifiedDate;" then it will still work, but it doesn't look as good
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate; // display date last modified into selected element

/* // Last Modified using document.querySelector and .innerHTML instead
const lastModifiedDateElementSelector = document.querySelector('#lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateSpan.innerHTML = formattedLastModifiedDate;
*/

/* 
// Alternate way to format: ....
// "Short Date Format (e.g., "MM/DD/YYYY HH:MM:SS"):
// This format displays the date in a shorter form including both date and time."
const formattedLastModifiedDate = `${lastModifiedDate.getMonth() + 1}/${lastModifiedDate.getDate()}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours()}:${lastModifiedDate.getMinutes()}:${lastModifiedDate.getSeconds()}`;

// OR "JavaScript's toLocaleString() method provides an easy way to format dates based on the user's locale."
const formattedLastModifiedDate = lastModifiedDate.toLocaleString();

// OR You can also use external libraries like Moment.js to handle date formatting in a more flexible and comprehensive way.
// Assuming you've included Moment.js in your HTML file "<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>"
const formattedLastModifiedDate = moment(lastModifiedDate).format('MMMM Do YYYY, h:mm:ss a');
*/

// more date formatting examples: https://codepen.io/blazzard-jason/pen/ZEWjeaw