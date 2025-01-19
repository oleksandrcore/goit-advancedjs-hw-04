import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(imgArray) {
  const gallery = document.querySelector('.gallery');

  const imageItems = imgArray
    .map(image => {
      return `<li class="gallery-item">
              <a class="gallery-link" href="${image.largeImageURL}">
              <img
                  class="gallery-image"
                  src="${image.previewURL}"
                  data-source="${image.largeImageURL}"
                  alt="${image.tags}"
              />
              <div class="image-details">
            <div class="details-element">
              <p class="details-title">Likes</p>
              <p class="details-value">${image.likes}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Views</p>
              <p class="details-value">${image.views}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Comments</p>
              <p class="details-value">${image.comments}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Downloads</p>
              <p class="details-value">${image.downloads}</p>
            </div>
          </div>
              </a>
              </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', imageItems);

  lightbox.refresh();
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox');
