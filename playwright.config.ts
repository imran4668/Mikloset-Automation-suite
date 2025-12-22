import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

// 1. FIXED: Define __dirname for ES Modules (Fixes ReferenceError)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  paths: ['E2E/features/dashboard_Common.feature'],
  steps: [
    'E2E/steps/*.ts',
    'E2E/pageFixture/page.fIxture.ts'
  ],
});

export default defineConfig({
  testDir,

  // 3. FIXED: Increase Global Timeout (Fixes "30000ms exceeded")
  // Setting to 60 seconds (60000ms) or 2 minutes (120000ms)
  timeout: 60 * 1000,

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // Optional: Reduce workers if your PC is slow/laggy during tests
  workers: 1, 

  reporter: 'html',

  use: {
    // baseURL:"https://dev.mikloset.com/betatesters/FFI",
    //baseURL: "http://192.168.2.47:3000/betatesters/FFI",
    // baseURL: "https://www.mikloset.com",
    screenshot: 'only-on-failure',
    headless:false,
    // Action timeout (for clicks, fills)
    actionTimeout: 15 * 1000,

    // Navigation timeout (for page.goto)
    navigationTimeout: 30 * 1000,

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});