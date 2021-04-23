import menuCardTemplate from "./template.hbs";
import cards from "./menu.js";
import "./styles.css";

console.log(localStorage);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  checkboxEl: document.querySelector("#theme-switch-toggle"),
  body: document.querySelector("body"),
  menu: document.querySelector(".js-menu"),
};
/* Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

    По умолчанию тема светлая.
    При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
    Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked
у чекбокса #theme -switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
 */

refs.body.classList.add(
  localStorage.getItem("theme") === null
    ? Theme.LIGHT
    : localStorage.getItem("theme")
);
document.querySelector(".theme-switch__toggle").checked =
  localStorage.getItem("theme") === Theme.DARK;

refs.checkboxEl.addEventListener("change", onChangeTheme);
function onChangeTheme(e) {
  e.preventDefault();
  /*  console.log(e.currentTarget.checked); */
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
  } else {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);

    localStorage.setItem("theme", Theme.DARK);
  }
}

/* 
Используя шаблонизатор  создай шаблон одного элемента меню.После чего, используя шаблон,
  создай разметку всего меню по данным из menu.json и добавь в DOM в ul.js - menu.

Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть в исходном HTML.

Ниже указана разметка элемента меню которая должна получаться по шаблону (данные будут разные для каждого объекта). */

function createMenuCardMarkup(cards) {
  return cards.map(menuCardTemplate).join("");
}
console.log(createMenuCardMarkup(cards));
refs.menu.insertAdjacentHTML("afterbegin", createMenuCardMarkup(cards));
