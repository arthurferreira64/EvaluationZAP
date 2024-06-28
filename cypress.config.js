const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000, // 10 seconds global timeout
  pageLoadTimeout: 5000, // Temps d'attente en millisecondes

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
