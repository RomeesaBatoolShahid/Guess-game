var balance = 10000; // Initial balance

function updateMessage(message) {
    var messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = message;
    } else {
        console.error("Element with id 'message' not found.");
    }
}

function showReceipt(amount) {
    var receiptDiv = document.getElementById('receipt');
    if (receiptDiv) {
        receiptDiv.style.display = 'block';
        receiptDiv.textContent = 'Receipt: You withdrew $' + amount;
    } else {
        console.error("Element with id 'receipt' not found.");
    }
}

function getInputAmount() {
    var inputField = document.getElementById('amountInput');
    var amount = parseFloat(inputField.value);
    inputField.value = ''; // Clear the input field after use
    return amount;
}

function checkBalance() {
    updateMessage('Your current balance is $' + balance + '.');
    hideReceipt();
}

function deposit() {
    var amount = getInputAmount();
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateMessage('$' + amount + ' deposited successfully. New balance: $' + balance + '.');
        hideReceipt();
    } else {
        updateMessage("Invalid amount entered. Please try again.");
    }
}

function withdraw() {
    var amount = getInputAmount();
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            updateMessage('$' + amount + ' withdrawn successfully. New balance: $' + balance + '.');
            showReceipt(amount);
        } else {
            updateMessage("Insufficient funds.");
        }
    } else {
        updateMessage("Invalid amount entered. Please try again.");
    }
}

function hideReceipt() {
    var receiptDiv = document.getElementById('receipt');
    if (receiptDiv) {
        receiptDiv.style.display = 'none';
    }
}
