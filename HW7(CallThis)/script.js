const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/**
 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує
скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна
викликатись через call та працювати з даними через this
 */

function getMyTaxes(salary) {
    const myTax = this.tax * salary
    return myTax
}
// let country = (prompt('Яка країна?(Ukraine, Latvia, Litva)', 'Ввод тільки англійскою'))
//     .toLowerCase();

let salary = null;
do {
    salary = +(prompt('Ввдіть сумму робітьнох плати', 'тільки додатьне число'))
} while (
    !Number.isInteger(salary) || isNaN(salary) || !salary || salary <= 0
)


console.log('Податки для України при запрлаті ' + salary, ': ', getMyTaxes.call(ukraine, salary))
console.log('Податки для Латвії при запрлаті ' + salary, ': ', getMyTaxes.call(latvia, salary))
console.log('Податки для Літви при запрлаті '+ salary, ': ',getMyTaxes.call(litva, salary))

console.log('---------------')
/*
2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує
скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax *
middleSalary). Функція повинна викликатись через call та працювати з даними
через this
*/

function getMiddleTaxes() {
        return this.tax * this.middleSalary
}

console.log('Середні податки в Україні: ', getMiddleTaxes.call(ukraine))
console.log('Середні податки в Латвії: ', getMiddleTaxes.call(latvia))
console.log('Середні податки в Літви: ', getMiddleTaxes.call(litva))
console.log('---------------')
/*
3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary *
vacancies). Функція повинна викликатись через call та працювати з даними
через this
*/

function getTotalTaxes() {
    return this.tax*this.middleSalary*this.vacancies
}
console.log('Всього платять податків в Україні: ', getTotalTaxes.call(ukraine))
console.log('Всього платять податків в Латвії: ', getTotalTaxes.call(latvia))
console.log('Всього платять податків в Літви: ', getTotalTaxes.call(litva))
console.log('---------------')

/*
Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт
виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes –
розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;
для виводу в консоль кожні 10 секунд використайте setInterval
*/

function getMySalary(country) {  
    let name = '';
    country = (prompt('Яка країна?(Ukraine, Latvia, Litva)', 'Ввод тільки англійскою'))
            .toLowerCase();
        if (country === 'ukraine') {
            country = ukraine;
            name = 'Ukraine';
        } else if(country === 'latvia'){
            country = latvia;
            name = 'Latvia';
        }else if(country==='litva'){
            country = litva;
            name = 'Litva';
        } else {
            return console.log('I don`t know this country, try againe')
    }
    
    setInterval(() => {
        const max = 2000;
        const min = 1500;
        let salary = Math.round(Math.random() * (max - min + 1) + min);  
        let tax = (getMyTaxes.call(country, salary)).toFixed(2);
        let info = {};
        info.salary = salary;
        info.tax = +tax;
        info.profit = salary - tax;
        return console.log(`Инфо по країни ${name}: `,info)
    }, 10000)
    
}
getMySalary.call()