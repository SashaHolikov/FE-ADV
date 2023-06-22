// // 1.Створити функцію getMaxDigit(number) – яка отримує будь-яке
// // число та виводить найбільшу цифру в цьому числі.

function getMaxDigit() {
    let number = null;
    let maxDigit = null;
    do {
        number = +prompt('Введіть натуральне число');
    }
    while (!Number.isInteger(number) || isNaN(number) || !number || number <= 0);
    
    let numberToString = number.toString();

    maxDigit = numberToString[0];
    for (let i = 1; i <= numberToString.length; i++)
    {
        if (+numberToString[i] > +maxDigit) {
            maxDigit=numberToString[i]
        }
    }
    return maxDigit
}



// 2. Створити функцію, яка визначає ступінь числа. Не
// використовуючи Math.pow та **. Використовуйте цикл

function getPow() {
    let number = null;
    let pow = null;
    let numberInPow = 1;
    do {
        number = +prompt('Введіть число');
    }
    while (isNaN(number) || !number);

    do {
        pow = +prompt('Введіть показник степиня');
    }
    while (!Number.isInteger(pow) || isNaN(pow))

    if (pow === 0) {
        return numberInPow;
    }
    else if (pow > 0) {
        for (let i = 1; i <= pow; i++) {
            numberInPow *= number;
        }

        return numberInPow
    }
    else {
        for (let k = 1; k <= -pow; k++) {
            numberInPow *= 1 / number;
        }
        return numberInPow
    }
}


// 3.Створити функцію, яка форматує ім'я, роблячи першу букву
// великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function getFirstLetterUp() {
    let getName = prompt('Введіт ім`я');
    let correctName = getName[0].toUpperCase() + (getName.slice(1)).toLowerCase();
    return correctName
}



// 4.Створити функцію, яка вираховує суму, що залишається після
// оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
// 19.5%). Приклад: 1000 -> 805

function getSumAfterTaxes() {
    let sum = null;
    let taxe = null;
    let sumAfterTaxes = null;
    do {
        sum = +prompt('Введіть  сумму зарабітньої плати');
    }
    while (isNaN(sum) || !sum);

    do {
        taxe = +prompt('Введіть суму податку (натуральне число)');
    }
    while (!Number.isInteger(taxe) || isNaN(taxe) || !taxe || taxe <= 0);

    sumAfterTaxes = sum - (sum/100 * taxe);
    
    return sumAfterTaxes
}


// 5.Створити функцію, яка повертає випадкове ціле число в
// діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber() {
    let n = null;
    let m = null;
    let max = null;
    let min = null;
    let randomNamber = null;
    do {
        n = +prompt('Перше число (натуральне число)');
    }
    while (!Number.isInteger(n) || isNaN(n) || !n || n <= 0);

    do {
        m = +prompt('Другє число (натуральне число)');
    }
    while (!Number.isInteger(m) || isNaN(m) || !m || m <= 0);

    max = Math.max(n, m);
    min = Math.min(n, m);

    randomNamber  = Math. round(Math.random()*(max-min+1)+min)

    return randomNamber
}


// 6.Створити функцію, яка рахує скільки разів певна буква
// повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter() {
    let word = prompt('Введить слово');
    let letter = prompt('Введіть букву');
    let wordLower = word.toLowerCase();
    let letterLower = letter.toLowerCase();
    let countLetter = null;

    for (let i = 0; i <= wordLower.length; i++){
        if (letterLower === wordLower[i]) {
            countLetter ++
        }
    }
return countLetter
}


// 7.Створіть функцію, яка конвертує долари в гривні та навпаки в
// залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або
// convertCurrency("2500UAH") -> 100$ 8. Врахуйте, інші валюти не конвертуються, потрібно виводити
// помилку, і також регістр uah не має значення.

function convertCurrency() {
    let sum = prompt('Введіть сумму "UAH" або"$"');
    let currency = sum.toLowerCase().includes('uah');
    let sumAfter = null;
    const exchange = 36.65;
    
    if (currency === true) {
        sum = sum.toLowerCase().replace('uah', '').trim();
        sumAfter = +sum / exchange;
    } else if(sum.includes('$')){
        sum = sum.replace('$', '').trim();
        sumAfter = +sum * exchange;
    } else {
        sumAfter = 'Такої валюти не має!!!'
    }

    return sumAfter
}


// 9. Створіть функцію генерації випадкового паролю (тільки числа),
// довжина встановлюється користувачем або по замовчуванню = 8
// символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() ->
// 87240124


function getRandomPassword() {
    let length = null;
    let password = '';
    do {
        length = +prompt('Введіть натуральне число');
    }
    while (!Number.isInteger(length) || +length > 8);
    
    if (length === 0) {
        for (let i = 0; i < 8; i++){
            password = password+(Math.floor(Math.random()*10))
        }
    } else {
        for (let i = 0; i < length; i++){
            password = password+(Math.floor(Math.random()*10))
        }
    }

    return password
}


// // 10. Створіть функцію, яка видаляє всі букви з речення.
// // Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters() {
    let word = prompt('Введіть слово');
    let letter = prompt('Яку букву видалити?');
    const newWord = (word.toLowerCase().replaceAll(letter.toLowerCase(), ''));
    return newWord
}


// 11. Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
// isPalyndrom("Я несу гусеня") -> true

function isPalyndrom() {
    let word = prompt('Слово для перевірки')
    word = word.toLowerCase().replace(/\s/g,'');
    console.log(word)
    for (let i = 0; i < Math.ceil(word.length / 2); i++){
        if (word[i] !== word[word.length - 1 - i]) {
            return false
        }
    }
    return true
}






document.writeln(
    `${alert('TASK#1')}
    Завдання 1:  ${getMaxDigit()}<br>
    ${alert('TASK#2')}
    Завдання 2:  ${getPow()}<br>
    ${alert('TASK#3')}
    Завдання 3:  ${getFirstLetterUp()}<br>
    ${alert('TASK#4')}
    Завдання 4:  ${getSumAfterTaxes()}<br>
    ${alert('TASK#5')}
    Завдання 5:  ${getRandomNumber()}<br>
    ${alert('TASK#6')}
    Завдання 6:  ${countLetter()}<br>
    ${alert('TASK#7')}
    Завдання 7:  ${convertCurrency()}<br>
    ${alert('TASK#9')}
    Завдання 9: ${getRandomPassword()}<br>
    ${alert('TASK#10')}
    Завдання 10: ${deleteLetters()}<br>
    ${alert('TASK#11')}
    Завдання 11: ${isPalyndrom()}<br>
    `

)