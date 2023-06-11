const short = 15.678;
const skirt = 123.965;
const shirt = 90.2345;
const cash = 500;

// Максимальная стоимость
const maxCost = Math.max(short, shirt, skirt)
console.log(`Максимальная стоимость: ` + maxCost);

// Минимальная стоимость
const minCost = Math.min(short, shirt, skirt);
console.log(`Минимальная стоимость: ` + minCost);

// Общая стоимость
const totalCost = short + skirt + shirt;
console.log(`Общая стоимость: ` + totalCost);

// Общая сумма без копеек
const wholePartCost = Math.trunc(short) + Math.trunc(skirt) + Math.trunc(shirt);
console.log(`Общая сумма без копеек: ` + wholePartCost);

// Округление до сотен
const roundingCost = Math.round(totalCost / 100) * 100;
console.log(`Округление до сотен(в меньшую сторону): ` + roundingCost);

// Проверка на четность
const costEven = Math.floor(totalCost) % 2 == 0;
console.log(`Вся стоимость четное число?: ` + costEven);

// Сдача с 500
const delivery = cash - totalCost;
console.log(`Сдача с 500: ` + delivery);

// Среднее значение цен
const middleCost =  (totalCost / 3).toFixed(2);
console.log(`Среднее значение цен: ` + middleCost);

// Скидка
const discount = (Math.random()*100).toFixed(0);
console.log(`Скидка: ` + discount + ` %`);

// Стоимость со скидкой
const costAfterDiscount = (totalCost - (totalCost / 100 * discount)).toFixed(2);
console.log(`Стоимость со скидкой: ` + costAfterDiscount);

// Прибыь
const profit = (totalCost / 2 - (totalCost / 100 * discount)).toFixed(2);
console.log(`Прибыь: ` + profit);


document.write    (
    `Максимальная стоимость: ${maxCost};<br>
    Минимальная стоимость: ${minCost};<br>
    Общая стоимость: ${totalCost};<br>
    Общая сумма без копеек: ${wholePartCost};<br>    
    Округление до сотен: ${roundingCost};<br>
    Вся стоимость четное число?: ${costEven};<br>
    Сдача с 500: ${delivery};<br>
    Среднее значение цен: ${middleCost};<br>
    Скидка: ${discount} %;<br>
    Стоимость со скидкой: ${costAfterDiscount};<br>
    Прибыль: ${profit};
    `
)