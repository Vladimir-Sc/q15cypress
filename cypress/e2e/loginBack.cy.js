
import {navigation} from '../page_objects/navigation'

let token;

describe('Login backend', () => {
    beforeEach('login with backend', () => {
            
        cy.loginBackend()
        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
        //             {email: "kkk5@gmail.com", password: "qwertyu1"}
        //            ).its('body').then(response=>{
        //     //console.log(response)
        //     //window.localStorage.setItem('token', response.access_token)
        //     token = response.access_token
        //     })
        })

    // beforeEach('set token in local storage', ()=>{
    //     window.localStorage.setItem('token', token)
    // })


    it('check if we are logged', ()=>{
        cy.visit('/')
        navigation.logoutButton.should('exist')
        })



})
