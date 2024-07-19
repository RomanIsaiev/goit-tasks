//* ### 1. Напишіть функцію bmi, яка обчислює індекс маси тіла `(bmi = weight / height ^ 2)`

// - якщо менше аніж 18.5 => "Недостатня вага"
// - якщо менше або дорівнює 25.0 => "Норма"
// - якщо менше або дорівнює 30.0 return => "Надмірна вага"
// - якщо більше 30 return => "Ожиріння"

// function calcBmi(weight, height) {
//   const result = (replace(weight) / (replace(height) ^ 2)).toFixed(1);
//   if (result < 18.5) {
//     return "Недостатня вага";
//   } else if (result <= 25.0) {
//     return "Норма";
//   } else if (result <= 30.0) {
//     return "Надмірна вага";
//   } else {
//     return "Ожиріння";
//   }
// }

// function replace(value) {
//   return value.replace(",", ".");
// }

// const weight = "82,0"; // можеш задавати довільне число
// const height = "1.80"; // можеш задавати довільне число

// console.log(calcBmi(weight, height));

//* ### 2. Напиши скрипт, який виконує наступний функціонал:

// На рахунку користувача є `23580` кредитів, значення зберігається в змінній `credits` (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по `3000` кредитів за штуку. Ціна одного дроїда зберігається в змінній `pricePerDroid` (створи і привласни).

// При відвідуванні сторінки, використовуючи `prompt`, необхідно запитати кількість
// дроїдів, які користувач хоче купити і зберегти в змінну.

// Напиши скрипт який:

// - Якщо в `prompt` була натиснута кнопка `Cancel`, виводить в консоль
//   повідомлення `'Скасовано користувачем!'`.
// - В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній
//   `totalPrice`.
// - Перевіряє чи зможе користувач оплатити замовлення:
//   - якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в
//     консоль повідомлення `'Недостатньо коштів на рахунку!'`.
//   - в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести
//     повідомлення
//     `'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'`.

// function buyDroid() {
//   let credits = 23580;
//   const pricePerDroid = 3000;
//   const userValue = prompt("яку кількість дроїдів ви хочете купити?");

//   if (!userValue) {
//     console.log("Скасовано користувачем!");
//     return;
//   }

//   const totalPrice = userValue * pricePerDroid;

//   if (totalPrice > credits) {
//     console.log("Недостатньо коштів на рахунку!");
//     return;
//   } else {
//     credits -= totalPrice;
//     console.log(
//       `Ви купили ${userValue} дроїдів на суму ${totalPrice}, на рахунку залишилося ${credits} кредитів.`
//     );
//   }
// }

// buyDroid();

//* ### 3. Напиши скрипт,який виконує арифметичні дії над двома числами. Попроси користувача ввести символ операції (`+`, `-`, `/`, `*`) Використовуй `switch`.

// const num1 = 4; // можеш задавати довільне число
// const num2 = 8; // можеш задавати довільне число
// const operation = prompt("Яку операцію над числами бажаєте виконати?");

// function calc(num1, num2, operation) {
//   switch (operation) {
//     case `+`:
//       console.log(num1 + num2);
//       break;
//     case `-`:
//       console.log(num1 - num2);
//       break;
//     case `/`:
//       console.log(num1 / num2);
//       break;
//     case `*`:
//       console.log(num1 * num2);
//       break;

//     default:
//       console.log("Invalid properties");
//   }
// }

// calc(num1, num2, operation);

//* ## 4. Є деякі рядки, які потрібно перевірити на вміст заборонених слів spam і sale, і повернути результат перевірки. Слова в рядку можуть бути у довільному регістрі, наприклад SPAM або sAlE. Якщо знайшли заборонене слово (spam або sale) то повертайте true. Якщо в рядку відсутні заборонені слова, повертайте false.
// Попорядку перевіряйте наступні рядки:
// -"Latest technology news" -
//   false -
//   "JavaScript weekly newsletter" -
//   false -
//   "Get best sale offers now!" -
//   true -
//   "Amazing SalE, only tonight!" -
//   true -
//   "Trust me, this is not a spam message" -
//   true -
//   "Get rid of sPaM emails. Our book in on sale!" -
//   true;

// function checkSpam(string) {
//   const stringCase = string.toLowerCase();
//   return stringCase.includes("sale") || stringCase.includes("spam");
// }

// console.log(checkSpam("Latest technology news"));
// console.log(checkSpam("JavaScript weekly newsletter"));
// console.log(checkSpam("Amazing SalE, only tonight!"));
// console.log(checkSpam("Trust me, this is not a spam message"));
// console.log(checkSpam("Get rid of sPaM emails. Our book in on sale!"));

//* ## 5. Напишіть скрипт, який буде обрізати рядок і додавати у кінець три крапки, якщо довжина рядка біляша за 25 символів, інакше рядок залишається незмінним.
// Перевірь наступні рядки попорядку:
// - "Curabitur ligula sapien"
// - "Vestibulum facilisis purus nec"
//     - "Nunc sed turpis a felis in nunc fringilla"

// function cutString(string, stringLength) {
//   return string.slice(0, stringLength).trim() + "...";
// }

// console.log(cutString("Curabitur ligula sapien", 9));
// console.log(cutString("Vestibulum facilisis purus nec", 25));

