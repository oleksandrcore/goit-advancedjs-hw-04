import axios from 'axios';

let page = 1;

const loader = document.querySelector('.loader');
const loaderWrapper = document.querySelector('.loader-wrapper');

export async function searchRequest(searchQuery) {
  const searchParams = new URLSearchParams({
    key: '45176737-eefebace9d6de0f5929b63080',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 15,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  loader.style.display = 'inline-block';
  document.querySelector('.gallery').style.display = 'none';
  document.querySelector('.load-more').style.display = 'none';

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = 'none';
    document.querySelector('.gallery').style.display = 'flex';
    page = 2;
  }
}

export async function loadMoreImages(searchQuery) {
  const searchParams = new URLSearchParams({
    key: '45176737-eefebace9d6de0f5929b63080',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: 15,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  loader.style.display = 'inline-block';

  if (loader && loaderWrapper) {
    loader.style.display = 'inline-block';
    loaderWrapper.classList.add('top-center');
  }

  document.querySelector('.load-more').style.display = 'none';

  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    if (loader && loaderWrapper) {
      loader.style.display = 'none';
      loaderWrapper.classList.remove('top-center');
    }
    document.querySelector('.load-more').style.display = 'block';
    page += 1;
  }
}
