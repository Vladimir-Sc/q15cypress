class General {

    get header1() {
        return cy.get('h1');
    }

    get erroMessage(){
        return cy.get('p[class="alert alert-danger"]')
    }

}

export const general = new General();