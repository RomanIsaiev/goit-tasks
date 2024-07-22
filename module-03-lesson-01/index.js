// ### 1. Прокоментуй як поводять себе примітивні та складні типи даних.

// 🤓 start with strings, numbers and booleans
let age = 100;
let age2 = age;
// console.log(age, age2);

age = 200;
// console.log(age, age2);

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
// console.log(players === team); true

team[3] = "Lux";
// console.log(players, team); // poppy -> lux

// 🚀 4 different ways to copy array
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);
// console.log(
//   team === team2 || team === team3 || team === team4 || team === team4
// );

team4[3] = "heeee hawww";
// console.log(team4);

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
// console.log(captain === person);
// true;

captain.number = 99;
// console.log(captain, person);

// 🚀 2 ways how to make only 1 level deep copy (SHALLOW COPY)
const shallow1 = Object.assign({}, person);
const shallow2 = { ...person };
// console.log(captain === shallow1 || captain === shallow2);

shallow1.social.instagram = "wesbos.dev";
shallow1.age = 222;
// console.log(person, shallow1);

// 🚀 3 ways how to make a DEEP COPY of an object with all levels of nesting

// const deep1 = JSON.parse(JSON.stringify(person));
// const deep2 = structuredClone(person);
// // const deep3 = _.cloneDeep(person); // https://www.geeksforgeeks.org/lodash-_-clonedeep-method/

// deep1.social.twitter = "@wesbos";
// console.log(person, deep1);

//* ### 2. Практика базових дій над об'єктом

// - Створи 2 окремі змінні `firstName` і `lastName` і задопомогою `promt` попроси користувача ввести дані. ✅
// - Створи об'єкт `user` і занеси в нього дані які ти отримав у користувача, після цієї дії в об'єкті user має бути 2 властивості. ✅
// - Зміни значення властивості `firstName` на якесь інше ✅
// - Виедети значення властивості `lastName` у консоль 2 способами. ✅
// - Створи змінну `const login = "test@gmail.com"` ✅
// - Створи змінну `const password = "test123"` ✅
// - Створи властивість `auth`, її значенням має бути об'єкт з 2 властивостями `login` i `password`. Скоритайся короткими властивостями ✅
// - Виедети значення властивості `auth` у консоль.✅
// - Створи у об'єкті `user` 2 методи: ✅
//   `showUser()` - який виводить у консоль поточний об'єкт ✅
//   `showFullName()`- який виводить у консоль повне ім'я користувача ✅

// const firstName = prompt("enter your first name");
// const lastName = prompt("enter your last name");

// const firstName = "VoleryyCat";
// const lastName = "Supa";

// // const user = {};
// const user = {
//   showUser() {
//     return user;
//   },
//   showFullName() {
//     return `${user.firstName} ${user.lastName}`;
//   },
// };

// console.log(user);

// user.firstName = firstName;
// user.lastName = lastName;

// console.log(user);

// user.firstName = "Pupa";

// console.log(user);

// console.log("lastName1", user.lastName);
// console.log("lastName2", user["lastName"]);

// const login = "test@gmail.com";
// const password = "test123";

// const auth = {
//   login,
//   password,
// };

// console.log(auth);

// console.log(user.showUser());
// console.log(user.showFullName());

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

// function isBookAlreadyRead(library) {
//   library.forEach((book) => {
//     if (book.readingStatus) {
//       console.log(`Already read "${book.author}" by ${book.title}`);
//     } else {
//       console.log(`You still need to read "${book.author}" by ${book.title}`);
//     }
//   });
// }

// console.log(isBookAlreadyRead(library));

//* ### 4. Обнови значення кожної властивості так, що перед сумою стояв знак долара.
//    Виводь результат у форматі `name: $salary`

// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };

// for (const key in salaries) {
//   if (salaries.hasOwnProperty(key)) {
//     salaries[key] = `$${salaries[key]}`;
//     console.log(`${key}: ${salaries[key]}`);
//   }
// }

// console.log(salaries);

//* ### 5. Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників та повертає ім'я найпродуктивнішого (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості об'єкта у форматі `"ім'я": "кількість завдань"`.

// function findBestEmployee(employees) {
//   const tasks = Object.values(employees);
//   const bestResult = Math.max(...tasks);

