const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  env:{
    validEmail: 'kkk5@gmail.com',
    validPassword: 'qwertyu1',
    invalidEmail1: 'kkk3211@gmail.com',
    invalidPassword: 'rrr'

  },  

    baseUrl: 'https://gallery-app.vivifyideas.com',
    watchForFileChanges: false

  },
});
