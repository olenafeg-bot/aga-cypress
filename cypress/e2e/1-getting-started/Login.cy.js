/// <reference types="cypress" />

//Verify the Sign Up button is visible and contains correct text. Click on the button.
describe('Login to the application', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('whitney1@mailinator.com', '123Capital')
  })

  it('should login with valid credentials', () => {
    cy.get('#signinPassword').type('123Capital', { sensitive: true })
  })
})