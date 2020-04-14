/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('/')
})

describe('Form', () => {
    it('Only shows success message after saving form', () => {
        cy.get('.modal-body').should('not.be.visible')
        cy.get('button').click()
        cy.get('.modal-body').should('be.visible')
    })

    it('Shows input name in success message', () => {
        let name = 'John Krasinski'
        cy.get('#fullName').type(name)
        cy.get('button').click()
        cy.get('.modal-body').should('contain', name)
    })
})

describe('Data validation', () => {
    it('Shows success message on valid data', () => {
        cy.get('#fullName').type('Name')
        cy.get('#country').type('UK')
        cy.get('[name="yob"]').type('2002-12-11')
        cy.get('#position').type('MP')
        cy.get('#url').type('google.com')
        cy.get('#risk').select('High')
        cy.get('button').click()
        cy.get('.modal-body').contains(/You added .* to the list of entities/)
    })

    it("Shows no success message if mandatory fields are not completed", () => {
        cy.get('button').click()
        cy.get('.modal-body').should('not.be.visible')
    })

    describe('Source info URL', () => {
        it("Doesn't show any data validation messages before typing", () => {
            cy.get('.valid-feedback').should('not.be.visible')
            cy.get('.invalid-feedback').should('not.be.visible')
        })

        it('Throws an error on invalid url "hello"', () => {
            cy.get('#url').type('hello')
            cy.get('.invalid-feedback').should('be.visible')
        })

        it('Throws an error on invalid url "www.go"', () => {
            cy.get('#url').type('www.go')
            cy.get('.invalid-feedback').should('be.visible')
        })

        it('Shows message on valid url', () => {
            cy.get('#url').type('hello.com')
            cy.get('.valid-feedback').should('be.visible')
        })
    })
})
  