import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'

let token

describe('create backend gallery', ()=>{


    before('set token in local storage', ()=>{
        cy.loginBackend(data.loginValid.email, data.loginValid.password)
                         .then(response => {
                                 token = response.access_token
                                 window.localStorage.setItem('token', token)
                             })

        
        
    })

    it('valid create gallery', ()=>{
        cy.visit('/create')
        // cy.request({ 
        //     method: 'POST',
        //     url: 'https://gallery-api.vivifyideas.com/api/galleries',
        //     headers: {
        //         authorization: `Bearer ${token}`
        //         //token: Cypress.env('token')
        //     },
        //     body: {
        //         title: "rrii", 
        //         description: "iirr",
        //          images: ['https://i.pinimg.com/736x/15/8f/6b/158f6b31e9b3a29de6e6683d8130b9a4--funny-raccoons-funny-animals.jpg']
        //         }
        //     })

            //cy.createGallery()
            //cy.url().should('contain', "/create")
           general.header1.should('have.text', data.headers.createGal)
            //console.log(token)

        
    })



        

})


