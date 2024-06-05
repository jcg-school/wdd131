
// dice tray functionality

const diceElements = document.querySelectorAll('.dice');
const rollCountElement = document.getElementById('roll-count');
const rollTotalElement = document.getElementById('roll-total');
const rollInput = document.getElementById('roll-input');
const rollBtn = document.getElementById('roll-btn');
      
// Check localStorage for roll count
if (!localStorage.getItem('rollCount')) {
    localStorage.setItem('rollCount', 0);
}

document.getElementById('rollCount').innerText = `Total Rolls: ${localStorage.getItem('rollCount')}`;

document.getElementById('diceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let statBonus = parseInt(document.getElementById('statBonus').value);
    let roll1 = Math.floor(Math.random() * 10) + 1;
    let roll2 = Math.floor(Math.random() * 10) + 1;
    let rollTotal = roll1 + roll2 + statBonus;
    let resultMessage = '';

    if (rollTotal <= 11) {
        resultMessage = `Roll: ${roll1} + ${roll2} + ${statBonus} = ${rollTotal} (Failure)`;
    } else if (rollTotal <= 16) {
        resultMessage = `Roll: ${roll1} + ${roll2} + ${statBonus} = ${rollTotal} (Success)`;
    } else {
        resultMessage = `Roll: ${roll1} + ${roll2} + ${statBonus} = ${rollTotal} (Perfect Success)`;
    }

    document.getElementById('result').innerText = `${resultMessage}`;

    let rollCount = parseInt(localStorage.getItem('rollCount')) + 1;
    localStorage.setItem('rollCount', rollCount);
    document.getElementById('rollCount').innerText = `Total Rolls: ${rollCount}`;
});