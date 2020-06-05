import { Request, Response } from 'express';
import { connection as knex } from '../database/connection';

export class ItemController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.23:3333/uploads/${item.image}`,
      };
    });

    return response.status(200).json(serializedItems);
  }
}
