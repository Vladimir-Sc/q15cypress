class LoginPage {

    get emailinput(){
        return cy.get("#email")
    }

    get passwordInput(){
        return cy.get('#password')
    }

    get submitButton(){
        return cy.get("button[type='submit']")
    }

    login(email,password){
        this.emailinput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
    
}

export const loginPage = new LoginPage ();
