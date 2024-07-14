// ### 1. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const weight = "88,3";
// const height = "1.75";

// function imb(weight, height) {
//   return Number((replace(weight) / replace(height) ** 2).toFixed(1));
// }

// function replace(string) {
//   return string.replace(",", ".");
// }

// console.log(imb(weight, height));

// result: 28.8

// ### 2. Перше століття охоплює період з 1-го по 100-й рік включно, друге - з 101-го по 200-й рік включно і т.д. За заданим роком повернути століття, в якому він знаходиться.

// Попорядку перевіряй наступні роки:

// - 1601 (17 століття)
// - 1705 (18 століття)
// - 1900 (19 століття)
// - 2000 (20 століття)
// - 2023 (21 століття)

// function centuryCalculator(number) {
//   console.log(number / 100);
//   const century = Math.ceil(number / 100);

//   return `${number} це ${century} - століття`;
// }

// console.log(centuryCalculator(1601));
// console.log(centuryCalculator(705));
// console.log(centuryCalculator(1900));
// console.log(centuryCalculator(2023));

// ### 3. Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// function time(number) {
//   const hours = String(Math.floor(number / 60));
//   const minutes = String(number % 60);

//   return `${hours.padStart(2, "0")} : ${minutes.padStart(2, "0")}`;
// }

// console.log(time(70));
// console.log(time(450));
// console.log(time(1441));

// ### 1. Перевірь чи наступні значення є рядками. Результатом має бути `true` або `false`

// - "hello world" - true
// - "undefined" - true
// - [1, 2, 4, 0] - false
// - { course: "GoIT" } - false
// - +"5" - false

// function checkString(string) {
//   return typeof string === "string";
// }

// console.log(checkString("hello world"));
// console.log(checkString("undefined"));
// console.log(checkString([1, 2, 4, 0]));
// console.log(checkString({ course: "GoIT" }));
// console.log(checkString(+"5"));

// ## 2. Є деякі рядки, які потрібно перевірити на вміст забороненого слова sale, і повернути результат перевірки. Слова в рядку можуть бути у довільному регістрі, наприклад sAlE. Якщо знайшли заборонене слово spam то повертайте true. Якщо в рядку відсутнє заборонене слово, повертайте false.

// Попорядку перевіряйте наступні рядки:

// - "Latest technology news" - false
// - "Get best sale offers now!" - true
// - "Amazing SalE, only tonight!" - true

// function checkSale(string) {
//   return string.toLowerCase().includes("sale");
// }

// console.log(checkSale("Latest technology news"));
// console.log(checkSale("Get best sale offers now!"));
// console.log(checkSale("Amazing SalE, only tonight!"));

// ## 3. Напишіть скрипт, який буде обрізати рядок до 25 символа і додавати у кінець три крапки.

// Працюй з наступними рядками попорядку:

// - "Vestibulum facilisis purus nec"
// - "Nunc sed turpis a felis in nunc fringilla"

// function cutString(string, count) {
//   return string.slice(0, count) + "...";
// }

// console.log(cutString("Vestibulum facilisis purus nec", 25));
// console.log(cutString("Nunc sed turpis a felis in nunc fringilla", 25));

// ### 1. Напиши скрипт, який просить користувача ввести 2 числа і додає їх, результат вивести в алертом.

// function add() {
//   const firstValue = prompt("Enter first value");
//   const secondValue = prompt("Enter Second value");

//   alert(`Result - ${+firstValue + +secondValue}`);
// }

// add();

// ### 1. Яким буде результат виразів ?

// console.log(5 > 4); // true +

// console.log(10 >= "7"); // true +

// console.log("2" > "12"); // false - / true

// console.log("2" < "12"); // true / false

// console.log("4" == 4); // true +

// console.log("6" === 6); // false +

// console.log("false" === false); // false +

// console.log(1 == true); //true +

// console.log(1 === true); // false +

// console.log("0" == false); // true +

// console.log("0" === false); // false +

// console.log("Papaya" < "papaya"); // false / true

// console.log("Papaya" === "papaya"); // false +

// console.log(undefined == null); // true +

// console.log(undefined === null); // fasle +

// console.log(typeof null); // object +

// console.log(typeof NaN); // string / number

// console.log(typeof Infinity); // number +

// console.log(typeof +"1"); // number +

// console.log(typeof "undefined"); // string +

// 2. Яким буде результат виразів?

// console.log(true && 3); // 3 +

// console.log(false && 3); // false +

// console.log(true && 4 && "kiwi"); // kiwi +

// console.log(true && 0 && "kiwi"); // 0 +

// console.log(true && true); // true +

// console.log(false && true); // fasle +

// console.log(true && false); // false +

// console.log(false && false); // false +

// console.log(true || true); // true +

// console.log(false || true); // true +

// console.log(true || false); // true +

// console.log(false || false); // false +

// console.log(true || 3); // true +

// console.log(true || 3 || 4); // true +

// console.log(true || false || 7); // true +

// console.log(null || 2 || undefined); // 2 +

// console.log((1 && null && 2) > 0); // false +

// console.log(null || (2 && 3) || 4); // 3 +
