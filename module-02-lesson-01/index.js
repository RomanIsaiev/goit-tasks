//* ### 1. Виконай базові операції над масивом. Після кожної дії робити console.log щоб слідкувати як змінюється масив.

// - Створіть масив `products1` з елементами «apple», «orange» і «melon». ✅
// - Додайте «pear» до кінця. ✅
// - Виведіть у консоль довжина масиву ✅
// - Виведіть у консоль перший елемент масиву. ✅
// - Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини. ✅
// - Видаліть перший елемент та виведіть його в консоль. ✅
// - Видаліть останній елемент та виведіть його в консоль. ✅
// - Вставте «cherry» та «lemon» на початок масиву. ✅
// - Замініть «lemon» на «grapes» ✅
// - Видаліть «orange» з масиву products1 ✅
// - Об'єднайте масив `products1` з масивом `products2 = ["melon", "watermelon", "pineapple"]`; ✅
// - Видаліть дублікати з новоствореного масива (`products3`) ✅
// - Обріж новостворений масив без дублікатів (`products3NoDubs`) від першого до третього елемента ✅
// - Створіть новий масив `products4 = ["grapes", "pineapple", "cherry"]` і зробіть його копію у змінну `products4Copy` ✅
// - Чи рівні між собою `products4` і `products4Copy`? Чому? Якщо додати новий елемент у products4 чи додасться він у products4Copy?

// const products1 = ["apple", "orange", "melon"];

// products1.push("pear");

// console.log("🚀 ~ products1:", products1);
// console.log("🚀 ~ products1 length:", products1.length);
// console.log("🚀 ~ products1 length:", products1[0]);
// console.log("🚀 ~ products1 length:", products1[products1.length - 1]);

// console.log(products1.shift());
// console.log(products1.pop());

// products1.unshift("cherry", "lemon");

// console.log("🚀 ~ products1:", products1);

// const lemonInx = products1.indexOf("lemon");
// products1.splice(lemonInx, 1, "grapes");

// console.log("🚀 ~ products1:", products1);

// const orangeInx = products1.indexOf("orange");

// products1.splice(orangeInx, 1);

// console.log("🚀 ~ products1:", products1);

// const products2 = ["melon", "watermelon", "pineapple"];

// const products3 = products1.concat(products2);

// console.log("🚀 ~ products1:", products3);

// const products3NoDubs = [];

// // for (let i = 0; i < products3.length; i += 1) {
// //   if (!(products3.indexOf(products3[i]) === i)) {
// //     const dubInx = products3.indexOf(products3[i]);
// //     products3.splice(dubInx, 1);
// //   }
// // }

// for (let i = 0; i < products3.length; i += 1) {
//   if (products3.indexOf(products3[i]) === i) {
//     products3NoDubs.push(products3[i]);
//   }
// }

// console.log("🚀 ~ products3NoDubs:", products3NoDubs);

// console.log("🚀 ~ products3NoDubs:", products3NoDubs.slice(1, 3));

// const products4 = ["grapes", "pineapple", "cherry"];

// const products4Copy = products4;

// console.log(products4Copy === products4);

// console.log("🚀 ~ products4:", products4);

// products4.push("lemon");

// console.log("🚀 ~ products4Copy:", products4Copy);

//* ### 2. Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я та телефонний номер користувача. У параметри `names` та `phones` будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < namesArr.length; i += 1) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

//* ### 3. Напиши функцію `findLongestWord(string)`, яка приймає параметром довільний рядок (в рядку будуть тільки слова і пробіли) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   const wordsArr = string.split(" ");
//   let longestWord = wordsArr[0];

//   for (const word of wordsArr) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'

//* ### 4. Напишіть функцію, яка перевіряє екзамен у студентів. Перший вхідний масив містить правильні відповіді на іспиті, наприклад, ["a", "a", "b", "d"]. Другий масив називається "answers" і містить відповіді студента. Обидва масиви не порожні і мають однакову довжину. Поверніть оцінку для цього масиву відповідей, виводячи +4 за кожну правильну відповідь, -1 за кожну неправильну відповідь і +0 за кожну пропущену відповідь (порожній рядок). Якщо оцінка < 0, виведіть 0.

// function checkExam(answers, responses) {
//   let points = 0;

//   for (let i = 0; i < answers.length; i += 1) {
//     if (answers[i] === responses[i]) {
//       points += 4;
//     } else if (responses[i] === "") {
//       points += 0;
//     } else {
//       points -= 1;
//     }
//   }

//   if (points < 0) {
//     points = 0;
//   }

//   return points;
// }

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // → 6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // → 7
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // → 16
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // → 0

//* ### 5. Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// function formatString(str) {
//   const strArr = str.trim().split(" ");
//   return strArr.slice(1, strArr.length - 1);
// }

// console.log(formatString("   Welcome to the future   "));
// console.log(formatString("Hello World"));
// console.log(formatString("Knowlage is a power"));

//* ### 6. Напишіть код, який очищає масив від небажаних значень, таких як false undefined, пусті рядки, нуль, null.

// function filterArray(arr) {
//   const goodArr = [];
//   for (const item of arr) {
//     if (item) {
//       goodArr.push(item);
//     }
//   }

//   return goodArr;
// }
// console.log(filterArray([0, 1, false, 2, undefined, "", 3, null])); // [1, 2, 3]
// console.log(filterArray([NaN, 0, 15, false, -22, "", undefined, 47, null])); // [15, -22, 47]

//* ### 7. Напишіть код, який повертає новий масив без наданих значень.
// - Очікуваний результат: [1, 2, 3, 1, 2] без 1 => [2, 3, 2]

// function deleteSpecificCharacter(arr, charToDelete) {
//   const newArr = [];
//   for (const item of arr) {
//     if (item !== charToDelete) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// console.log(deleteSpecificCharacter([1, 2, 3, 1, 2], 1)); // [2, 3, 2]
// console.log(deleteSpecificCharacter([4, 3, 2, 1, 0], 9)); // [4, 3, 2, 1, 0]
// console.log(deleteSpecificCharacter([5, 6, 2, 9, 2])); // [5, 6, 2, 9, 2]
// console.log(deleteSpecificCharacter([5, 6, 2, 9, 2], 2)); // [5, 6, 9]

//* ### 8. Напишіть код, який поверне суму рядка

// function digitSum(data) {
//   let sum = 0;
//   const numberArr = String(data).split("");

//   for (const item of numberArr) {
//     sum += Number(item);
//   }

//   return sum;
// }
// console.log(digitSum(4367)); // 20
// console.log(digitSum(56349)); // 27
