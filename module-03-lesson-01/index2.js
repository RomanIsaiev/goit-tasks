//* ### 1. Прокоментуй як поводять себе примітивні та складні типи даних.

// 🤓 start with strings, numbers and booleans
let age = 100;
let age2 = age;
// console.log(age, age2); //100 100

age = 200;
// console.log(age, age2); // 200 100

let name = "Wes";
let name2 = name;
// console.log(name, name2); // wes wes
name = "Wesley";
// console.log(name, name2); // wesley wes

// 🤓 Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// that is an array reference, not an array copy
const team = players;
// console.log(players, team);
// console.log(players === team); //true

team[3] = "Lux";
// console.log(players, team); // poppy -> lux in players and team

// 🚀 4 different ways to copy array
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
// console.log(team === team2 || team === team3 || team === team4 || team === team4); // false

team4[3] = "heeee hawww";
// console.log(players, team4);

// 🤓 with Objects
const person = {
  name: "Wes",
  age: 100,
  social: {
    facebook: "wesbos.developer",
  },
};

const captain = person;
// console.log(captain, person);
// console.log(captain === person); //true

captain.number = 99;
// console.log(captain, person);

// 🚀 2 ways how to make only 1 level deep copy (SHALLOW COPY)
const shallow1 = Object.assign({}, person);
const shallow2 = { ...person };
// console.log(captain === shallow1 || captain === shallow2); // false

// shallow1.social.instagram = "wesbos.dev";
// console.log(person, shallow1);

// 🚀 3 ways how to make a DEEP COPY of an object with all levels of nesting
const deep1 = JSON.parse(JSON.stringify(person));
const deep2 = structuredClone(person);
// const deep3 = _.cloneDeep(person); // https://www.geeksforgeeks.org/lodash-_-clonedeep-method/

deep1.social.twitter = "@wesbos";
// console.log(person, deep1);

//* ### 2. Практика базових дій над об'єктом

// - Створи 2 окремі змінні `firstName` і `lastName` і задопомогою `promt` попроси користувача ввести дані. ✅
// - Створи об'єкт `user` і занеси в нього дані які ти отримав у користувача, після цієї дії в об'єкті user має бути 2 властивості. ✅
// - Зміни значення властивості `firstName` на якесь інше ✅
// - Виедети значення властивості `lastName` у консоль 2 способами. ✅
// - Створи змінну `const login = "test@gmail.com"` ✅
// - Створи змінну `const password = "test123"` ✅
// - Створи властивість `auth`, її значенням має бути об'єкт з 2 властивостями `login` i `password`. Скоритайся короткими властивостями ✅
// - Виедети значення властивості `auth` у консоль. ✅
// - Створи у об'єкті `user` 2 методи:  ✅
//   `showUser()` - який виводить у консоль поточний об'єкт ✅
//   `showFullName()`- який виводить у консоль повне ім'я користувача ✅

// const firstName = "Water";
// const lastName = "Lemon";

// const user = {
//   showUser() {
//     console.log("5", user);
//     console.log("5", this);
//   },
//   showFullName() {
//     console.log("6", `${user.firstName} ${user.lastName}`);
//     console.log("6", `${this.firstName} ${this.lastName}`);
//   },
// };

// user.firstName = firstName;
// user.lastName = lastName;

// console.log("1", user);

// user.firstName = "Apple";

// console.log("2", user);

// console.log(user.lastName);
// console.log(user["lastName"]);

// const login = "test@gmail.com";
// const password = "test123";

// user.auth = {
//   login,
//   password,
// };

// console.log("3", user);

// console.log("4", user.auth);

// user.showUser();

// user.showFullName();

//* ### 3. Напишіть функцію `isBookAlreadyRead` для відображення статусу читання (тобто відображення назви книги, імені автора та статусу читання) наступних книг.Наприклад `"Already read " + "book" by author` або `"You still need to read " + "book" by author`

// const library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// function isBookAlreadyRead() {
//   for (const item of library) {
//     if (!item["readingStatus"]) {
//       console.log(
//         `You still need to read ${item["title"]} by ${item["author"]}`
//       );
//     } else {
//       console.log(`Already read ${item["title"]} by ${item["author"]}`);
//     }
//   }
// }

// function isBookAlreadyRead() {
//   for (const item of library) {
//     if (item.readingStatus) {
//       console.log(`Already read ${item.title} by ${item.author}`);
//     } else {
//       console.log(`You still need to read ${item.title} by ${item.author}`);
//     }
//   }
// }

// console.log(isBookAlreadyRead());

//* ### 4. Обнови значення кожної властивості так, що перед сумою стояв знак долара.
//    Виводь результат у форматі `name: $salary`

// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };

// function updateSalary() {
//   const keys = Object.keys(salaries);
//   for (const key of keys) {
//     salaries[key] = `$${salaries[key]}`;
//     console.log(`${key}: ${salaries[key]}`);
//   }
// }

// updateSalary();

// console.log(salaries);

//* ### 5. Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників та повертає ім'я найпродуктивнішого (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості об'єкта у форматі `"ім'я": "кількість завдань"`.

// function findBestEmployee(employees) {
//   const keys = Object.keys(employees);
//   let bestEmploy = 0;
//   for (const key of keys) {
//     if (bestEmploy < employees[key]) {
//       bestEmploy = employees[key];
//     }
//   }
//   for (const key of keys) {
//     if (bestEmploy === employees[key]) {
//       return `${key}: ${bestEmploy}`;
//     }
//   }
//     return bestEmploy;
// }

