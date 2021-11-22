import pool from '../utils/pool';

export default class Weed {
  id;
  name;
  percent;
  harvested;

  constructor(row) {
    this.id = Number(row.id);
    this.name = row.name;
    this.percent = row.percent;
    this.harvested = row.harvested
  }

  static async insert({ name, percent, harvested }) {
    const { rows } = await pool.query(
      'INSERT INTO weeds (name, percent, harvested) VALUES ($1, $2, $3) RETURNING *', [name, percent, harvested]
    );
    return new Weed(rows[0]);
  }



}