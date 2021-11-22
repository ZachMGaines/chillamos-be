import { Router } from 'express';
import Weed from '../models/Weed';

export default Router()
  .post('/api/v1/weeds', async (req, res) => {
    try {
      const weed = await Weed.insert(req.body);
      res.send(weed)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  })

  .get('/api/v1/weeds', async (req, res) => {
    try {
      const weed = await Weed.findById(req.params.id);
      res.send(weed);
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  })