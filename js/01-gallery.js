import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');
const itemsMarkup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', itemsMarkup);

function createMarkup(items) {
    return items
         .map(({ original, preview, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
  </a>
</li>`)
        .join('');
}

container.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
}

console.log(galleryItems);
