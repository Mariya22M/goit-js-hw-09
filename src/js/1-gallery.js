
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryItems = [
  {
    preview: 'https://placekitten.com/200/300',
    original: 'https://placekitten.com/800/1200',
    description: 'Cute Cat 1',
  },
  {
    preview: 'https://placekitten.com/201/300',
    original: 'https://placekitten.com/801/1200',
    description: 'Cute Cat 2',
  },
  {
    preview: 'https://placekitten.com/202/300',
    original: 'https://placekitten.com/802/1200',
    description: 'Cute Cat 3',
  },
];


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');
galleryContainer.innerHTML = galleryMarkup;


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',  
  captionPosition: 'bottom', 
  captionDelay: 250, 
});
