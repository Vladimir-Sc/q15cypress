
import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'

let token;

describe('Login backend', () => {
    before('login with backend', () => {
        cy.visit('/login')
        cy.loginBackend2(data.loginValid.email, data.loginValid.password)
    })
    
    
    it.only('check if we are logged', ()=>{
        cy.visit('/')
        navigation.logoutButton.should('exist')
    })

        
    it('invalidLogin', ()=>{
            cy.visit('/login')
            cy.invalidLoginBackend().then(response =>{
                console.log(response)
            })
    })

})
