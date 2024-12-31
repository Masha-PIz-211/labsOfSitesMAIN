let weight = parseFloat(prompt("Введите ваш вес в килограммах (например, 70):"));
let height = parseFloat(prompt("Введите ваш рост в метрах (например, 1.75):"));

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

function getBMICategory(bmi) {
    if (bmi <= 18.5) {
        return "Недостаточный вес";
    } else if (bmi <= 25) {
        return "Нормально";
    } else if (bmi <= 30) {
        return "У вас излишек веса";
    } else {
        return "Ожирение";
    }
}

let bmi = calculateBMI(weight, height);
let category = getBMICategory(bmi);

console.log(`Ваш BMI: ${bmi.toFixed(2)}`);
console.log(`Категория: ${category}`);