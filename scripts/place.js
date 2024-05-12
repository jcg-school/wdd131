const currentYearElementSelector = document.getElementById('currentyear');
const currentYearVariable = new Date().getFullYear();
currentYearElementSelector.innerHTML = currentYearVariable;

const lastModifiedDateElementSelector = document.getElementById('lastmodified');
const lastModifiedDate = new Date(document.lastModified);
const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
lastModifiedDateElementSelector.textContent = formattedLastModifiedDate;

/* calculateWindChill. when passed temp & speed use 1 line of code that windChill in °F. If conditions (temp <= 50, speed >=3) not met then N/A */
/* Equation: Wind Chill = (35.74 + 0.6215 * °F) - (35.75 * SpeedMPH^0.16) + (0.4275 * °F * SpeedMPH^0.16)*/

let temp = 34
let speedMPH = 17

function calculateWindChill(temp, speedMPH) {
    if (temp <= 50 && speedMPH > 3) {
        var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speedMPH, 0.16) + 0.4275 * temp * Math.pow(speedMPH, 0.16);
        document.getElementById("windchillspan").textContent = windChill.toFixed(2) + " °F";

        // for testing purposes, I wanted to print to console
        let element = document.getElementById("windchillspan");
        console.log(element.textContent);
        
    }
    else {
        document.getElementById("windchillspan").textContent = "N/A";

        let element = document.getElementById("windchillspan");
        console.log(element.textContent);
    }
}

calculateWindChill(temp, speedMPH);
