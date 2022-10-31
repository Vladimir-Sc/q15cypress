import data from '../fixtures/data.json';
import { faker } from '@faker-js/faker';
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


let token
let galleryId

Cypress.Commands.add('loginBackend3', ()=>{
  cy.request({
    method: 'POST',
    url:'https://gallery-api.vivifyideas.com/api/auth/login',
    
    body:{
      "email": Cypress.env('validEmail'),
      "password": Cypress.env('validPassword')
      }
  }).then(resp=>{
          token = resp.body.access_token
          Cypress.env('token', token)
          window.localStorage.setItem('token', resp.access_token)
  })
          //window.localStorage.setItem('token', response.access_token)
          //window.localStorage.setItem('token', token)
  })


Cypress.Commands.add('loginBackend2', (email, password)=>{
    cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
            {email, password}
            ).then(resp => {
                console.log(resp)
                token = resp.body.access_token
                console.log(token)
                Cypress.env('token', token)     // save the token for use elsewhere
                console.log( Cypress.env('token'))
                window.localStorage.setItem('token', Cypress.env('token'))
              })
            //window.localStorage.setItem('token', response.access_token)
            //window.localStorage.setItem('token', token)
    })


Cypress.Commands.add('createGallery', ()=>{

  cy.request({ 
    method: 'POST',
    url: 'https://gallery-api.vivifyideas.com/api/galleries',
    headers: {
        authorization: `Bearer ${Cypress.env('token')}`
        },
    body: {
        title: "test6", 
        description: "test4",
         images: ['https://i.pinimg.com/736x/15/8f/6b/158f6b31e9b3a29de6e6683d8130b9a4--funny-raccoons-funny-animals.jpg']
        }
    }).then(resp=>{
      galleryId = resp.body.id
      Cypress.env('galleryId', galleryId)
      //console.log(resp)
      //console.log(galleryId)
    })



   // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/galleries', 
       //             { description: "gggttt",
       //               images: ["https://i.pinimg.com/736x/15/8f/6b/158f6b31e9b3a29de6e6683d8130b9a4--funny-raccoons-funny-animals.jpg"],
       //               title: "rrrfff", 
       //             }
       //     ).then(response=>{
       //         console.log(response)
               // console.log(response.statusCode)
              //  console.log(response.access_token)
              //  token = response.body.access_token
              //  window.localStorage.setItem('token', token)
                //token = response.access_token
              //  console.log(token)
       // })

        //window.localStorage.setItem('token', token)
})



//firstName, lastName, email, password, confPassword, terms
Cypress.Commands.add('registerBack', ()=>{
    cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', 
            {email: data.register.eMail, first_name: data.register.firstName, last_name: data.register.lastName, password: data.register.password, password_confirmation: data.register.confPassword, terms_and_conditions: true}
            ).its('body').then(response=>{
                console.log(response)
               // console.log(response.statusCode)
              //  console.log(response.access_token)
              //  token = response.body.access_token
              //  window.localStorage.setItem('token', token)
                //token = response.access_token
              //  console.log(token)
        })

        //window.localStorage.setItem('token', token)
})



Cypress.Commands.add('loginBackend', (email, password)=>{
    cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
            { email, password }
            )
            //.then(resp=>{
             // console.log(resp)
              //const token = resp.body.token
             // Cypress.env('token', token)
            // window.localStorage.setItem('token', response.access_token)
            // console.log(response.access_token)
            // console.log(response)
        //console.log(response)
        //window.localStorage.setItem('token', response.access_token)
        //token = response.access_token
        })

        //window.localStorage.setItem('token', token)
 // })

Cypress.Commands.add('invalidLoginBackend', (email, password)=>{
    cy.request('POST','https://gallery-api.vivifyideas.com/api/auth/login',
           {email: Cypress.env('invalidEmail1'), password: Cypress.env('invalidPassword1') })
         .then(response=>{
        //    window.localStorage.setItem('token', response.access_token)
        console.log(response)
       // console.log(window.localStorage.getItem('token'))

        //window.localStorage.setItem('token', response.access_token)
        //token = response.access_token
        })

        //window.localStorage.setItem('token', token)
})