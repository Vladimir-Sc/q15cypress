
import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'


describe('Login backend', () => {
    before('login with backend', () => {
        //valid user login
        //cy.loginBackend1(data.loginValid.email, data.loginValid.password)
        })
    
    
    it.only('check if we are logged with invalid email', ()=>{
        //invalid email, user doesn't exist
        cy.loginBackend1(data.invalidLogin.email, data.invalidLogin.password).
            then(response=>{
                expect(response.status).to.eq(401)
                expect(response.body.error).to.eq('Unauthorized')
                })
        
        cy.visit('/my-galleries')
        navigation.logoutButton.should('exist')
    })

})




// cy.on('uncaught:exception', (err, runnable) => {
//     expect(err.message).to.include('500')
//     return false
//   })
