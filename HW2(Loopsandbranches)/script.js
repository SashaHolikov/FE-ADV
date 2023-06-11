let firstNumber = null;
let secondNumber = null;
let sum = 0;

// Задання першого число та його перевірка
do {
    firstNumber =+( prompt('Введіть перше число','Введіть ціле число'))
} while (
    !Number.isInteger(firstNumber) || isNaN(firstNumber) || !firstNumber
)
console.log(`Перше число: ` + firstNumber);



// Задання другого число та його перевірка

do { 
    secondNumber =+(prompt('Ввудіть друге число','Введіть ціле число'))
} while (
    !Number.isInteger(secondNumber)|| isNaN(secondNumber)|| !secondNumber
)
console.log(`Друге число: ` + secondNumber)


const minNumber = Math.min(firstNumber, secondNumber);
const maxNumber = Math.max(firstNumber, secondNumber);
const usedOdd = confirm('Пропускати парні?');

for (let i = minNumber; i <= maxNumber; i++){
    if (usedOdd && i % 2 == 0) {
        continue
    }
    sum+=i
}

console.log(sum)

document.writeln(
    `Перше число: ${firstNumber}<br/> 
    Друге число: ${secondNumber}<br/>
    Пропусати парні: ${usedOdd} <br/>
    Сумма чисел: ${sum}
    `
)
