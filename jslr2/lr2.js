// Завдання 1: Додавання фруктів і їх вартості до списку
document.getElementById('priceInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const fruit = document.getElementById('fruitSelect').value;
        const price = event.target.value;

        if (price.trim() === '' || isNaN(price)) {
            alert('Будь ласка, введіть коректну вартість.');
            return;
        }

        const fruitList = document.getElementById('fruitList');
        const listItems = fruitList.getElementsByTagName('li');

        // Перевіряємо, чи фрукт уже є в списку
        let isUpdated = false;
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent.startsWith(fruit + ':')) {
                // Оновлюємо вартість
                listItems[i].textContent = `${fruit}: ${price} грн`;
                isUpdated = true;
                break;
            }
        }

        // Якщо фрукт не знайдено в списку, додаємо новий елемент
        if (!isUpdated) {
            const listItem = document.createElement('li');
            listItem.textContent = `${fruit}: ${price} грн`;
            fruitList.appendChild(listItem);
        }

        // Очищаємо поле вводу
        event.target.value = '';
    }
});


// Завдання 2: Підрахунок суми чисел у стовпцях таблиці
function calculateColumnSums() {
    const table = document.getElementById('numberTable');
    const rows = table.rows;
    let columnSums = [];

    for (let i = 0; i < rows[0].cells.length; i++) {
        columnSums[i] = 0;
    }

    for (let i = 0; i < rows.length - 1; i++) {
        for (let j = 0; j < rows[i].cells.length; j++) {
            columnSums[j] += parseInt(rows[i].cells[j].textContent, 10);
        }
    }

    const sumRow = document.getElementById('sumRow');
    for (let i = 0; i < columnSums.length; i++) {
        sumRow.cells[i].textContent = columnSums[i];
    }
}