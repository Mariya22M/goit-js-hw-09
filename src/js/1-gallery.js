import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
    {
        preview: 'small-image-1.jpg', 
        original: 'large-image-1.jpg',
        description: 'Description 1',
    },
    {
        preview: 'small-image-2.jpg',
        original: 'large-image-2.jpg',
        description: 'Description 2',
    },
    
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img 
                class="gallery-image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>
    </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250, 
});
