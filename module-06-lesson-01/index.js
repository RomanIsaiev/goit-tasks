//* ## 1. Базові операції з DOM
// 1. отримай body елемент і виведи його в консоль; ✅
// 2. отримай елемент id="title" і виведи його в консоль; ✅
// 3. отримай елемент class="list" і виведи його в консоль; ✅
// 4. отримай всі елементи з атрибутом data-topic і виведи їх в консоль; ✅
// 5. отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль; ✅
// 5. отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль; ✅
// 7. який елемент є сусідом для h1? Знайти і виведи його в консоль; ✅
// 8. по тегу h3 знайти всі заголовки та виведи їх у консоль; ✅
// 9. для кожного елмента h3 додай class="active", який змінить колів заголовка на червоний колір ✅
// 10. знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль; ✅
// 11. додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим ✅
// 12. у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!". ✅
// 13. створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль; ✅
// 14. додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним; ✅
// 15. знайти в документі заголовок, який має class="completed" і виведи його в консоль; ✅
// 16. видали елемент li в якому знаходиться заголовок, який має class="completed" ✅
// 17. після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)" ✅
// 18. додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку ✅
// 19. зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML() ✅
// 20. очисти список ✅

// const body = document.querySelector("body");
// const title = document.querySelector("#title");
// const list = document.querySelector(".list");
// const dataTopics = document.querySelectorAll("[data-topic]");
// console.log(body);
// console.dir(body);
// console.log(title);
// console.dir(title);
// console.log(list);
// console.dir(list);
// console.log(dataTopics);
// console.dir(dataTopics);
// console.log(dataTopics.forEach((item) => console.log(item)));
// console.log("first element", list.firstElementChild);
// console.log("last child", list.lastElementChild);
// console.log("first element 2", dataTopics[0]);
// console.log("last elemnent 2", dataTopics[dataTopics.length - 1]);

// console.log(title.nextElementSibling);

// const h3 = document.querySelectorAll("h3");
// console.log(h3.forEach((item) => console.log(item)));
// console.log(h3.forEach((item) => item.classList.add("active")));
// const navigation = document.querySelector("[data-topic='navigation']");
// navigation.setAttribute("style", "background-color: yellow");
// const navP = navigation.querySelector("p");
// navP.textContent = "Я змінив тут текст!";
// const currentTopic = "manipulation";
// const manip = document.querySelector(`[data-topic='${currentTopic}']`);
// console.log(manip);
// manip.setAttribute("style", "background-color: lightblue");

// const titleCompleted = document.querySelector(".completed");

// console.log(titleCompleted);

// console.log(
//   dataTopics.forEach((item) => {
//     if (item.querySelector("h3").classList.contains("completed")) {
//       item.remove();
//     }
//   })
// );

// const newP = document.createElement("p");
// newP.textContent = "Об'єктна модель документа (Document Object Model)";

// title.after(newP);

// const newItemLi = document.createElement("li");
// const newItemH3 = document.createElement("h3");
// const newItemP = document.createElement("p");

// newItemH3.textContent = "Властивість innerHTML";
// newItemP.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// newItemLi.appendChild(newItemH3);
// newItemLi.appendChild(newItemP);

// const newItem = `
// <li>
// <h3>Властивість innerHTML</h3>
// <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
// </li>
// `;

// list.append(newItemLi);

// list.insertAdjacentHTML("beforeend", newItem);

// list.innerHTML = "";

//* ## 2. Вам надано кілька масивів з різними фруктами (назва масиві вказує на те, куди потрібно помістити елементи відносно ul). `Створи` html-елемент списку і `додай` його у розмітку. Попрактикуйся з методами `append`, `prepend`, `after`, `before` заповнивши ними список елементами з масивів. Для зручності створи допоміжну функцію `elementsOfIngridients`, яка повертатиме масив елементів (масив з лішками).

// const appendFruitList = ["apple🍎", "banana🍌"];
// const prependFruitList = ["grapes🍇", "orange🍊"];
// const beforeFruitList = ["strawberry🍓", "cherry🍒"];
// const afterFruitList = ["peach🍑", "kiwi🥝"];

// const body = document.querySelector("body");
// const createList = document.createElement("ul");

// body.prepend(createList);
// const fruitList = createList;

// function elementsOfIngredients(fruits) {
//   return fruits.map((fruit) => {
//     const li = document.createElement("li");
//     li.textContent = fruit;
//     return li;
//   });
// }

// const appendItems = elementsOfIngredients(appendFruitList);
// const prependItems = elementsOfIngredients(prependFruitList);
// const beforeItems = elementsOfIngredients(beforeFruitList);
// const afterItems = elementsOfIngredients(afterFruitList);

// appendItems.forEach((item) => fruitList.append(item));
// prependItems.forEach((item) => fruitList.prepend(item));
// beforeItems.forEach((item) => fruitList.before(item));
// afterItems.forEach((item) => fruitList.after(item));
