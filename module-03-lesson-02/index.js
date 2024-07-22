//* ### 1. Напишіть функцію під назвою `displayName()`, яка приймає об’єкт як аргумент і виводить ім’я та прізвище людини. Використовуйте деструктуризацію об’єкта в аргументі функції. А також використовуйте шаблонні рядки при друку імені та прізвища.

// function displayName({ first, last } = displayName) {
//   return `${first} ${last}`;
// }

// console.log(
//   displayName({
//     first: "Elon",
//     last: "Musk",
//     twitter: "@elonmusk",
//     company: "Space X",
//   })
// );

//* ### 2. Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю `fullName`, замість `firstName` та `lastName`. Викоритовуй `rest` оператор.

// function transformUsername({ id, firstName, lastName, email } = user) {
//   return { id, fullName: `${firstName} ${lastName}`, email };
// }

// function transformUsername(user) {
//   const { firstName, lastName, ...rest } = user;
//   return { ...rest, fullName: `${firstName} ${lastName}` };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//   })
// ); // { id: 1, fullname: 'Jacob Mercer', email: 'j.mercer@mail.com'}
