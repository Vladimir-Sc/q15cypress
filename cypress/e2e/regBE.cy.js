
import {navigation} from '../page_objects/navigation'

let token;

describe('Login backend', () => {

    
beforeEach('set token in local storage', ()=>{
        cy.visit('/register')
        //window.localStorage.setItem('token', token)
    })
    
    it('valid registration', ()=>{

        cy.registerBack().then(resp=>{
            expect(Cypress.env('userId')).to.eq(resp.body.user_id)})
        })

})


