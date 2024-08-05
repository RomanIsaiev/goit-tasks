//* ## 1. Що буде у консолі?

// const parent = {
//   name: "Luce",
//   age: 35,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Bob";
// child.age = 7;

// console.log(child.name); // ? // bob
// console.log(child.age); // ? 7
// console.log(child.heritage); // ? Irish

//* ## 2. Напиши клас `Client` який створює об'єкт з властивостями login i email.Оголоси приватні властивості #login #email, доступ до яких зроби через геттер і сеттер login/email

// class Client {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   getLogin() {
//     return this.#login;
//   }

//   setLogin(newLogin) {
//     return (this.#login = newLogin);
//   }

//   getEmail() {
//     return this.#email;
//   }

//   setEmail(newEmail) {
//     return (this.#email = newEmail);
//   }
// }

// const mango = new Client({
//   login: "Sunshine",
//   email: "dogmail@gmail.com",
// });

// console.log(mango.getEmail());
// console.log(mango.setEmail("monitoring@gmail.com"));

//* ## 3. Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

//* #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)
//* ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення і "чек".
// - `markAsPaid`() - позначає замовлення як оплачене
//* ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

//* #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// class Order {
//   #tableNumber;
//   #items;
//   #isPaid;

//   constructor(tableNumber, items, isPaid = false) {
//     this.#tableNumber = tableNumber;
//     this.#items = items;
//     this.#isPaid = isPaid;
//   }

//   calculateTotal() {
//     const total = this.#items.reduce((acc, item) => {
//       return (acc += item.price);
//     }, 0);

//     const itemsString = this.#items
//       .map((item) => `${item.name} - ${item.price}`)
//       .join(`\n`);

//     return `
// Table ${this.#tableNumber}
// Items:
// ${itemsString}
// Total: ${total}
// Status: ${this.#isPaid ? "Paid" : "Not paid"}
//     `;
//   }

//   markAsPaid() {
//     this.#isPaid = true;
//     return this.#isPaid;
//   }

//   getItems() {
//     return this.#items;
//   }
// }

// class MenuItem {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// const pizza = new MenuItem("Pizza", 10);
// const salad = new MenuItem("Salad", 5);
// const burger = new MenuItem("Burger", 8);
// const fries = new MenuItem("Fries", 3);
// const soda = new MenuItem("Soda", 2);

// const order1 = new Order(3, [pizza, salad]);
// const order2 = new Order(5, [burger, fries, soda]);

// console.log(order1);
// console.log(order1.getItems());

// console.log(order1.calculateTotal());

// /*
// Table 3
// Items:
// Pizza - 10
// Salad - 5
// Total: 15
// Status: Not paid
// */

// order2.markAsPaid();
// console.log(order2.isPaid); // Output: true

//* ## 4.Практика наслідування у класах.
//* #### Cтворіть клас `Person`, який містить наступні властивості:
// - `name` - ім'я людини;
// - `age`- вік людини;
// - `gender` - стать людини;
// - `email`- електронна пошта людини.
//* ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.

//* #### Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
// - salary - зарплата співробітника;
// - department - відділ, в якому працює співробітник.
//* ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// const user = new Person("Bob", 22, "male", "bobik22@gmail.com");

// console.log(user);

// class Employee extends Person {
//   constructor(name, age, gender, email, salary, departament) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.departament = departament;
//   }

//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//       departament: this.departament,
//     };
//   }
// }

// const worker = new Employee(
//   "Bob",
//   22,
//   "male",
//   "bobik22@gmail.com",
//   2000,
//   "New York"
// );

// console.log(worker.getEmployeeDetails());

//* ## 5. Вам потрібно розробити систему керування бібліотекою. Система має включати класи для книг, користувачів та бібліотеки, з можливістю взаємодії між ними.

//* #### 1. Клас `Book` має мати наступні властивості:
// - Назва книги (`title`)
// - Автор книги (`author`)
// - Статус наявності (`available`) (булевий тип даних, true - якщо книга є в наявності, false - якщо книга взята користувачем)
//* ##### Клас має також мати методи:
// - `getDetails()` - повертає рядок з деталями книги в форматі "Назва автора (Рік видання)"
// - `toggleAvailability()` - змінює статус наявності книги з true на false або навпаки.

//* #### 2. Клас `User` має мати наступні властивості:
// - Повне ім'я користувача (`fullName`)
// - Масив книг, які користувач взяв у бібліотеці (`books`)
//* ##### Клас має також мати методи:
// - `getDetails()` - повертає об`єкт з деталями користувача
// - `borrowBook(book)` - додає книгу в масив книг користувача, якщо книга вільна (available === true) та повертає повідомлення про успішне позичення, або повідомлення про неможливість позичити книгу, якщо вона вже взята.

//* #### 3. Клас `Library` має мати наступні властивості:
// - Масив всіх книг в бібліотеці (`books`)
// - Масив зареєстрованих користувачів (`users`)
//* ##### Клас має також мати методи:
// - `addBook(book)` - додає книгу до масиву книг бібліотеки
// - `removeBook(book)` - видаляє книгу з масиву книг бібліотеки
// - `addUser(user)` - додає користувача до масиву зареєстрованих користувачів бібліотеки
// - `removeUser(user)` - видаляє користувача з масиву зареєстрованих користувачів бібліотеки
// - `findAvailableBooks()` - повертає масив книг, які є в наявності (available === true)
// - `findUserBooks(user)` - повертає масив книг, взятих користувачем (user), якщо користувач зареєстрований, або повідомлення про незареєстрованого користувача, якщо користувач не знайдений.

class Book {
  constructor({ title, author, available = false }) {
    this.title = title;
    this.author = author;
    this.available = available;
  }

  getDetails() {
    return `${this.title} - ${this.author}`;
  }

  toggleAvailability() {
    this.available = true;
  }
}

class User {
  constructor(fullName, books) {
    this.fullName = fullName;
    this.books = books;
  }

  getDetails() {
    return this.fullName;
  }

  borrowBook(book) {}
}

class Library {
  constructor(books = [], users) {
    this.books = books;
    this.users = users;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {}

  addUser(user) {}

  removeUser(user) {}

  findAvailableBooks() {}

  findUserBooks(user) {}
}

// Створення книг
const book1 = new Book({
  title: "Harry Potter and the Philosopher's Stone",
  author: "Joanne Rowling",
});
const book2 = new Book({
  title: "The Hobbit",
  author: "John Ronald Reuel Tolkien",
});
const book3 = new Book({
  title: "The Clean Coder",
  author: "Robert C. Martin",
});

// Створення користувачів
const user1 = new User("Ethan Anderson");
const user2 = new User("Olivia Johnson");

// Створення бібліотеки
const library = new Library();

// Додавання книг до бібліотеки
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library.books);

// Додавання користувачів до бібліотеки
library.addUser(user1);
library.addUser(user2);

// Позичення книг
user1.getDetails();

user1.borrowBook({
  title: "The Fault in Our Stars",
  author: "John Green",
});
user1.borrowBook(book1);

user1.getDetails();

// Пошук книг які позичив користувач
library.findUserBooks("Sofia Protsiv");
library.findUserBooks("Ethan Anderson");

// Пошук книг які ще доступні
library.findAvailableBooks();
