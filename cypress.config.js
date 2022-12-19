const { defineConfig } = require("cypress")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://test-suite-v4.ordant.com',
  
    setupNodeEvents(on, config) {
      

      defaultCommandTimeout: 10000
      on('file:preprocessor', cucumber())

      
      // implement node event listeners here
    },

   // specPattern:'cypress/Integration/Ordant/*.feature'
   specPattern:'cypress/Integration/Ordant/AddCompany/AddComStepdef.js'
    //specPattern:'cypress/*.feature'
  },
})
