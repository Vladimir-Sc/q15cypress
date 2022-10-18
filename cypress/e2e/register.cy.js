/// <reference types="Cypress" />

describe('Login test cases', ()=>{

    it('Go to gallery page', ()=>{
        cy.visit('/register')
    })

    it('Login with valid credentials', ()=>{
        cy.get('#first-name').type('pero')
        cy.get('#last-name').type('peroo')
        cy.get('#email').type('kkk7@gmail.com')
        cy.get('#password').type('qwertyu2')
        cy.get('#password-confirmation').type('qwertyu2')
        cy.get("[type='checkbox']").check()
        cy.get("button[type='submit']").click()
    })






})