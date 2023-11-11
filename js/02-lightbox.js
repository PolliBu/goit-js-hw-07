import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');
const itemsMarkup = createMarkup(galleryItems);

function createMarkup(items) {
    return items
         .map(({ original, preview, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        />
  </a>
</li>`)
        .join('');
}

container.insertAdjacentHTML('beforeend', itemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});

console.log(galleryItems);