//* ### 6. Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

// Є змінна `message` в яку буде записано повідомлення про результат. При
// завантаженні сторінки у відвідувача запитується login через `prompt`:

// - Якщо відвідувач вводить `"ADMIN"`, то `prompt` запитує password
// - Якщо нічого не введено - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Користувача з таким логіном [введений логін] не існує"`

// Пароль перевіряти так:

// - Якщо введено пароль `"jqueryismyjam"`, то вивести рядок `"Привіт ADMIN!"`
// - Інакше виводити рядок `"Невірний пароль"`
// - Якщо 3 рази поспіль було введено направильно пароль, виводчити повідомлення що `"Ваш акаунт тимчасово заблокований!"`

// const ADMIN_LOGIN = "ADMIN";
// const ADMIN_PASSWORD = "jqueryismyjam";

// // function auth() {
// //   let message;
// //   let logCounter = 0;

// //   const userLogin = prompt("Your login?");

// //   if (!userLogin) {
// //     return (message = "Скасовано");
// //   }

// //   if (userLogin === ADMIN_LOGIN) {
// //     for (logCounter; logCounter < 3; logCounter += 1) {
// //       const userPassword = prompt("Your password?");
// //       console.log(logCounter);
// //       if (userPassword === ADMIN_PASSWORD) {
// //         message = "Привіт ADMIN!";
// //         break;
// //       } else if (userPassword !== ADMIN_PASSWORD) {
// //         console.log("Невірний пароль");
// //       }
// //     }
// //   } else if (logCounter === 2) {
// //     return (message = "Ваш акаунт тимчасово заблокований!");
// //   } else {
// //     message = `Користувача з таким логіном ${userLogin} не існує`;
// //   }

// //   return message;
// // }

// // function auth() {
// //   let message;
// //   let logCounter = 0;

// //   const userLogin = prompt("Your login?");

// //   if (!userLogin) {
// //     return (message = "Скасовано");
// //   }

// //   if (ADMIN_LOGIN !== userLogin) {
// //     return (message = `Користувача з таким логіном "${userLogin}" не існує`);
// //   }

// //   for (logCounter; logCounter < 3; logCounter += 1) {
// //     const userPassword = prompt("Your password?");

// //     if (userPassword === ADMIN_PASSWORD) {
// //       return (message = "Привіт ADMIN!");
// //     } else {
// //       console.log("Невірний пароль");
// //     }
// //     continue;
// //   }

// //   return (message = "Ваш акаунт тимчасово заблокований!");
// // }

// function auth() {
//   let message;
//   let attempt = 0;

//   const login = prompt("Your login?");

//   if (ADMIN_LOGIN === login) {
//     while (attempt < 3) {
//       const password = prompt("Your password?");
//       if (password === ADMIN_PASSWORD) {
//         message = "Привіт ADMIN!";
//         break;
//       } else {
//         attempt += 1;
//         if (attempt < 3) {
//           alert("Невірний пароль");
//         } else {
//           message = "Ваш акаунт тимчасово заблокований!";
//         }
//       }
//     }
//   } else if (!login) {
//     message = "Скасовано";
//   } else {
//     message = `Користувача з таким логіном "${login}" не існує`;
//   }

//   alert(message);
// }

// auth();

//* ### 1. Вивести числа у зворотньому порядку починаючи з 10, коли цикл дійде до нуля, показати повідомлення "Час вийшов"

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }
// alert("Час вийшов");

//* ### 2. Щоб людина заснула вона повинна порахувати до 100 овечок, але наші герої засинають швидше. Напиши цикл, який буде рахувати овечок до того моменту поки передане число не співпаде з числом, на якому герой засинає. На кожній ітерації виводь `[число] sheep`, якщо буде співпадіння то `😴💤`

// function countSheep(number) {
//   for (let i = 1; i <= 100; i += 1) {
//     console.log(`${i} sheep`);

//     if (i === number) {
//       console.log(`😴💤`);
//       break;
//     }
//   }
// }

// function countSheep(number) {
//   let i = 1;
//   while (i <= 100) {
//     console.log(`${i} sheep`);
//     i += 1;

//     if (i === number) {
//       console.log(`😴💤`);
//       break;
//     }
//   }
// }

// console.log(countSheep(28));
// console.log(countSheep(13));

//* ### 3. Напишіть цикл for, який виконуватиме ітерацію від 0 до 15. Для кожної ітерації він перевірятиме, парне чи непарне поточне число, і виводитиме повідомлення на екран.
// Зразок результату:

// "0 is even"
// "1 is odd"
// "2 is even"

// for (let i = 0; i <= 15; i += 1) {
//   !(i % 2) ? console.log(`${i} is even`) : console.log(`${i} is odd`);
// }

//* ### 4. Порахуй скільки голосних букв у реченні.

// function countVowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelCount = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     for (let j = 0; j < vowels.length; j += 1) {
//       if (str[i].toLowerCase() === vowels[j]) {
//         vowelCount += 1;
//         break;
//       }
//     }
//   }

//   return vowelCount;
// }
// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8
// console.log(countVowel("knowlage is a power")); // 7
// console.log(countVowel("aaaauuoieee")); // 7
