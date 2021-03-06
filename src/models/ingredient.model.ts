import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Ingredient extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'number',
  })
  price?: number;


  constructor(data?: Partial<Ingredient>) {
    super(data);
  }
}
