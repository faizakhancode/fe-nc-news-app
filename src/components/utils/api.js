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

export const getUsers = () => {
  return newsApi.get('/users').then(({ data }) => {
    return data.users;
  });
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.articles;
    });
};
