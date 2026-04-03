/// <reference types="cypress" />

//Verify the Sign Up button is visible and contains correct text. Click on the button.
describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('/')
  })
//Verify the links in the Contacts section are visible and contain correct href attribute values.
  it('displays button Sign Up', () => {
    cy.get('.hero-descriptor_btn.btn.btn.btn-primary').as('SignupButton')
    cy.get('@SignupButton').should('contain.text', 'Sign up')
    cy.get('@SignupButton').should('be.visible')
    cy.get('@SignupButton').click()
  })

  it('displays correct links from Contacts section', () => {
    
    cy.get('.container').as('ContactsSection')
    const SocialLink = '.socials_link'

    cy.get('@ContactsSection').find(SocialLink)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'https://www.facebook.com/Hillel.IT.School')
    cy.get('@ContactsSection').find(SocialLink)
        .eq(1)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'https://t.me/ithillel_kyiv')
    cy.get('@ContactsSection').find(SocialLink)
        .eq(2)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'https://www.youtube.com/user/HillelITSchool?sub_confirmation=1')
    cy.get('@ContactsSection').find(SocialLink)
        .eq(3)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'https://www.instagram.com/hillel_itschool/')
    cy.get('@ContactsSection').find(SocialLink)
        .eq(4)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'https://www.linkedin.com/school/ithillel/')
    cy.get('@ContactsSection').find(`.contacts_link.display-4`)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'https://ithillel.ua')
    cy.get('@ContactsSection').find(`.contacts_link.h4`)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', 'mailto:developer@ithillel.ua')

  })
})