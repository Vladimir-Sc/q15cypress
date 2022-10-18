/// <reference types="Cypress" />



describe('Login test cases', ()=>{

    it('Go to gallery page', ()=>{
        cy.visit('/')
    })

    it('Go to login page', ()=>{
        cy.get('a[href="/login"]').click()
    })

    it('Login with valid credentials', ()=>{
        cy.get('#email').type('kkk5@gmail.com')
        cy.get('#password').type('qwertyu1')
        cy.get("button[type='submit']").click()
    })

    it('Logout', ()=>{
        //cy.get("a[role='button ']").click()
        cy.wait(2000)
        //cy.get('[class="nav-link nav-buttons"]').first().click()
        cy.get('[class="nav-link nav-buttons"]').eq(2).click()
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