import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app, { set } from '../lib/app.js';
import Weed from '../lib/models/Weed.js';

describe('chillamos', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a weed strain via POST', async () => {
    const res = await request(app)
      .post('/api/v1/weeds')
      .send({ name: '818 OG', percent: '27%', harvested: '11/10/21' });
    expect(res.body).toEqual({ id: 1, name: '818 OG', percent: '27%', harvested: '11/10/21' })
  })
})