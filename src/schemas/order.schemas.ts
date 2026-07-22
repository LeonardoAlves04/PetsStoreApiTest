import type { JSONSchemaType } from 'ajv';
import type { Order } from '../types/petstore';

export const orderSchema: JSONSchemaType<Order> = {
  type: 'object',
  properties: {
    id: { type: 'integer' }, petId: { type: 'integer' }, quantity: { type: 'integer' },
    shipDate: { type: 'string' }, status: { type: 'string', enum: ['placed', 'approved', 'delivered'] },
    complete: { type: 'boolean' }
  },
  required: ['id', 'petId', 'quantity', 'shipDate', 'status', 'complete'],
  additionalProperties: true
};
