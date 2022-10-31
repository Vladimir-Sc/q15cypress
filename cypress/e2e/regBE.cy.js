
import {navigation} from '../page_objects/navigation'

let token;

describe('Login backend', () => {
    before('login with backend', () => {
       // cy.visit('/register')
       //cy.registerBack()
        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', 
        //             {
        //             email : "rrt9989@gmail.com",
        //             first_name: "jjjj",
        //             last_name: "hhh",
        //             password: "asdfghj1",
        //             password_confirmation: "asdfghj1",
        //             terms_and_conditions: true
        //             }).then(response=>{
        //         console.log(response)
        //         console.log(response.status)
        //         console.log(response.body.access_token)
        //         token = response.body.access_token
        //         window.localStorage.setItem('token', token)
        //         //token = response.access_token
        //         console.log(token)
                
        //         })


        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
        //             {email: 'kkk55@gmail.com', password: 'qwertzu1'}
        //            ).then(response=>{
        //             console.log(response)
        //     console.log(response.status)
        //     window.localStorage.setItem('token', response.access_token)
        //     token = response.access_token
            
        //     })



        })

    beforeEach('set token in local storage', ()=>{
        cy.visit('/register')
        //window.localStorage.setItem('token', token)
    })
    
    it('invalid email', ()=>{

        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', 
                    {
                    first_name: "jjjj",
                    last_name: "hhh",
                    email: "rzt93@gmail.com",
                    password: "asdfghj1",
                    password_confirmation: "asdfghj1",
                    terms_and_conditions: true
                    }).then(response=>{
                console.log(response)
                console.log(response.status)
                console.log(response.body.access_token)
                token = response.body.access_token
                window.localStorage.setItem('token', token)
                //token = response.access_token
                console.log(token)
                
                }).then(res =>{
                    expect(res.status).to.eq(200)
                })

    })

  //  it('check if we are logged', ()=>{
      //  cy.visit('')

        //cy.loginBackend(Cypress.env('validEmail'), Cypress.env('validPassword'))
        // cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', 
        //             {email: 'kkk55@gmail.com', password: 'qwertzu1'}
        //            ).then(response=>{
        //             console.log(response)
        //     console.log(response.status)
        //     window.localStorage.setItem('token', response.access_token)
        //     token = response.access_token
  //          navigation.logoutButton.should('exist')
      //          })
        })


