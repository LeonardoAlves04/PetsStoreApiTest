import type { JSONSchemaType } from 'ajv';
import type { Pet } from '../types/petstore';

export const petSchema: JSONSchemaType<Pet> = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    category: {
      type: 'object', nullable: true,
      properties: { id: { type: 'integer' }, name: { type: 'string' } },
      required: ['id', 'name']
    },
    name: { type: 'string' },
    photoUrls: { type: 'array', items: { type: 'string' } },
    tags: {
      type: 'array', nullable: true,
      items: {
        type: 'object',
        properties: { id: { type: 'integer' }, name: { type: 'string' } },
        required: ['id', 'name']
      }
    },
    status: { type: 'string', enum: ['available', 'pending', 'sold'], nullable: true }
  },
  required: ['id', 'name', 'photoUrls'],
  additionalProperties: true
};
