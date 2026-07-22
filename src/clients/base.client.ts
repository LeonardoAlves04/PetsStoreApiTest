import type { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseClient {
  constructor(protected readonly request: APIRequestContext) {}

  private relative(path: string): string { return path.replace(/^\//, ''); }

  protected get(path: string): Promise<APIResponse> { return this.request.get(this.relative(path)); }
  protected post(path: string, data?: unknown): Promise<APIResponse> { return this.request.post(this.relative(path), { data }); }
  protected put(path: string, data?: unknown): Promise<APIResponse> { return this.request.put(this.relative(path), { data }); }
  protected delete(path: string): Promise<APIResponse> { return this.request.delete(this.relative(path)); }
}
