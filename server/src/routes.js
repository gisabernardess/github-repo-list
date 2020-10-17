import { Router } from 'express';
import api from './services/api';

const routes = new Router();

routes.get('/search', async (req, res) => {
  const { topic, page } = req.query;
  const response = await api.get(`/search/repositories?q=topic:${topic}`, {
    params: {
      page,
      per_page: 5,
    },
  });
  return res.json(response.data.items);
});

routes.get('/repo', async (req, res) => {
  const { repoName } = req.query;
  const response = await api.get(`/repos/${repoName}`);
  return res.json(response.data);
});

routes.get('/user', async (req, res) => {
  const { username, page } = req.query;
  const response = await api.get(`/users/${username}/repos`, {
    params: {
      page,
      per_page: 5,
    },
  });
  return res.json(response.data);
});

export default routes;
