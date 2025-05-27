const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: false,
  },
  video: true,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: false,
    env: {
      staging_url: "https://www.facebook.com",
      production_url: "https://www.instagram.com",
      orange_url: "https://opensource-demo.orangehrmlive.com/",
      username: "abcdef",
      agoda_url: "https://www.agoda.com",
      amazon_url: "https://www.amazon.com",
      youtube_url: "https://www.youtube.com",
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    defaultCommandTimeout: 5000,
  },
});
