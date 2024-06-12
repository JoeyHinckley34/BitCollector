let bitCount = 0;
let bitValue = 1;
let autoClickers = 0;

const clickButton = document.getElementById('click-button');
const bitCountDisplay = document.getElementById('bit-count');
const upgradesContainer = document.getElementById('upgrades-container');
const bitValueDisplay = document.getElementById('bit-value');

const upgrades = [
    { id: 'upgrade-1', name: 'Upgrade System', cost: 10, effect: () => bitValue += 1 },
    { id: 'upgrade-2', name: 'Super Upgrade System', cost: 100, effect: () => bitValue += 10 },
    { id: 'upgrade-3', name: 'Autoclicker', cost: 50, effect: () => autoClickers += 1 }
];

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

clickButton.addEventListener('click', () => {
    bitCount += bitValue;
    bitCountDisplay.textContent = bitCount;
    updateUpgradeButtons();
});

upgrades.forEach(createUpgradeButton);

function autoClick() {
    bitCount += autoClickers;
    bitCountDisplay.textContent = bitCount;
    updateUpgradeButtons();
}

setInterval(autoClick, 1000);

updateUpgradeButtons();
