/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { general } from '../page_objects/genaral'
import data from '../fixtures/data.json'

describe('Login test cases', () => {
    beforeEach('Go to gallery page and clcik on login button', () => {
        cy.visit('/')
        cy.url().should('contain', 'https://gallery-app.vivifyideas.com')
        general.header1.should('have.text', data.headers.allGalleries)
        navigation.clickOnloginButton()
        cy.url().should('contain', "/login")
        general.header1.should('have.text', data.headers.login)
    })

    it('Login with valid credentials and logout', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', 'Password1')
        //cy.wait(1000)
        navigation.loginButton.should('not.exist')
        navigation.logoutButton.should('exist')
        navigation.clickOnlogoutbutton()
        navigation.logoutButton.should('not.exist')
        navigation.loginButton.should('exist')
    })

    it.only('Login with invalid email', () => {
        loginPage.login(faker.internet.email(), 'Password1')
        general.erroMessage.should('be.visible')
            .and('have.text', 'Bad Credentials')
            .and('have.css', 'background-color', 'rgb(248, 215, 218)')
            .and('have.css', 'color', 'rgb(114, 28, 36)')
        //general.erroMessage.should('have.text', 'Bad Credentials')
    })

    it('Login with invalid password', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', faker.internet.password())
    })
           
   
          
   it('Login with no password', () => {
        loginPage.login('danilo.todorovic@vivifyideas.com', "{backspace}")
    })
          
    it('Login with no email no password', () => {
        loginPage.login("{backspace}", "{backspace}")
    })    
})