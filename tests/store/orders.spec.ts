import { orderFactory, petFactory } from '../../src/data/factories';
import { missingId, expectStatus } from '../../src/helpers/response';
import { validateSchema } from '../../src/helpers/schema-validator';
import { orderSchema } from '../../src/schemas/order.schemas';
import { test, expect } from '../../src/fixtures/api.fixture';

test.describe('Store / Orders', () => {
  test('consulta o inventário', async ({ store }) => {
    const response = await store.inventory();
    await expectStatus(response, 200);
    const inventory = await response.json();
    expect(typeof inventory).toBe('object');
  });

  test('cria, consulta e exclui um pedido', async ({ pets, store }) => {
    const pet = petFactory();
    await expectStatus(await pets.create(pet), 200);
    const order = orderFactory(pet.id);

    let response = await store.createOrder(order);
    await expectStatus(response, 200);
    validateSchema(orderSchema, await response.json());

    response = await store.findOrder(order.id);
    await expectStatus(response, 200);
    expect(await response.json()).toMatchObject({ id: order.id, petId: pet.id });

    await expectStatus(await store.removeOrder(order.id), 200);
    await pets.remove(pet.id);
  });

  test('retorna 404 ao consultar pedido inexistente', async ({ store }) => {
    await expectStatus(await store.findOrder(missingId()), 404);
  });
});
