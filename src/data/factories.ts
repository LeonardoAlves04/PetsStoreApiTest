import { faker } from '@faker-js/faker';
import type { Order, Pet, User } from '../types/petstore';

const uniqueId = (): number =>
  Number(`${Date.now().toString().slice(-9)}${faker.number.int({ min: 10, max: 99 })}`);

export const petFactory = (overrides: Partial<Pet> = {}): Pet => ({
  id: uniqueId(),
  category: { id: faker.number.int({ min: 1, max: 10 }), name: faker.animal.type() },
  name: faker.animal.petName(),
  photoUrls: [faker.image.url()],
  tags: [{ id: faker.number.int({ min: 1, max: 100 }), name: faker.word.noun() }],
  status: 'available',
  ...overrides
});

export const userFactory = (overrides: Partial<User> = {}): User => {
  const username = `qa_${faker.string.alphanumeric(12).toLowerCase()}`;
  return {
    id: uniqueId(),
    username,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 14 }),
    phone: faker.phone.number(),
    userStatus: 1,
    ...overrides
  };
};

export const orderFactory = (petId: number, overrides: Partial<Order> = {}): Order => ({
  id: uniqueId(),
  petId,
  quantity: faker.number.int({ min: 1, max: 5 }),
  shipDate: faker.date.soon().toISOString(),
  status: 'placed',
  complete: false,
  ...overrides
});
