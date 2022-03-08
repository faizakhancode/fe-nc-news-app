import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-news-example-seminar-2-5.herokuapp.com/api',
});

export const getArticles = () => {
  return newsApi.get('/articles?limit=1000').then((res) => {
    return res.data.articles;
  });
};
