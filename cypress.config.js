const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.tennis.com.co',
    specPattern: 'cypress/e2e/**/*.spec.js',
    defaultCommandTimeout: 600000, 
    pageLoadTimeout: 600000, 
    pageLoadTimeout: 600000, 
  },
});
