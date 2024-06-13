let bitCount = 0;
let bitValue = 1;
let autoClickers = 0;

const clickButton = document.getElementById('click-button');
const bitCountDisplay = document.getElementById('bit-count');
const upgradesContainer = document.getElementById('upgrades-container');
const bitValueDisplay = document.getElementById('bit-value');
const autoClickersCountDisplay = document.getElementById('auto-clickers-count');

// Adjust the effect functions to ensure values remain integers
const upgrades = [
    { id: 'upgrade-1', name: 'Upgrade System', cost: 10, effect: () => { bitValue += 1; updateBitValueDisplay(); } },
    { id: 'upgrade-2', name: 'Super Upgrade System', cost: 100, effect: () => { bitValue += 10; updateBitValueDisplay(); } },
    { id: 'upgrade-3', name: 'Autoclicker', cost: 50, effect: () => { autoClickers += 1; updateAutoClickersCountDisplay(); } }
];

upgrades.forEach(createUpgradeButton);

function createUpgradeButton(upgrade) {
    const button = document.createElement('button');
    button.id = upgrade.id;
    button.textContent = `${upgrade.name} (Cost: ${upgrade.cost} bits)`;
    button.disabled = bitCount < upgrade.cost;

    button.addEventListener('click', () => {
        if (bitCount >= upgrade.cost) {
            bitCount -= upgrade.cost;
            upgrade.effect();
            bitCountDisplay.textContent = bitCount;
            bitValueDisplay.textContent = bitValue;
            autoClickersCountDisplay.textContent = autoClickers;
            updateUpgradeButtons();
        }
    });

    upgradesContainer.appendChild(button);
}

function updateUpgradeButtons() {
    upgrades.forEach(upgrade => {
        const button = document.getElementById(upgrade.id);
        if (button) {
            button.disabled = bitCount < upgrade.cost;
        }
    });
}

// Function to update bit count display as an integer
function updateBitCountDisplay() {
    bitCountDisplay.textContent = Math.floor(bitCount);
}

// Function to update bit value display as an integer
function updateBitValueDisplay() {
    bitValueDisplay.textContent = Math.floor(bitValue);
}

// Function to update auto clickers display as an integer
function updateAutoClickersCountDisplay() {
    autoClickersCountDisplay.textContent = Math.floor(autoClickers);
}

clickButton.addEventListener('click', () => {
    bitCount += bitValue;
    updateBitCountDisplay();
    updateUpgradeButtons();
});

function autoClick() {
    bitCount += autoClickers / 10;
    bitCount = Math.floor(bitCount);  // Ensure bitCount is an integer
    updateBitCountDisplay();
    updateUpgradeButtons();
}


// Initialize the displays
updateBitCountDisplay();
updateBitValueDisplay();
updateAutoClickersCountDisplay();

// Set the interval to update 10 times per second
setInterval(autoClick, 100);

updateUpgradeButtons();
