import { LaunchOptions } from '@playwright/test';
import 'dotenv/config';

const browserOptions: LaunchOptions = {
  //* To change the variable headles, use: "export HEAD=true" to run test in terminal or "export HEAD=false" to do not.
  headless: process.env.CI ? true : process.env.HEAD === 'true',
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: 'https://playwright.dev',
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: 'https://catfact.ninja/',
};
