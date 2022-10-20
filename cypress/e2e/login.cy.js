/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')


describe('Login test cases', ()=>{


beforeEach('Go to gallery page and click login button', ()=>{
    cy.visit('/')
    cy.get(locators.header.loginButton).click()
    })

    // it('Go to gallery page', ()=>{
    //     cy.visit('/')
    // })

    // it('Go to login page', ()=>{
    //     cy.get(locators.header.loginButton).click()
    // })

    it('Login with valid credentials', ()=>{
        cy.get(locators.login.emailInput).type('kkk5@gmail.com')
        cy.get(locators.login.passwordinput).type('qwertyu1')
        cy.get(locators.login.submitButton).click()
        cy.wait(2000)
        cy.get(locators.header.logoutButton).click()
    })

    it('Logout', ()=>{
        //cy.get("a[role='button ']").click()
        // cy.wait(2000)
        // cy.get(locators.header.logoutButton).click()
        //cy.get('[class="nav-link nav-buttons"]').first().click()
        //cy.get('[class="nav-link nav-buttons"]').eq(2).click()
    })


    it('Login with invalid email', ()=>{
        cy.get('#email').clear().type('ftfyuiji')
        cy.get('#password').clear().type('qwertyu1')
        cy.get("button[type='submit']").click()
    })

    it('Login with wrong email', ()=>{
        cy.get('#email').clear().type('ftfyuiji@gmail.com')
        cy.get('#password').clear().type('qwertyu1')
        cy.get("button[type='submit']").click()
    })

    it('Login with empty email', ()=>{
        //cy.get('#email').clear().type(' ')
        cy.get('#password').clear().type('qwertyu1')
        cy.get("button[type='submit']").click()
    })


    it('Login with invalid password', ()=>{
        cy.get('#email').clear().type('kkk5@gmail.com')
        cy.get('#password').clear().type('qqqqqqq1')
        cy.get("button[type='submit']").click()
    })


})