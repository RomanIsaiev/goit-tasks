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

// * ## 3. Різниця між textContent i innerText. Що буде у консолі?

// const innerText = document.getElementById("container").innerText;
// const textContent = document.getElementById("container").textContent;
// console.log("innerText: ", innerText);
// console.log("textContent: ", textContent);

// * ## 4. Різниця між outerHTML i innerHTML. Що буде у консолі?

// const outerHTML = document.getElementById("container").outerHTML;
// const innerHTML = document.getElementById("container").innerHTML;
// console.log("outerHTML: ", outerHTML);
// console.log("innerHTML: ", innerHTML);

// * ## 5. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).

// const body = document.querySelector("body");
// const createText = document.createElement("p");

// const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

// createText.textContent = text;

// body.prepend(createText);

// const content = createText.textContent.split(" ");

// const result = content.map((item) => {
//   if (item.length > 8) {
//     item = `<span style="background-color: yellow;">${item}</span>`;
//   }
//   return item;
// });

// createText.innerHTML = result.join(" ");

// * ## 6. Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const numberContainer = document.querySelector(".numberContainer");

const numbersArray = [];

// for (let i = 1; i <= 100; i += 1) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;

//   if (!(randomNumber % 2)) {
//     numbersArray.push(`<div class='even'>${randomNumber}</div>`);
//   } else {
//     numbersArray.push(`<div class='odd'>${randomNumber}</div>`);
//   }
// }

// * best

// for (let i = 1; i <= 100; i += 1) {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   const key = randomNumber % 2 ? "odd" : "even";
//   const item = `<div class=${key}>${randomNumber}</div>`;
//   numbersArray.push(item);
// }

// numberContainer.innerHTML = numbersArray.join(" ");

// * ## 7. Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію `createMarkup()`, яка буде повертати розмітку. Додай розмітку на сторінку задопомогою `insertAdjacentHTML()` і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const filmsList = document.querySelector(".films-list");

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
// <li data-id="${id}">
//      <img src="${imgUrl}" alt="${title}" />
//      <p>${title}</p>
// </li>

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(films) {
  films.map((item) => {
    const { id, imgUrl, title } = item;

    const markup = `<li data-id="${id}">
                    <img src="${imgUrl}" alt="${title}" />      
                    <p>${title}</p>
                    </li>`;

    filmsList.insertAdjacentHTML("beforeend", markup);
  });

  console.log(filmsList);
}

createMarkup(films);
