import { cars } from "./cars.js";

// console.log("all cars -", cars);

//* ### Example 1.1 - Метод map
// Нехай функція `getModels` повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => {
//   return cars.map((car) => car.model);
// };

// console.table(getModels(cars));

//* ### Example 1.2 - Метод map
// Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
// значенням властивості `price` залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => car.price * (1 - discount));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//* ### Example 1.3 - Метод filter
// Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша ніж
// значення параметра `threshold`.

// const filterByPrice = (cars, threshold) =>
//   cars.filter((car) => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//* ### Example 1.4 - Метод filter
// Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
// onSale яких true.

// const getCarsWithDiscount = (cars) => cars.filter((car) => car.onSale);
// console.table(getCarsWithDiscount(cars));

//* ### Example 1.5 - Метод filter
// Нехай функція `getCarsWithType` повертає масив автомобілів тип яких збігається
// зі значенням параметра `type`.

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//* ### Example 1.6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.log(getCarByModel(cars, "F-150"));
// console.log(getCarByModel(cars, "CX-9"));

//* ### Example 1.7 - Метод sort
// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів
// відсортований за зростанням значення якості `amount`.

// const sortByAscendingAmount = (cars) =>
//   cars.sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

//* ### Example 1.8 - Метод sort
// Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
// відсортований за зменшенням значення властивості `price`.

// const sortByDescendingPrice = (cars) => cars.sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//* ### Example 1.9 - Метод sort
// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований за
// назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.

// 💩
// const sortByModel = (cars, order) => {
//   if (order === "asc") {
//     return cars.sort((a, b) => a.model.localeCompare(b.model));
//   } else {
//     return cars.sort((a, b) => b.model.localeCompare(a.model));
//   }
// };

// 💩
// const sortByModel = (cars, order) =>
//   cars.sort((a, b) => {
//     if (order === "asc") {
//       return a.model.localeCompare(b.model);
//     } else {
//       return b.model.localeCompare(a.model);
//     }
//   });

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//* ### Example 1.10 - Метод reduce
// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, car) => {
//     return acc + car.amount;
//   }, 0);

// console.log(getTotalAmount(cars));

//* ### Example 1.11 - Ланцюжки методів
// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).map((item) => item.model);

// console.log(getModelsOnSale(cars));

//* ### Example 1.12 - Ланцюжки методів
// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
//   cars.filter((car) => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));
