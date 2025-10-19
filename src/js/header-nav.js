// ====================================================================
// 1. ЛОГІКА МОБІЛЬНОГО МЕНЮ (Hamburger)
// ====================================================================

// Видаляємо анотації типів (<HTMLButtonElement>, : NodeListOf<HTMLElement> тощо)
const button = document.querySelector(".button");
const menu = document.querySelector(".menu-mob");

const icons = button ? button.querySelectorAll(".icon") : null;

let openIcon = null;
let closeIcon = null;

if (icons && icons.length >= 2) {
  // Проходимо по знайденим іконкам, щоб визначити, яка з них яка
  icons.forEach((icon) => {
    if (icon.classList.contains("icon-hamburger--activ")) {
      openIcon = icon;
    } else {
      closeIcon = icon;
    }
  });
}

// 3. Головна перевірка на наявність всіх елементів перед ініціалізацією логіки
if (button && menu && openIcon && closeIcon) {
  // Функція, яка перемикає стан меню та іконок
  const toggleMenu = () => {
    menu.classList.toggle("menu-mob--activ");
    // Оскільки ми перевірили openIcon та closeIcon на існування, можемо
    // безпечно використовувати їх тут без знака '!'
    openIcon.classList.toggle("icon-hamburger--activ");
    closeIcon.classList.toggle("icon-hamburger--activ");
  };

  // 4. Обробник події для кнопки
  button.addEventListener("click", toggleMenu);

  // 5. Обробник події для закриття меню при кліку поза ним
  const closeMenuOnOutsideClick = (event) => {
    const target = event.target;

    if (
      menu.classList.contains("menu-mob--activ") &&
      !menu.contains(target) && // Перевіряємо, що клік не всередині меню
      !button.contains(target) // Перевіряємо, що клік не на кнопці
    ) {
      toggleMenu();
    }
  };

  document.addEventListener("click", closeMenuOnOutsideClick);
} else {
  // Виведення помилки, якщо якийсь елемент не було знайдено
  console.error(
    "JS Error: Failed to initialize hamburger menu. One or more required elements (button, menu, or two icons) were not found."
  );
}

// ====================================================================
// 2. ЛОГІКА ЗМІНИ СТИЛІВ HEADER ПРИ СКРОЛІ (Header Scroll Logic)
// ====================================================================

// Цей блок містить логіку, яка загорнута у 'DOMContentLoaded',
// що не є необхідним, якщо весь скрипт підключений з 'defer'.

// Ми видаляємо обгортку DOMContentLoaded, оскільки атрибут 'defer'
// забезпечує, що скрипт виконається лише після повної побудови DOM.

const header = document.querySelector(".header");
if (!header) {
  console.error("Елемент з класом .header не знайдений. Скрипт зупинено.");
  // Використовуємо 'return' тут, щоб запобігти подальшому виконанню цього блоку
} else {
  const rootStyles = getComputedStyle(document.documentElement);
  const headerHeightValue = rootStyles.getPropertyValue("--header-height").trim();
  const scrollThreshold = parseFloat(headerHeightValue) || 118; // 118 як запасний варіант

  function handleScroll() {
    if (window.scrollY >= scrollThreshold) {
      // Оскільки ми перевірили 'header' на існування, можемо використовувати його без '!'
      header.classList.add("scrolled-bg");
    } else {
      header.classList.remove("scrolled-bg");
    }
  }

  window.addEventListener("scroll", handleScroll);
  // Викликаємо функцію один раз, щоб встановити правильний клас при завантаженні сторінки
  handleScroll();
}