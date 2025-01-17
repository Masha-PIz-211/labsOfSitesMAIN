function myFunction3() {
let year = parseInt(prompt("Введите год (например, 2024):"));

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

if (isLeapYear(year)) {
    console.log(`${year} - Високосный год`);
} else {
    console.log(`${year} - Не является високосным годом`);
}
}
