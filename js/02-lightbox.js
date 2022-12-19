import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryCards = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryCards );

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>`;
            })
            .join("");
};

const lightbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionPosition': "bottom",'captionDelay': '250'});