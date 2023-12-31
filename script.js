// Set the default date to today's date
document.getElementById("expense-date").valueAsDate = new Date();

function addExpense() {
    const description = document.getElementById("expense-description").value;
    const amount = parseFloat(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;
    const date = document.getElementById("expense-date").value;

    if (description && !isNaN(amount) && category && date) {
        const expensesList = document.getElementById("expenses-list");
        const row = expensesList.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = description;
        cell2.textContent = category;
        cell3.textContent = `$${amount.toFixed(2)}`;
        cell4.textContent = date;

        // Clear input fields
        document.getElementById("expense-description").value = "";
        document.getElementById("expense-amount").value = "";
        document.getElementById("expense-category").value = "";
        document.getElementById("expense-date").valueAsDate = new Date();
    } else {
        alert("Please enter a valid description, category, date, and amount.");
    }
}
