
import {navigation} from '../page_objects/navigation'

let token;

describe('Login backend', () => {
    before('login with backend', () => {
            
        cy.loginBackend('kkk5@gmail.com', 'qwertyu1')
        //cy.loginBackend(Cypress.env('validEmail'), Cypress.env('validPassword'))
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
                    {email: "kkk5@gmail.com", password: "qwertyu1"}
                   ).its('body').then(response=>{
            //console.log(response)
            //window.localStorage.setItem('token', response.access_token)
            token = response.access_token
            })
        })

        // beforeEach('login with backend', () => {
        //         cy.loginBackend(Cypress.env('validEmail'), Cypress.env('validPassword'))
        //     })

    beforeEach('set token in local storage', ()=>{
        window.localStorage.setItem('token', token)
    })
    
    it('check if we are logged', ()=>{
        cy.visit('/')
        navigation.logoutButton.should('exist')
        })


    it('logoutBackend', ()=>{
        cy.request({
            method: 'POST',
            url: 'https://gallery-api.vivifyideas.com/api/auth/logout',
            headers: {
                authorization: `Bearer ${token}`
            }
        })


    })


})
