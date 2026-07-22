import { petFactory } from '../../src/data/factories';
import { missingId, expectStatus } from '../../src/helpers/response';
import { validateSchema } from '../../src/helpers/schema-validator';
import { petSchema } from '../../src/schemas/pet.schemas';
import { test, expect } from '../../src/fixtures/api.fixture';

test.describe('Pets', () => {
  test('cria, consulta, atualiza e exclui um pet', async ({ pets }) => {
    const pet = petFactory();
    let response = await pets.create(pet);
    await expectStatus(response, 200);
    validateSchema(petSchema, await response.json());

    response = await pets.findById(pet.id);
    await expectStatus(response, 200);
    expect((await response.json()).name).toBe(pet.name);

    const updated = { ...pet, name: 'Pet Atualizado', status: 'sold' as const };
    response = await pets.update(updated);
    await expectStatus(response, 200);
    expect(await response.json()).toMatchObject({ id: pet.id, name: 'Pet Atualizado', status: 'sold' });

    await expectStatus(await pets.remove(pet.id), 200);
  });

  test('lista pets por status válido', async ({ pets }) => {
    const response = await pets.findByStatus('available');
    await expectStatus(response, 200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
  });

  test('retorna 404 ao consultar pet inexistente', async ({ pets }) => {
    await expectStatus(await pets.findById(missingId()), 404);
  });
});
