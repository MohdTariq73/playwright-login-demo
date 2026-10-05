import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build if test.only is accidentally committed */
  forbidOnly: false,

  /* No retries */
  retries: 0,

  /* Use Playwright's default worker count */
  workers: undefined,

  /* Reporter to use */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    /* Slow down Playwright actions by 1 second */
    launchOptions: {
      slowMo: 1000,
    },

    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
  },

  /*
   * Automatically start the React application
   * before Playwright begins testing.
   */
  webServer: {
    command: 'npm run dev -- --host 0.0.0.0',
    cwd: './app',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});