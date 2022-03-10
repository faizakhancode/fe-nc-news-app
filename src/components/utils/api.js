import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-example-seminar-2-5.herokuapp.com/api',
});

export const getArticles = (topic) => {
  let path = '/articles';
  if (topic) path += `?topic=${topic}`;
  return newsApi.get(path).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const getSingleArticle = (id) => {
  return newsApi.get(`articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (id) => {
  return newsApi.get(`articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
