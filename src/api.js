const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const URL = 'http://localhost:3000/api';

const getNews = (subject) => {
  return fetch(`${URL}/${subject}`, params)
    .then((res) => res.json())
    .catch((err) => {
      console.error('Ocorreu um erro', err);
    });
};

const getNewsById = (subject, id) => {
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((res) => res.json())
    .catch((err) => {
      console.error('Ocorreu um erro', err);
    });
};

const api = {
  getNews,
  getNewsById,
};

export default api;
