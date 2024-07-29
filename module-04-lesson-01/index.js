//* ### 1. Напишіть наступні функції:

// - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
//   коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор
//   у властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
//   консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює
//   загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   callback(obj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

//* ### 2. В об'єкта `account` є методи `withdraw(amount, onSuccess, onError)` та `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а другий та третій - коллбеки.

//* ### Метод `withdraw` викликає `onError` якщо amount більше `TRANSACTION_LIMIT` або `this.balance`, і `onSuccess` в іншому випадку.

//* ### Метод `deposit` викликає `onError` якщо `amount` більше `TRANSACTION_LIMIT` або менше або дорівнює нулю, і `onSuccess` в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 1000,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError(amount);
//       return;
//     }

//     this.balance -= amount;
//     onSuccess(amount);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       onError(amount);
//       return;
//     }

//     this.balance += amount;
//     onSuccess(amount);
//   },
// };

// function handleSuccess(amount) {
//   console.log(`The ${amount} was successfully withdrawn from the balance`);
// }

// function handleError(amount) {
//   console.warn(
//     `${amount} - There are not enough funds or the amount exceeds the amount for one transaction `
//   );
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//* ### 3. Створи стрілочну функцію `logItems()`, яка виводитьв консоль елементи масива, зроби перебір за допомогою методу `forEach()`.

// const logItems = (products) =>
//   products.forEach((product) => console.log(product));

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

//* ### 4. Напишіть функцію `each(array, callback)`, яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека. Використай `forEach()` для перебору масива

// function each(array, callback) {
//   const newArr = [];

//   array.forEach((value) => newArr.push(callback(value)));

//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

//* ## 5. Напишіть функцію `groupBy()`, яка групує елементи з масиву за значенням, що повертається зворотним викликом, коли елемент із масиву передається як аргумент.

const users = [
  {
    name: "John",
    yearOfBirth: 1988,
    placeOfBirth: "New York",
  },
  {
    name: "Nancy",
    yearOfBirth: 1963,
    placeOfBirth: "New York",
  },
  {
    name: "John",
    yearOfBirth: 1980,
    placeOfBirth: "Toronto",
  },
];

// function groupBy(users, callback) {
//   const sortedByPlace = {};
//   for (const user of users) {
//     sortedByPlace[callback(user)] = [];
//   }
//   users.forEach((user) => {
//     if (callback(user) === callback(user)) {
//       sortedByPlace[callback(user)].push(user);
//     }
//   });

//   return sortedByPlace;
// }

// function groupBy(users, callback) {
//   const sortedByPlace = {};
//   for (const user of users) {
//     const key = callback(user);
//     if (!sortedByPlace[key]) {
//       sortedByPlace[key] = [];
//     }
//     sortedByPlace[key].push(user);
//   }

//   return sortedByPlace;
// }

console.log(groupBy(users, (objectEl) => objectEl.placeOfBirth));

//Очікуваний резульат:
// {
//   ❗️New York: [
//     {
//       name: 'John',
//       yearOfBirth: 1988,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'Nancy',
//       yearOfBirth: 1963,
//       placeOfBirth: 'New York',
//     }
//   ],
//   ❗️Toronto: [
//     {
//       name: 'John',
//       yearOfBirth: 1980,
//       placeOfBirth: 'Toronto',
//     }
//   ]
// }
