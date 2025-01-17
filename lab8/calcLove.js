function myFunction2() {
let name1 = prompt("Введите ваше имя:");
let name2 = prompt("Введите имя вашего партнера:");

function calculateCompatibility(name1, name2) {
    let combinedNames = name1.toLowerCase() + name2.toLowerCase();
    let score = 0;
    for (let char of combinedNames) {
        score += char.charCodeAt(0) % 10; 
    }

    score = score % 101; 

    return score;
}

let compatibilityScore = calculateCompatibility(name1, name2);
console.log(`Совместимость между ${name1} и ${name2}: ${compatibilityScore}%`);

if (compatibilityScore > 80) {
    console.log("Вы идеальная пара!");
} else if (compatibilityScore > 50) {
    console.log("У вас хорошие шансы!");
} else {
    console.log("Вам стоит поработать над отношениями.");
}
}
