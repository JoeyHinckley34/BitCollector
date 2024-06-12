let bitCount = 0;
let bitValue = 1;

const clickButton = document.getElementById('click-button');
const bitCountDisplay = document.getElementById('bit-count');
const upgradeButton = document.getElementById('upgrade-button');
const bitValueDisplay = document.getElementById('bit-value');

clickButton.addEventListener('click', () => {
    bitCount += bitValue;
    bitCountDisplay.textContent = bitCount;
    checkUpgradeAvailability();
});

upgradeButton.addEventListener('click', () => {
    if (bitCount >= 10) {
        bitCount -= 10;
        bitValue += 1;
        bitCountDisplay.textContent = bitCount;
        bitValueDisplay.textContent = bitValue;
        checkUpgradeAvailability();
    }
});

function checkUpgradeAvailability() {
    upgradeButton.disabled = bitCount < 10;
}

checkUpgradeAvailability();
