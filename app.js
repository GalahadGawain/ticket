function buy() {
    let type = document.getElementById('type-ticket');
    let quantity = parseInt(document.getElementById('qty-tickets').value);

    buyTickets(type.value.toLowerCase(), quantity);
}

function buyTickets(sectionId, quantity) {
    const quantityElement = document.getElementById(`qty-${sectionId}`);
    if (!quantityElement) {
        console.error(`Element with ID qty-${sectionId} not found.`);
        return;
    }

    let availableQuantity = parseInt(quantityElement.textContent);
    if (isNaN(availableQuantity)) {
        console.error(`Invalid quantity in qty-${sectionId}.`);
        return;
    }

    if (quantity > availableQuantity) {
        alert('Number of tickets unavailable');
    } else if(quantity <= 0 || isNaN(quantity)){
        alert('Please enter a valid quantity');
    } else {
        availableQuantity -= quantity;
        quantityElement.textContent = availableQuantity;
        alert('Purchase successful');
    }
}

function buyFloor(quantity) {
    buyTickets('floor', quantity);
}

function buyUpper(quantity) {
    buyTickets('upper', quantity);
}

function buyLower(quantity) {
    buyTickets('lower', quantity);
}