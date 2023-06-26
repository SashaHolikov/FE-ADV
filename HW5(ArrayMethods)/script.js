 // 1.Створіть функцію getRandomArray(length, min, max) – яка
// повертає масив випадкових цілих чисел. У функції є параметри: length -
// довжина масиву, min – мінімальне значення цілого числа, max – максимальне
// значення цілого числа.

function getRandomArray() {
    let lengthArray = null;
    let min = null;
    let max = null;
    let array = [];

    do {
        lengthArray = +prompt('Якої довжини мае бути массив?','введіть натуральне число');
    }
    while (!Number.isInteger(lengthArray) || isNaN(lengthArray) || !lengthArray || lengthArray <= 0);

    do {
        min = +prompt('Мінемальне значення чисел у масиві','введіть ціле число');
    }
    while (!Number.isInteger(min) || isNaN(min) || !min );

    do {
        max = +prompt('Максимальне значення чисел у масиві','введіть ціле числоб більше за min');
    }
    while (!Number.isInteger(max) || isNaN(max) || !max || max <= min);

    for (let i = 0; i < lengthArray; i++){
        array.push(Math.round(Math.random() * (max - min ) + min))
        
    }   
    return array
}

const randomArray = getRandomArray();
console.log('Випадковий массив чисил c заданими параметрами: ', randomArray)



// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(array) {
    const moda = [];
    let countArr = [];
    let count = 1;
    let sortArray = array.sort((a,b) => {
        return a-b
    });
    console.log(sortArray)

    sortArray.forEach((item, i, arr) => {
        if (item === arr[i + 1]) {
            count++
        } else {
            count = 1;
        }
        countArr.push(count);
        // console.log(countArr)
        
    });
    

    const maxCount = Math.max(...countArr);
    countArr.forEach((item, i) => {
        if (item === maxCount) {
            moda.push(sortArray[i])
        }
    })
    return moda
}

console.log( 'Визначення моди масиву чисел: ' ,getModa(randomArray))

// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
// всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(number) {
    const arr = number;
    const sum = arr.reduce((previousValue,item,i,arr) => {
        return previousValue + item;
    }, 0)
    return (sum/arr.length).toFixed(2)
}
const average = getAverage(randomArray);
console.log('Визначення середнього значення массиву: ' ,average)

// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих
// в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(numbers) {
    let median = 0;
    let arrSort = numbers.sort((a, b) => {
        return a - b
    });
    
    if (arrSort.length % 2 == 0) {
        median = (arrSort[arrSort.length / 2] + arrSort[(arrSort.length / 2)-1])/2;

    } else median = arrSort[Math.floor(arrSort.length / 2)]

    return median
}
const mediana = getMedian(randomArray)
console.log('Визначення медіани масиву чисел: ' ,mediana)

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
// передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function getFilterEvenNumbers(numbers) {
    let arrEvenNumber = numbers.filter((item,i, array) => {
        return item%2!==0
    })
    return arrEvenNumber
}
const arrFilterEvenNumbers = getFilterEvenNumbers(randomArray)
console.log('Відфільтрувати парні числа: ' ,arrFilterEvenNumbers)


// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість
// чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(numbers) {
    let positiveNumber = numbers.filter((item,i,arr) => {
        return item>0
    })
    return positiveNumber.length
}
const positiveNumbers = countPositiveNumbers(randomArray);
console.log('Визначити кількість додатніх числе: ' ,positiveNumbers);

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
// в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(numbers) {
    let dividedByFive = numbers.filter((item) => {
        return item%5==0
    })
    return dividedByFive
}

const dividedByFive = getDividedByFive(randomArray);
console.log('Елементи які кратні 5: ' ,dividedByFive)

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
// замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
// розбити масив на слова за допомогою функції .split(" "), після чого масив
// необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
// можливість розширювати cписок цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
// kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string, ...othersBadWords) {
	if (!string) return "Нічого не введено!";

	const badwordsArray = ["shit", "fuck", ...othersBadWords];
	const arrayWords = string.replace(/ +/g, " ").trim().split(" ");
	const arrayWithoutBadWords = arrayWords.map((word) => {
		const badWordsToReplace = badwordsArray.filter((badWord) => {
			return word.toLowerCase().includes(badWord);
		});

		badWordsToReplace.forEach((badWord) => {
			const stars = "*".repeat(badWord.length);
			word = word.toLowerCase().replaceAll(badWord, stars);
		});

		return word;
	});
	return arrayWithoutBadWords.join(" ");
}


console.log('Замінити плохі слова =>' + replaceBadWords("Are you fucking kidding? Fucking Stay, bullshit"));
console.log('Замінити плохі слова =>' + replaceBadWords("It's bullshit!"));


// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
// склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
// видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
    const arrayWithdivide = [];
    const resalt = [];
    const arrayOfWord = (word.toLowerCase()).split('');
    

    if (arrayOfWord.length < 3) {
        return `the word is short`
    }

    
    for (let i = 0; i < arrayOfWord.length; i += 3){
        arrayWithdivide.push(arrayOfWord.slice(i, i + 3));
        
    }

    for (let k = 0; k < arrayWithdivide.length; k++){
        resalt.push(arrayWithdivide[k].join(''))
        
    }

    return resalt
}

console.log('Розбити слово на склади по 3 буви  ' + divideByThree('Commanderae'))

