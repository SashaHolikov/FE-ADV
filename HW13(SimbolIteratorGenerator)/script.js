
/*
Завдання 1:
Створіть нескінченний генератор ідентифікаторів.
Повинен працювати наступним чином:
const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3*/

function* createIdGenerator() {
    for (let value = 0; value < Infinity; value++){
        yield value
    }
}
const idGenerator = createIdGenerator()

const createId = document.getElementById('createId');
createId.addEventListener('click', () => {
    console.log(idGenerator.next().value)
})


/**
 * ADVANCE
 Створіть генератор, який буде регулювати розміри шрифту для
вашого сайту.
(Можна допрацювати, щоб реально змінював шрифт, але це не є
обов'язковою умовою)
Працювати генератор буде наступним чином:
const fontGenerator = newFontGenerator(14); // 14 – стартове
значення
 */

function* newFontGenerator() {
    let font = 20;
    for (let i = 0; i <= Infinity;i++){
        let parameter = yield font

        if (parameter === 'up') {
        yield font = font + 2;
        } else if (parameter === 'down'){
        yield font = font - 2;
        } 
    }
}
const fontGeneration = newFontGenerator();

const reduce = document.getElementById('reduce');
const increase = document.getElementById('increase');

reduce.addEventListener('click', clickReduce)

function clickReduce() {    
    let font = fontGeneration.next('down').value
    document.getElementById('fontSize').style.fontSize =`${font}px`
}

increase.addEventListener('click', clickIncrease)

function clickIncrease() {
    let font = fontGeneration.next('up').value
    document.getElementById('fontSize').style.fontSize =`${font}px`
}
