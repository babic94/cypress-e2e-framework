const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conduit.bondaracademy.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
    },
  },
});
