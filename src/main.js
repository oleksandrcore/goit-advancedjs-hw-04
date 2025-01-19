import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchRequest, loadMoreImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreButton = document.querySelector('.load-more');

let searchData = '';
let imgCount = 0;
let totalImages = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();

  searchData = document.querySelector('.search-input').value.trim();

  if (searchData === '') {
    iziToast.error({
      id: 'error',
      message: 'The search field cannot be empty',
      position: 'topRight',
      transitionIn: 'fadeInDown',
    });
    gallery.innerHTML = '';
  } else {
    try {
      const data = await searchRequest(searchData);
      console.log(data);

      if (data.hits.length === 0) {
        iziToast.error({
          id: 'error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          transitionIn: 'fadeInDown',
        });
        gallery.innerHTML = '';
      } else {
        gallery.innerHTML = '';
        renderGallery(data.hits);
        loadMoreButton.style.display = 'block';
        totalImages = data.totalHits;
        imgCount = data.hits.length;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
});

loadMoreButton.addEventListener('click', async event => {
  event.preventDefault();

  if (imgCount >= totalImages) {
    iziToast.error({
      id: 'error',
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
      transitionIn: 'fadeInDown',
    });
    loadMoreButton.style.display = 'none';
  } else {
    try {
      const data = await loadMoreImages(searchData);
      renderGallery(data.hits);
      imgCount += data.hits.length;

      const galleryItem = document.querySelector('.gallery-item');
      const rect = galleryItem.getBoundingClientRect();
      window.scrollBy({
        top: 2 * rect.height + 24,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
});
