import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'


describe('create backend gallery', ()=>{


    before('Login and set token in local storage', ()=>{
        cy.loginBackend2(data.loginValid.email, data.loginValid.password)
    })

    it('dodavanje komentara', ()=>{
        
        cy.addComment().then(resp=>{
            expect(Cypress.env('galleryId')).to.eq(resp.body.id)})
            //general.header1.should('have.text', data.headers.createGal)
    })

})