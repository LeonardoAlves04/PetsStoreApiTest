import { test as base } from '@playwright/test';
import { PetClient } from '../clients/pet.client';
import { StoreClient } from '../clients/store.client';
import { UserClient } from '../clients/user.client';

type ApiFixtures = { pets: PetClient; users: UserClient; store: StoreClient };

export const test = base.extend<ApiFixtures>({
  pets: async ({ request }, use) => use(new PetClient(request)),
  users: async ({ request }, use) => use(new UserClient(request)),
  store: async ({ request }, use) => use(new StoreClient(request))
});

export { expect } from '@playwright/test';
