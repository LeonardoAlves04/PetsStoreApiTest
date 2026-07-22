import type { JSONSchemaType } from 'ajv';
import type { User } from '../types/petstore';

export const userSchema: JSONSchemaType<User> = {
  type: 'object',
  properties: {
    id: { type: 'integer' }, username: { type: 'string' }, firstName: { type: 'string' },
    lastName: { type: 'string' }, email: { type: 'string' }, password: { type: 'string' },
    phone: { type: 'string' }, userStatus: { type: 'integer' }
  },
  required: ['id', 'username', 'firstName', 'lastName', 'email', 'password', 'phone', 'userStatus'],
  additionalProperties: true
};
