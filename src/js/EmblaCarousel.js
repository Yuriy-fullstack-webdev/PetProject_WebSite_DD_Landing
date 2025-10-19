// Зберігаємо синтаксис import, оскільки він є частиною ES Modules (сучасний JS)
import EmblaCarousel from "embla-carousel";

// Оскільки цей код буде підключено через 'defer' або 'type="module"',
// елементи DOM гарантовано існують, тому ми можемо використовувати їх безпосередньо.
const rootNode = document.querySelector(".embla");
const viewportNode = rootNode.querySelector(".embla__viewport");
const prevButtonNode = rootNode.querySelector(".embla__prev");
const nextButtonNode = rootNode.querySelector(".embla__next");

// Перевірка на наявність елементів для безпеки
if (rootNode && viewportNode && prevButtonNode && nextButtonNode) {
  // Ініціалізуємо карусель
  const embla = EmblaCarousel(viewportNode);

  // Додаємо обробники подій
  prevButtonNode.addEventListener("click", () => embla.scrollPrev(), false);
  nextButtonNode.addEventListener("click", () => embla.scrollNext(), false);
} else {
  console.error("Carousel Error: Not all required Embla elements found.");
}