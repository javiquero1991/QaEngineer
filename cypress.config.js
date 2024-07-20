const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    setupNodeEvents(on, config) {
      // Configura aquí tus plugins, si es necesario
    },
    baseUrl: 'https://www.tennis.com.co',
    specPattern: 'cypress/e2e/**/*.spec.js',
    defaultCommandTimeout: 600000, // Aumenta el tiempo de espera de los comandos a 30 segundos
    pageLoadTimeout: 600000, // Aumenta el tiempo de espera de carga de página a 60 segundos
    pageLoadTimeout: 600000, // Aumentar el tiempo de espera a 120 segundos
  },
});
