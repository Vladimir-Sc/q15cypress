
import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'

let token;

describe('Login backend', () => {
    before('login with backend', () => {
        cy.visit('/login')
        // cy.request({
        //     method: 'POST',
        //     url:'https://gallery-api.vivifyideas.com/api/auth/login',
            
        //     body:{
        //       "email": data.loginValid.email,
        //       "password": data.loginValid.password
        //       }
        //     }).then(resp=>{
        //                 token = resp.body.access_token
        //                 Cypress.env('token', token)
        //                 window.localStorage.setItem('token', token)
        //         })

        //     })


        //cy.visit('/login')
       cy.loginBackend2(data.loginValid.email, data.loginValid.password)
        //token = Cypress.env('token')
       // console.log(Cypress.env('token'))

        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
        //             {email: data.loginValid.email, password: data.loginValid.password}
        //            ).then(resp=>{
        //            token = resp.body.access_token
        //            Cypress.env('token', token)
        //            window.localStorage.setItem('token', token)
        //             console.log(resp)
        //             console.log(resp.body.access_token)
        //             console.log(token)
        //             console.log(token)
        //             console.log(Cypress.env('token'))
             })
            
        //cy.loginBackend('kkk5@gmail.com', 'qwertyu1')
        //cy.loginBackend(Cypress.env('validEmail'), Cypress.env('validPassword'))
     //   cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
      //              {email: "kkk5@gmail.com", password: "qwertyu1"}
      //             ).its('body').then(response=>{
            //console.log(response)
            //window.localStorage.setItem('token', response.access_token)
         //   token = response.access_token
       //     })
    //    })

        // beforeEach('login with backend', () => {
        //         cy.loginBackend(Cypress.env('validEmail'), Cypress.env('validPassword'))
            // })

   // beforeEach('set token in local storage', ()=>{
        //window.localStorage.setItem('token', token)
   // })
    
    it.only('check if we are logged', ()=>{
        cy.visit('/')
        console.log(Cypress.env('token'))
        //cy.loginBackend('kkk5@gmail.com', 'qwertyu1')
        // cy.loginBackend(Cypress.env('validEmail'), Cypress.env('validPassword'))
        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
        //             {email: "kkk5@gmail.com", password: "qwertyu1"}
        //            ).then(response=>{
        //             console.log(response)
        //     console.log(response.status)
        //     window.localStorage.setItem('token', response.access_token)
        //     token = response.access_token
       //     })
    //    })

        // cy.loginBackend('kkk5@gmail.com', 'qwertyu1').then((request) => {
          //  console.log(request.headers)
            //expect(response.statusCode).to.eq(200)
            navigation.logoutButton.should('exist')
                })

        
    //    })



        // it('invalidLogin', ()=>{
        //     cy.visit('/login')
        //     cy.invalidLoginBackend().then(response =>{
        //         console.log(response)
        //     })
    
    
        // })



    // it('logoutBackend', ()=>{
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://gallery-api.vivifyideas.com/api/auth/logout',
    //         headers: {
    //             authorization: `Bearer ${token}`
    //         }
    //     })


    // })


})
