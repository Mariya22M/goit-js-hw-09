import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Масив даних із зображеннями
const images = [
  {
    preview: "images/small-image1.jpg",
    original: "images/large-image1.jpg",
    description: "Image 1 description",
  },
  {
    preview: "images/small-image2.jpg",
    original: "images/large-image2.jpg",
    description: "Image 2 description",
  },
  {
    preview: "images/small-image3.jpg",
    original: "images/large-image3.jpg",
    description: "Image 3 description",
  },
];

// Отримуємо посилання на контейнер для галереї
const galleryContainer = document.querySelector('.gallery');

// Створюємо розмітку галереї
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join('');

// Додаємо розмітку в DOM
galleryContainer.innerHTML = galleryMarkup;

// Ініціалізація бібліотеки SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
