/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { registerPage } from '../page_objects/registerPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'


describe ('Register test cases', ()=>{
    beforeEach('Go to register page and clcik on submit button', () => {
        cy.visit('/register')
        cy.url().should('contain', '/register')
        
    })

it('Valid registration', ()=>{
    registerPage.
    register(data.register.firstName, data.register.lastName, faker.internet.email(), data.register.passwrod, data.register.confpassword)
    general.header1.should('have.text', data.headers.allGalleries)
    })

it('Invalid email w/o @', ()=>{
    registerPage.
    register(data.register.firstName, data.register.lastName, data.register.invalidEmail1, data.register.passwrod, data.register.confpassword)
    general.header1.should('have.text', data.headers.register)
    //general.header1.should('have.text', data.headers.allGalleries)
    })

it('Invalid email w/o dotcom', ()=>{
        registerPage.
        register(data.register.firstName, data.register.lastName, data.register.invalidEmail2, data.register.passwrod, data.register.confpassword)
        general.header1.should('have.text', data.headers.register)
        general.erroMessage.should('be.visible')
    })


it('Without password', ()=>{
            registerPage.
            register(data.register.firstName, data.register.lastName, faker.internet.email(), "{backspace}", "{backspace}")
            general.header1.should('have.text', data.headers.register)
        })    
    
it('Invalid password', ()=>{
            registerPage.
            register(data.register.firstName, data.register.lastName, faker.internet.email(), data.register.invalidPassword, data.register.invalidPassword)
            general.header1.should('have.text', data.headers.register)
            general.erroMessage.should('be.visible')
            .and('have.text', 'The password must be at least 8 characters.')
        })
        

        it('Check box not checked', ()=>{
            registerPage.uncheckedBox(data.register.firstName, data.register.lastName, faker.internet.email(), data.register.passwrod, data.register.passwrod)
            general.erroMessage.should('be.visible')
            .and('have.text', 'The terms and conditions must be accepted.')
        })
})