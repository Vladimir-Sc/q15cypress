/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe('Login test cases', ()=>{

    it('Go to gallery page', ()=>{
        cy.visit('/register')
    })

    it('Login with valid credentials', ()=>{
        cy.get(locators.register.enterFirstName).type('pero')
        cy.get(locators.register.enterLastName).type('peroo')
        cy.get(locators.register.enterEmail).type('kkk8@gmail.com')
        cy.get(locators.register.enterPassword).type('qwertyu2')
        cy.get(locators.register.confirmPassword).type('qwertyu2')
        cy.get(locators.register.checkBox).check()
        cy.get(locators.register.submitReg).click()
    })






})