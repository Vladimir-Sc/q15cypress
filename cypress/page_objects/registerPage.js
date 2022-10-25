class RegisterPage {

        get firtsName(){
             return cy.get("#first-name")
            }

        get lastName(){
            return cy.get("#last-name")
            }    

            get eMail(){
                return cy.get("#email")
            }
        
        get password(){
            return cy.get("#password")
        }    

        get confiPass(){
            return cy.get("#password-confirmation")
        }

        get checkBox(){
            return cy.get("[type='checkbox']")
        }

        get submitBut(){

            return cy.get("[type='submit']")
        }

        register(firstname, lastname, email, pass, confpass,){
            this.firtsName.type(firstname)
            this.lastName.type(lastname)
            this.eMail.type(email)
            this.password.type(pass)
            this.confiPass.type(confpass)
            this.checkBox.check()
            this.submitBut.click()
        }

        uncheckedBox(firstname, lastname, email, pass, confpass,){
            this.firtsName.type(firstname)
            this.lastName.type(lastname)
            this.eMail.type(email)
            this.password.type(pass)
            this.confiPass.type(confpass)
            //this.checkBox.check()
            this.submitBut.click()
        }
}

export const registerPage = new RegisterPage ();
