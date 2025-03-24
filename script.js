let portionSize = 1;
let basePrice = 20; // Base price for one portion

function increasePortion(recipe) {
    portionSize++;
    updatePrice();
}

function decreasePortion(recipe) {
    if (portionSize > 1) { // Prevent going below 1 portion
        portionSize--;
        updatePrice();
    }
}

function updatePrice() {
    let price = basePrice * portionSize;

    // Update the portion size and price on the page
    document.getElementById("portionSize").textContent = `Portion Size: ${portionSize}`;
    document.getElementById("priceEstimate").textContent = `Estimated Price: $${price}`;
}

