import { faker } from '@faker-js/faker';
import { navigation } from '../page_objects/navigation'
import { loginPage } from '../page_objects/loginPage'
import { genaral } from '../page_objects/genaral'
import data from '../fixtures/data.json'
import { post } from 'cypress/types/jquery';


let token;

describe('register backend', () => {
    
    beforeEach('set token in local storage', ()=>{
        cy.visit('/register')
        //window.localStorage.setItem('token', token)
    })
    

    it('check if we are registered', ()=>{

        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', 
                    {
                    email : "rrt88@gmail.com",
                    first_name: "jjjj",
                    last_name: "hhh",
                    password: "asdfghj1",
                    password_confirmation: "asdfghj1",
                    terms_and_conditions: "true"
                    }).then((res)=> {
                             expect(res.status).to.eq(200)
                             })

             navigation.logoutButton.should('exist')             

        // cy.request({
        //     method: 'POST',
        //     url: 'https://gallery-api.vivifyideas.com/api/auth/register',
        //     body: {
        //         email : "rrt88@gmail.com",
        //         first_name: "jjjj",
        //         last_name: "hhh",
        //         password: "asdfghj1",
        //         password_confirmation: "asdfghj1",
        //         terms_and_conditions: true
        //         }
        //     }).then((res)=> {
        //     expect(res.status).to.eq(200)
        //     })
    })

})



        
