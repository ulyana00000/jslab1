// Базовий клас Поле
class Field {
    constructor(name, r) {
        this.name = name; 
        this.r = r;       
    }

    // Метод: Кількість врожаю з одиниці площі
    getYieldPerUnit(k) {
        return k * this.r;
    }
}

// Нащадок: Картопляне поле
class PotatoField extends Field {
    constructor(name, r, s) {
        super(name, r); 
        this.s = s;     
    }

    // Метод: Кількість врожаю з усього поля
    getTotalYield(k) {
        const yieldPerUnit = super.getYieldPerUnit(k); 
        return yieldPerUnit * this.s; 
    }
}

// Перемикання між формами
document.getElementById('useBaseClass').addEventListener('change', function () {
    document.getElementById('baseClassForm').style.display = 'block';
    document.getElementById('childClassForm').style.display = 'none';
});

document.getElementById('useChildClass').addEventListener('change', function () {
    document.getElementById('baseClassForm').style.display = 'none';
    document.getElementById('childClassForm').style.display = 'block';
});

// Обробка кнопки "Обчислити"
document.getElementById('calculateButton').addEventListener('click', function () {
    if (document.getElementById('useBaseClass').checked) {
        calculateBaseClass();
    } else if (document.getElementById('useChildClass').checked) {
        calculateChildClass();
    }
});

// Обчислення для базового класу
function calculateBaseClass() {
    const name = document.getElementById('fieldName').value;
    const r = parseFloat(document.getElementById('seedWeight').value);
    const k = parseFloat(document.getElementById('yieldCoefficient').value);

    if (!name || isNaN(r) || isNaN(k)) {
        alert('Будь ласка, заповніть усі поля для базового класу.');
        return;
    }

    const field = new Field(name, r);
    const yieldPerUnit = field.getYieldPerUnit(k);

    document.getElementById('result').innerHTML = `
        Назва поля: <strong>${name}</strong><br>
        Урожай з одиниці площі: <strong>${yieldPerUnit.toFixed(2)} тонн</strong>
    `;
}

// Обчислення для класу-нащадка
function calculateChildClass() {
    const name = document.getElementById('potatoFieldName').value;
    const r = parseFloat(document.getElementById('seedWeightPotato').value);
    const s = parseFloat(document.getElementById('fieldArea').value);
    const k = parseFloat(document.getElementById('yieldCoefficientPotato').value);

    if (!name || isNaN(r) || isNaN(s) || isNaN(k)) {
        alert('Будь ласка, заповніть усі поля для нащадка.');
        return;
    }

    const potatoField = new PotatoField(name, r, s);

    // Обчислення
    const yieldPerUnit = potatoField.getYieldPerUnit(k); // Метод базового класу
    const totalYield = potatoField.getTotalYield(k);    // Метод нащадка

    // Вивід результатів
    document.getElementById('result').innerHTML = `
        <strong>Дані для класу-нащадка:</strong><br>
        Назва поля: <strong>${name}</strong><br>
        Урожай з одиниці площі (метод базового класу): <strong>${yieldPerUnit.toFixed(2)} тонн</strong><br>
        Урожай з усього поля (метод нащадка): <strong>${totalYield.toFixed(2)} тонн</strong>
    `;
}
