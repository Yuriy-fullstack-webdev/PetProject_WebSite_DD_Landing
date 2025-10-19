const buttons = document.querySelectorAll(".nav-item__button");
const audio = document.querySelector(".nav-sound--hover");
let audioEnabled = false;

/** Аудіо */
if (!audio) {
  console.error("Audio element with class '.nav-sound--hover' not found. Sound feature disabled.");
} else {
  document.addEventListener("click", () => {
    audioEnabled = true;
  }, { once: true });

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      if (audioEnabled) {
        audio.currentTime = 0;
        audio.volume = 0.1;
        audio.play().catch((error) => {
          console.warn("Audio playback initiated by mouseenter failed:", error);
        });
      }
    });

    button.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
}

/** Навігація */
const navList = document.querySelectorAll(".nav-item");
const cardList = document.querySelectorAll('.card[role="tabpanel"]');

navList.forEach((item) =>
  item.addEventListener("click", () => {
    navList.forEach((navItem) => {
      navItem.classList.remove("nav-item--activ");
    });
    item.classList.add("nav-item--activ");
  })
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // 1. Скидання УСІХ кнопок: Робимо їх неактивними
    buttons.forEach((otherButton) => {
      otherButton.setAttribute("aria-selected", "false");
      otherButton.setAttribute("tabindex", "0");
    });

    // 2. Активація натиснутої кнопки: Робимо ЇЇ активною
    // Встановлюємо aria-selected в 'true' (активно) і tabindex в '-1'
    button.setAttribute("aria-selected", "true");
    button.setAttribute("tabindex", "-1");

    const actibTabId = button.id;

    cardList.forEach((card) => {
      card.setAttribute("hidden", "");
      card.setAttribute("tabindex", "-1");
      let cardId = card.getAttribute("aria-labelledby");

      // Показуємо картку, що відповідає натиснутій кнопці
      if (cardId === actibTabId) {
        card.removeAttribute("hidden");
        card.setAttribute("tabindex", "0");
      }
    });
  });
});