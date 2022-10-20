class Navigation{

    get loginButton(){

        return cy.get("a[href='/login']")
    }

    get logoutButton(){
        return cy.get("a[role='button ']")
    }

    clickOnloginButton(){
        this.loginButton.click()
    }

    clickOnlogoutbutton(){
        this.logoutButton.click()
    }

}

export const navigation = new Navigation()