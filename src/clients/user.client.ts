import type { User } from '../types/petstore';
import { BaseClient } from './base.client';

export class UserClient extends BaseClient {
  create(user: User) { return this.post('/user', user); }
  find(username: string) { return this.get(`/user/${encodeURIComponent(username)}`); }
  update(username: string, user: User) { return this.put(`/user/${encodeURIComponent(username)}`, user); }
  login(username: string, password: string) {
    return this.get(`/user/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
  }
  remove(username: string) { return this.delete(`/user/${encodeURIComponent(username)}`); }
}
