const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-platformservice.ugdevops.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportFilename": "test-report",
      "reportDir": "./reports",
      "overwrite": false
    },
  },
});
