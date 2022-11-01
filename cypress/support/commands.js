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
let userId


Cypress.Commands.add('addComment', ()=>{
  cy.request({
    method: 'POST',
    url:'https://gallery-api.vivifyideas.com/api/comments',
    headers: {
      authorization: `Bearer ${Cypress.env('token')}`
      },
    body:{
      "gallery_id": 1065,
      "body": "spam komentara preko backend-a ^_^"
      }
    }).then(resp=>{
        console.log(resp.body[0].gallery_id)
        console.log(resp)
        galleryId = resp.body.gallery_id
        Cypress.env('galleryId', galleryId)
  })
  
})


Cypress.Commands.add('loginBackend2', (email, password)=>{
    cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
            {email, password}
            ).then(resp => {
                console.log(resp)
                token = resp.body.access_token
                console.log(token)
                Cypress.env('token', token)    
                console.log( Cypress.env('token'))
                window.localStorage.setItem('token', Cypress.env('token'))
              })
})


Cypress.Commands.add('loginBackend1', (email, password)=>{
  cy.request({ 
      method: 'POST',
      url: 'https://gallery-api.vivifyideas.com/api/auth/login',
      body: {email, password},
      failOnStatusCode: false
  }).then(resp=>{
    console.log(resp)
                token = resp.body.access_token
                console.log(token)
                Cypress.env('token', token)     
                console.log( Cypress.env('token'))
                window.localStorage.setItem('token', Cypress.env('token'))
  })
})


Cypress.Commands.add('createGallery', ()=>{
    cy.request({ 
        method: 'POST',
        url: 'https://gallery-api.vivifyideas.com/api/galleries',
      headers: { authorization: `Bearer ${Cypress.env('token')}`},
      body: {
        title: "test6", 
        description: "test4",
         images: ['https://i.pinimg.com/736x/15/8f/6b/158f6b31e9b3a29de6e6683d8130b9a4--funny-raccoons-funny-animals.jpg']}
    }).then(resp=>{
      galleryId = resp.body.id
      Cypress.env('galleryId', galleryId)
      //console.log(resp)
      //console.log(galleryId)
    })
})


//firstName, lastName, email, password, confPassword, terms
Cypress.Commands.add('registerBack', ()=>{
            cy.request({ 
                  method: 'POST',
                  url: 'https://gallery-api.vivifyideas.com/api/auth/register',
                  body: {
                    first_name: data.register.firstName, 
                    last_name: data.register.lastName, 
                    email: data.register.email, 
                    password: data.register.passwrod, 
                    password_confirmation: data.register.confpassword, 
                    terms_and_conditions: true         
                    }
                }).then(response =>{

                console.log(response)
                console.log(response.body.user_id)
                token = response.body.access_token
                userId = response.body.user_id
                console.log(token)
                Cypress.env('token', token)
                Cypress.env('userId', userId)
                window.localStorage.setItem('token', Cypress.env('token'))

                })

    // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', 
    //           {first_name: data.register.firstName, 
    //            last_name: data.register.lastName, 
    //            email: data.register.email, 
    //            password: data.register.password, 
    //            password_confirmation: data.register.confPassword, 
    //            terms_and_conditions: true}
    //         ).then(response=>{
    //             console.log(response)
    //             token = response.body.access_token
    //             console.log(token)
    //             Cypress.env('token', token)
    //             window.localStorage.setItem('token', Cypress.env('token'))
    //             console.log(response)
    //           })
})


Cypress.Commands.add('invalidLoginBackend', (email, password)=>{
    cy.request('POST','https://gallery-api.vivifyideas.com/api/auth/login',
           {email: Cypress.env('invalidEmail1'), password: Cypress.env('invalidPassword1') })
          .then(response=>{
                console.log(response)
                })
})