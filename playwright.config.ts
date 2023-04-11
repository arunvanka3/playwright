// import { defineConfig, devices } from '@playwright/test';

import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"],
  use:{
    headless: false,
    screenshot:"only-on-failure",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [["dot"],["json",{
    outputFile: "jasonReports/jsonReport.json"
  }], ["html",{
    open: "never"
  }]]
}

export default config;