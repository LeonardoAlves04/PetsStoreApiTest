import type { Pet } from '../types/petstore';
import { BaseClient } from './base.client';

export class PetClient extends BaseClient {
  create(pet: Pet) { return this.post('/pet', pet); }
  findById(id: number) { return this.get(`/pet/${id}`); }
  update(pet: Pet) { return this.put('/pet', pet); }
  findByStatus(status: string) { return this.get(`/pet/findByStatus?status=${encodeURIComponent(status)}`); }
  remove(id: number) { return this.delete(`/pet/${id}`); }
}
