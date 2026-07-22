import { expect, type APIResponse } from '@playwright/test';

export async function expectStatus(response: APIResponse, status: number): Promise<void> {
  expect(response.status(), await response.text()).toBe(status);
}

export const missingId = (): number => Number(`9${Date.now().toString().slice(-8)}`);
