//* ## 1. Розстав відсутні this в методах об'єкта account.

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

//* ## 2. Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

//* ## 3. Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

// const car = {
//   registrationNumber: "GA12345",
//   brand: "Toyota",
// };

// const displayDetails = function (ownerName) {
//   console.log(
//     `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
//   );
// };

// displayDetails.call(car, "Sofia");

// //* ## 4. Що виведеться в консоль?

// const directRoute = function (to = "Chop") {
//   console.log(`${this.from} => ${to}`);
// };

// const train1 = {
//   from: "Kyiv",
//   directRoute,
// };
// const train2 = {
//   from: "Lviv",
//   directRoute,
// };

// directRoute.apply(train1, ["Vinnytsia"]); // Kyiv to Vinnytsia
// directRoute.call(train1); // Kyiv to Chop
// train2.directRoute(); // lviv to Chop
// train1.directRoute.call(train2, "Odessa"); // Lviv to Odessa

// const yourDirectRoute = directRoute.bind(train1);
// yourDirectRoute(); // Kyiv Chop
// yourDirectRoute("Kharkiv"); // Kyiv Kharkiv

// const theirDirectRoute = directRoute.bind(train2, "Poltava");
// theirDirectRoute(); // Lviv Polatava
// theirDirectRoute("Cherkasy"); // Lvlv  Poltava
// theirDirectRoute.call(train1); // Kyiv Poltava

// const anotherDirectRoute1 = directRoute.bind(train1, "Babas");
// const anotherDirectRoute2 = train1.directRoute();
// console.log(anotherDirectRoute1()); // kyiv chop
// console.log(anotherDirectRoute2()); // kyiv chop
