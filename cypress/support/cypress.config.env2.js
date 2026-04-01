const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hieo6o',
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space/",
    fixturesFolder: "cypress/fixtures",
    specPattern: "**/*.cy.{js,jsx,ts,tsx}"
  }
});
