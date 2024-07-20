const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config); // Configura el plugin de Allure
      console.log('Allure plugin configured');
      return config; // Asegúrate de retornar el objeto config
    },
    baseUrl: 'https://www.tennis.com.co',
    specPattern: 'cypress/e2e/**/*.spec.js',
    defaultCommandTimeout: 180000, // Tiempo de espera por defecto para comandos
    pageLoadTimeout: 180000, // Tiempo máximo de espera para cargar una página
  },
});