// function findBestEmployee(employees) {
//   const values = Object.values(employees);
//   const highValue = Math.max(...values);

//   for (const item in employees) {
//     if (employees[item] === highValue) {
//       return `${item}: ${highValue}`;
//     }
//   }
// }
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 99,
//     lorence: 2,
//   })
// ); // helen

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

//* ### 6. Напиши функцію `getAllPropValues(arr, prop)`, яка отримує масив об'єктів та ім'я ключа. Повертає масив значень певного поля prop кожного об'єкта в масиві.

// const users = [
//   {
//     firstName: "Mark",
//     lastName: "G.",
//     country: "Scotland",
//     age: 22,
//     language: "JavaScript",
//   },
//   {
//     firstName: "Victoria",
//     lastName: "T.",
//     country: "Puerto Rico",
//     continent: "Americas",
//     age: 30,
//     language: "Python",
//   },
//   {
//     firstName: "Emma",
//     lastName: "B.",
//     country: "Norway",
//     age: 19,
//     language: "Java",
//   },
// ];

// function getAllPropValues(arr, prop) {
//   const newArr = [];
//   for (const item of arr) {
//     if (item[prop]) {
//       newArr.push(item[prop]);
//     }
//   }
//   return newArr;
// }

// console.log(getAllPropValues(users, "firstName")); // ["Mark", "Victoria", "Emma"]
// console.log(getAllPropValues(users, "language")); // ["JavaScript", "Python", "Java"]
// console.log(getAllPropValues(users, "hobby")); // []

//* ### 7. Є масив `data` і в ньому дублюються елементи. Створи функцію `sumUpTheInstances`, яка буде повертати об'єкт, який буде місти властивість, де ключем буде унікальне значення, а значенням буде число, скільки раз воно повторювалось у масиві.
//  `Очікуваний результат`:
//  const obj = {
//   apple: 2,
//   banana: 2,
//   avocado: 1,
//   cherry:1
//  }

// const products = ["apple", "apple", "banana", "banana", "avocado", "cherry"];

// function sumUpTheInstances(products) {
//   const obj = {};

//   for (const product of products) {
//     obj[product] ? (obj[product] += 1) : (obj[product] = 1);
//     obj[product] = (obj[product] || 0) + 1;
//   }

//   return obj;
// }

// console.log(sumUpTheInstances(products));

//* ### 8. Напиши декілька функцій:
// - Отримати список моделей задопомогою функції `getModels`:
// - Замінити назву моделі задопомогою функції `changeModel`
// - Отримати загальну ціну всіх машин за допомогою функції `getTotalPrice`

// const vehicles = [
//   { make: "Honda", model: "CR-V", type: "suv", price: 24045 },
//   { make: "Honda", model: "Accord", type: "sedan", price: 22455 },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", price: 24195 },
//   { make: "Mazda", model: "CX-9", type: "suv", price: 31520 },
//   { make: "Toyota", model: "4Runner", type: "suv", price: 34210 },
//   { make: "Toyota", model: "Sequoia", type: "suv", price: 45560 },
//   { make: "Toyota", model: "Tacoma", type: "truck", price: 24320 },
//   { make: "Ford", model: "F-150", type: "truck", price: 27110 },
//   { make: "Ford", model: "Fusion", type: "sedan", price: 22120 },
//   { make: "Ford", model: "Explorer", type: "suv", price: 31660 },
// ];
// function getModels(vehicles) {
//   for (const vehicle of vehicles) {
//     console.log(vehicle.model);
//   }
// }
// function changeModel(vehicles, currentModel, newModel) {
//   for (const car of vehicles) {
//     if (car.model === currentModel) {
//       car.model = newModel;
//     }
//   }
// }

// function getTotalPrice(vehicles) {
//   let total = 0;

//   for (const vehicle of vehicles) {
//     total += vehicle.price;
//   }

//   console.log(total);
//   return total;
// }

// // getModels(vehicles);

// changeModel(vehicles, "Mazda 6", "Hello world");
// changeModel(vehicles, "Fusion", "AAAAAA");
// changeModel(vehicles, "F-150", "BBBBBB");

// getModels(vehicles);

// getTotalPrice(vehicles);

//* ### 9. ⭐️ ⭐️ Напишіть функцію `checkLineForContentOfTwoIdenticalChars`, яка прийматиму набір рядків і повертатиме масив лише з тими рядками, в яких будь-яка буква повторювалась лише 2 рази.
//  `Input`: "asdf", "fdas", "asds", "d fm", "dfaa", "aaaa", "aabb", "aaabb"
//  `Output`: 'asds', 'dfaa', 'aabb', 'aaabb'

// const arr = ["asdf", "fdas", "asds", "d fm", "dfaa", "aaaa", "aabb", "aaabb"];

// function checkLineForContentOfTwoIdenticalChars(array) {
//   const obj = {};
//   const newArr = [];

//   for (const item of array) {
//     obj[item] = {};
//   }
//   for (const item1 in obj) {
//     const letterArr = item1.split("");
//     for (const letter of letterArr) {
//       const secondObj = obj[item1];
//       secondObj[letter] = (secondObj[letter] || 0) + 1;
//     }
//     for (const item in obj[item1]) {
//       const keys = obj[item1];
//       if (keys[item] === 2) {
//         newArr.push(item1);
//         break;
//       }
//     }
//   }

//   return newArr;
// }

// console.log(checkLineForContentOfTwoIdenticalChars(arr));
