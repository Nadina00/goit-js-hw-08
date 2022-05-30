// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import galleryItemTpl from '../gallery_items.hbs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//console.log(galleryItemTpl(galleryItems));

console.log(galleryItems);
const galleryCollec = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");
const galleryImage = document.querySelector(".gallery__image");


(function createMarkup() {
    const itemMarkup = galleryItems.map(galleryItemTpl).join('');
    galleryCollec.insertAdjacentHTML('beforeend', itemMarkup);
  })();



    new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
    
        