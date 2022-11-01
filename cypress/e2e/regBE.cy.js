
import {navigation} from '../page_objects/navigation'

let token;

describe('Login backend', () => {

    
beforeEach('set token in local storage', ()=>{
        //cy.visit('/register')
        })
    
    it('valid registration', ()=>{

        cy.registerBack().then(resp=>{
            console.log(resp)
           // expect(Cypress.env('userId')).to.eq(resp.body.user_id)
        })
        })

})