//   for (const employ in employees) {
//     if (employees.hasOwnProperty(employ)) {
//       if (bestResult === employees[employ]) {
//         return `${employ}: ${employees[employ]}`;
//       }
//     }
//   }
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     lorence: 99,
//     helen: 1,
//   })
// ); // lorence

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
//   const propArray = [];
//   for (const item of arr) {
//     if (item[prop]) {
//       propArray.push(item[prop]);
//     }
//   }

//   return propArray;
// }

// function getAllPropValues(arr, prop) {
//   const propArray = [];

//   for (const item of arr) {
//     if (item.hasOwnProperty(prop)) {
//       propArray.push(item[prop]);
//     }
//   }

//   return propArray;
// }

// console.log(getAllPropValues(users, "firstName")); // ["Mark", "Victoria", "Emma"]
// console.log(getAllPropValues(users, "language")); // ["JavaScript", "Python", "Java"]
// console.log(getAllPropValues(users, "hobby")); // []

//* ### 7. Є масив `data` і в ньому дублюються елементи. Створи функцію `sumUpTheInstances`, яка буде повертати об'єкт, який буде місти властивість, де ключем буде унікальне значення, а значенням буде число, скільки раз воно повторювалось у масиві.
//    `Очікуваний результат`:
//    const obj = {
//     apple: 2,
//     banana: 2,
//     avocado: 1,
//     cherry:1
//    }

// function sumUpTheInstances(arr) {
//   const newArr = {};

//   for (const item of arr) {
//     newArr[item] ? (newArr[item] += 1) : (newArr[item] = 1);
//   }

//   return newArr;
// }

// const products = [
//   "apple",
//   "apple",
//   "banana",
//   "banana",
//   "avocado",
//   "avocado",
//   "avocado",
//   "avocado",
//   "cherry",
// ];

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
//   // const models = [];

//   // vehicles.forEach((element) => {
//   //   models.push(element.model);
//   // });

//   // for (const car of vehicles) {
//   //   models.push(car.model);
//   // }

//   // for (const car of vehicles) {
//   //   const values = Object.values(car);
//   //   models.push(values[1]);
//   // }

//   // for (const car of vehicles) {
//   //   models.push(car["model"]);
//   // }

//   // for (const vehicle of vehicles) {
//   //   models.push(vehicle.model);
//   // }

//   // return models;
// }

// function changeModel(vehicles, oldModel, newModel) {
//   for (const car of vehicles) {
//     if (car.model === oldModel) {
//       car.model = newModel;
//     }
//   }
// }

// function getTotalPrice(vehicles) {
//   let totalPrice = 0;

//   for (const car of vehicles) {
//     totalPrice += car.price;
//   }

//   return totalPrice;
// }

// // console.table(vehicles);
// console.log(getModels(vehicles));

// changeModel(vehicles, "Mazda 6", "Hello world");
// changeModel(vehicles, "Fusion", "AAAAAA");
// changeModel(vehicles, "F-150", "BBBBBB");

// // getModels(vehicles);

// // console.table(vehicles);

// console.log(getTotalPrice(vehicles));

//* ### 9. ⭐️ ⭐️ Напишіть функцію `checkLineForContentOfTwoIdenticalChars`, яка прийматиму набір рядків і повертатиме масив лише з тими рядками, в яких будь-яка буква повторювалась лише 2 рази.
//  `Input`: "asdf", "fdas", "asds", "d fm", "dfaa", "aaaa", "aabb", "aaabb"
// `Output`: 'asds', 'dfaa', 'aabb', 'aaabb'

const stringArr = [
  "asdf",
  "fdas",
  "asds",
  "d fm",
  "dfaa",
  "aaaa",
  "aabb",
  "aaabb",
];

function checkLineForContentOfTwoIdenticalChars(arr) {
  const obj = {};
  const goodArr = [];

  for (const item of arr) {
    const objInObj = (obj[item] = {});
    for (const letter of item.split("")) {
      objInObj[letter] ? (objInObj[letter] += 1) : (objInObj[letter] = 1);
      // if (objInObj[letter] > 1 && objInObj[letter] < 3) {
      //   goodArr.push(item);
      // }
    }
  }

  const values = Object.values(obj);

  for (const value of values) {
    console.log(value);
  }

  return obj;
}

console.log(checkLineForContentOfTwoIdenticalChars(stringArr));

//   for (const item of arr) {
//     newArr[item] ? (newArr[item] += 1) : (newArr[item] = 1);
//   }
