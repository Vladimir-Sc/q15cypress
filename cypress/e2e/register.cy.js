/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe('Register test cases', ()=>{

    beforeEach('Go to gallery page and click login button', ()=>{
        cy.visit('/register')
        //cy.get(locators.header.loginButton).click()
        })


//negative tests

it('Go to register page', () => {
    cy.visit('/register');
});



it('Invalid First name', () => {
    cy.get('#first-name').type('  ');
    cy.get('#last-name').type('Test');
    cy.get('#email').type('test@123456.com');
    cy.get('#password').type('aleksa1995');
    cy.get('#password-confirmation').type('aleksa1995');
    cy.get('[type="checkbox"]').check();
    cy.get("button[type='submit']").click();
});

it('Invalid Last name', () => {
    cy.get('#first-name').clear().type('Test');
    cy.get('#last-name').clear().type('  ');
    cy.get('#email').clear().type('test@123456.com');
    cy.get('#password').clear().type('aleksa1995');
    cy.get('#password-confirmation').clear().type('aleksa1995');
    cy.get('[type="checkbox"]').check();
    cy.get("button[type='submit']").click();
});

it('Invalid email', () => {
    cy.get('#first-name').clear().type('Test');
    cy.get('#last-name').clear().type('A');
    cy.get('#email').clear().type('test@kkk.com');
    cy.get('#password').clear().type('aleksa1995');
    cy.get('#password-confirmation').clear().type('aleksa1995');
    cy.get('[type="checkbox"]').check();
    cy.get("button[type='submit']").click();
});

it('Invalid password', () => {
    cy.get('#first-name').clear().type('Test');
    cy.get('#last-name').clear().type('Al');
    cy.get('#email').clear().type('test@kkk.com');
    cy.get('#password').clear().type('aleksa');
    cy.get('#password-confirmation').clear().type('aleksa');
    cy.get('[type="checkbox"]').check();
    cy.get("button[type='submit']").click();
});

it('box unchecked', () => {
    cy.get('#first-name').clear().type('Test');
    cy.get('#last-name').clear().type('Al');
    cy.get('#email').clear().type('test@kkk.com');
    cy.get('#password').clear().type('aleksa');
    cy.get('#password-confirmation').clear().type('aleksa');
    cy.get('[type="checkbox"]').uncheck();
    cy.get("button[type='submit']").click();
});

it('Register successfully', () => {
    cy.get('#first-name').clear().type('Test');
    cy.get('#last-name').clear().type('Al');
    cy.get('#email').clear().type('test1234215@gmail.com');
    cy.get('#password').clear().type('aleksa1995');
    cy.get('#password-confirmation').clear().type('aleksa1995');
    cy.get('[type="checkbox"]').check();
    cy.get("button[type='submit']").click();
});


    //positive test

    it('Go to gallery page', ()=>{
        cy.visit('/register')
    })

    it('Register', ()=>{
        cy.get(locators.register.enterFirstName).type('pero')
        cy.get(locators.register.enterLastName).type('peroo')
        cy.get(locators.register.enterEmail).type('kkk10@gmail.com')
        cy.get(locators.register.enterPassword).type('qwertyu2')
        cy.get(locators.register.confirmPassword).type('qwertyu2')
        cy.get(locators.register.checkBox).check()
        cy.get(locators.register.submitReg).click()
    })
})