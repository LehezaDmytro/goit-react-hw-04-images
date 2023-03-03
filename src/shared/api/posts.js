import axios from 'axios';

export const getPost = (searchRequest, page = 1, perPage = 12) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchRequest}&page=${page}&key=33070730-25f95ed9e03123c99fcb559cb&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
};
