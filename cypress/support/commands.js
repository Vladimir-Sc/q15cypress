// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginBackend', ()=>{
    cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
            {email: "kkk5@gmail.com", password: "qwertyu1"}
            ).its('body').then(response=>{
            window.localStorage.setItem('token', response.access_token)
        //console.log(response)
        //window.localStorage.setItem('token', response.access_token)
        //token = response.access_token
        })

        //window.localStorage.setItem('token', token)

})