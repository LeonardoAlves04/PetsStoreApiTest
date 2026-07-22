import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,
  timeout: 30_000,
  expect: { timeout: 10_000 },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: `${(process.env.BASE_URL ?? 'https://petstore.swagger.io/v2').replace(/\/$/, '')}/`,
    extraHTTPHeaders: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    trace: 'retain-on-failure'
  },
  outputDir: 'test-results'
});
