function myFunction4() {
let names = ['Дима', 'Катя', 'Петр', 'Лена'];

function chooseWhoPays(names) {
    let randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

let payer = chooseWhoPays(names);
console.log(`Оплачивать будет ${payer}`);
}
