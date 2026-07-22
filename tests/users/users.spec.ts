import { userFactory } from '../../src/data/factories';
import { expectStatus } from '../../src/helpers/response';
import { validateSchema } from '../../src/helpers/schema-validator';
import { userSchema } from '../../src/schemas/user.schemas';
import { test, expect } from '../../src/fixtures/api.fixture';

test.describe('Usuários', () => {
  test('cria, consulta, autentica, atualiza e exclui usuário', async ({ users }) => {
    const user = userFactory();
    await expectStatus(await users.create(user), 200);

    let response = await users.find(user.username);
    await expectStatus(response, 200);
    validateSchema(userSchema, await response.json());

    response = await users.login(user.username, user.password);
    await expectStatus(response, 200);
    expect((await response.json()).message).toContain('logged in user session');

    const updated = { ...user, firstName: 'Quality', lastName: 'Engineer' };
    await expectStatus(await users.update(user.username, updated), 200);
    response = await users.find(user.username);
    await expectStatus(response, 200);
    expect(await response.json()).toMatchObject({ firstName: 'Quality', lastName: 'Engineer' });

    await expectStatus(await users.remove(user.username), 200);
  });

  test('retorna 404 ao consultar usuário inexistente', async ({ users }) => {
    await expectStatus(await users.find(`inexistente_${Date.now()}`), 404);
  });

  test('retorna erro ao excluir usuário inexistente', async ({ users }) => {
    await expectStatus(await users.remove(`inexistente_${Date.now()}`), 404);
  });
});
