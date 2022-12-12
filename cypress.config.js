const { defineConfig } = require("cypress")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      baseUrl: 'https://development-v4.ordant.com'
      // implement node event listeners here
    },

    specPattern:'cypress/Integration/Ordant/*.feature'
   //specPattern:'cypress/Integration/Ordant/AddCompany/*.js'
    //specPattern:'cypress/*.feature'
  },
});
