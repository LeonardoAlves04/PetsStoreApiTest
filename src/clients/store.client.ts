import type { Order } from '../types/petstore';
import { BaseClient } from './base.client';

export class StoreClient extends BaseClient {
  inventory() { return this.get('/store/inventory'); }
  createOrder(order: Order) { return this.post('/store/order', order); }
  findOrder(id: number) { return this.get(`/store/order/${id}`); }
  removeOrder(id: number) { return this.delete(`/store/order/${id}`); }
}
