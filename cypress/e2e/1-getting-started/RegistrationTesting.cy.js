/// <reference types="cypress" />

//Verify the Sign Up button is visible and contains correct text. Click on the button.
describe('example to-do app', () => {
  beforeEach(() => {
   
    cy.visit('/')
  })
//Verify Name input field. Negative test: check that the error message is displayed when the field is empty.
  it('displays button Sign Up', () => {
    cy.get('.hero-descriptor_btn.btn.btn.btn-primary').as('SignupButton')
    cy.get('@SignupButton').should('contain.text', 'Sign up')
    cy.get('@SignupButton').should('be.visible')
    cy.get('@SignupButton').click()
    cy.get('.modal-content').as('SignUpForm')
    cy.get('@SignUpForm').should('be.visible')
    cy.get('#signupName').as('NameInput')
    cy.get('@NameInput').type('eee')
    cy.get('@NameInput').clear().blur()
    cy.get('.invalid-feedback')
      .should('contain.text', 'Name required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red
    //Verify Name input field. Negative test: check that the error message is displayed when the incorrect data is entered.

    cy.get('@NameInput').type('12345')    
    cy.get('.invalid-feedback')
      .should('contain.text', 'Name is invalid')
      .and('have.css', 'color', 'rgb(220, 53, 69)') // Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)') // Verify that the input field border is red

        //Verify Name input field. Negative test: check that the error message is displayed when values less than 2 characters

    cy.get('@NameInput').clear()    
    cy.get('@NameInput').type('e')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red
            //Verify Name input field. Negative test: check that the error message is displayed when values more than 20 characters.
    cy.get('@NameInput').clear()
    cy.get('@NameInput').type('eeeeeeeeeeeeeeeeeeeee'.trim())
    cy.get('.invalid-feedback')
      .should('contain.text', 'Name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

      //Verify Name input field. Negative test: check that the error message is displayed when the incorrect datais entered.Values less than 2 characters. 

    cy.get('@NameInput').clear()    
    cy.get('@NameInput').type('2'.trim())
    cy.get('.invalid-feedback')
      .should('contain.text', 'Name is invalid', 'Name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

      //Verify Name input field. Positive test: check that no error message is displayed when the correct data is entered.
    cy.get('@NameInput').clear()
    cy.get('@NameInput').type('eeeeeeeeeeeeeeeeeeee'.trim())
    cy.get('.invalid-feedback').should('not.exist')
    cy.get('@NameInput').clear()
    cy.get('@NameInput').type('Jo'.trim())
    cy.get('.invalid-feedback').should('not.exist')
    cy.get('@NameInput').clear()
    cy.get('@NameInput').type('John'.trim())
    cy.get('.invalid-feedback').should('not.exist')//Verify the error message is not displayed when the correct data is entered.

      //Verify Last Name input field. Negative test: check that the error message is displayed when the input field is empty.
    cy.get('#signupLastName').as('LastNameInput')
    cy.get('@LastNameInput').type('eee')
    cy.get('@LastNameInput').clear().blur()
    cy.get('.invalid-feedback')
      .should('contain.text', 'Last name required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

      //Verify Last Name input field. Negative test: check that the error message is displayed when values less than 2 characters
    cy.get('@LastNameInput').type('e'.trim())
    cy.get('.invalid-feedback')
      .should('contain.text', 'Last name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

      //Verify Last Name input field. Negative test: check that the error message is displayed when values more than 20 characters.
    cy.get('@LastNameInput').clear()  
    cy.get('@LastNameInput').type('eeeeeeeeeeeeeeeeeeeee'.trim())
    cy.get('.invalid-feedback')
      .should('contain.text', 'Last name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

    //Verify Last Name input field. Negative test: check that the error message is displayed when the incorrect datais entered.Values less than 2 characters. 

    cy.get('@LastNameInput').clear()    
    cy.get('@LastNameInput').type('2'.trim())
    cy.get('.invalid-feedback')
      .should('contain.text', 'Last name is invalid', 'Last name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

        //Verify LastName input field. Positive test: check that no error message is displayed when the correct data is entered.
    cy.get('@LastNameInput').clear()
    cy.get('@LastNameInput').type('eeeeeeeeeeeeeeeeeeee'.trim())
    cy.get('.invalid-feedback').should('not.exist')//Verify the error message is not displayed when the correct data is entered.
    cy.get('@LastNameInput').clear()
    cy.get('@LastNameInput').type('Wh'.trim())
    cy.get('.invalid-feedback').should('not.exist')//Verify the error message is not displayed when the correct data is entered.
    cy.get('@LastNameInput').clear()
    cy.get('@LastNameInput').type('Whitney'.trim())
    cy.get('.invalid-feedback').should('not.exist')//Verify the error message is not displayed when the correct data is entered.


    //Verify Email input field. Negative test: check that the error message is displayed when the input field is empty.
    cy.get('#signupEmail').as('EmailInput')
    cy.get('@EmailInput').type('eee')
    cy.get('@EmailInput').clear().blur()
    cy.get('.invalid-feedback')
      .should('contain.text', 'Email required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red
      //Verify Email input field. Negative test: check that the error message is displayed when the incorrect data is entered.
    cy.get('@EmailInput').type('eee')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Email is incorrect')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red
    cy.get('@EmailInput').clear()
    cy.get('@EmailInput').type('hhh;@mail.com')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Email is incorrect')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red

      //Verify Email input field. Positive test: check that no error message is displayed when the correct data is entered.
    cy.get('@EmailInput').clear()
    cy.get('@EmailInput').type('whitney@mailinator.com')
    cy.get('.invalid-feedback').should('not.exist')

    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled')//Verify that Register button is disabled when the required fields are not filled in with correct data.

    //Verify Password input field. Negative test: check that the error message is displayed when the input field is empty.
    cy.get('#signupPassword').as('PasswordInput')
    cy.get('@PasswordInput').type('12345')
    cy.get('@PasswordInput').clear().blur()
    cy.get('.invalid-feedback')
      .should('contain.text', 'Password required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')  // Verify that the input field border is red
      //Verify Password input field. Negative test: check that the error message is displayed when values less than 8 characters.
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('123Capi')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red
      //Verify Password input field. Negative test: check that the error message is displayed when values more than 15 characters.
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('1234567890CapiSm')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)') // Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')  // Verify that the input field border is red
      //Verify Password input field. Negative test: check that the error message is displayed when the incorrect data is entered. Values less than 8 characters.
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('123capital')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)') // Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')  // Verify that the input field border is red
      //Verify Password input field. Negative test: check that the error message is displayed when the incorrect data is entered.
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('12345CAPITAL')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')  // Verify that the input field border is red
      //Verify Password input field. Negative test: check that no error message is displayed when the correct data is entered.
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('Capitalletter')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')// Verify that the error message is displayed in red color
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')// Verify that the input field border is red
        cy.get('@PasswordInput').clear()
    
      //Verify Password input field. Positive test:  the error message is not displayed when the correct data is entered with 8 characters.
    cy.get('@PasswordInput').type('123Capit')
    cy.get('.invalid-feedback').should('not.exist')
      //Verify Password input field. Positive test:  the error message is not displayed when the correct data is entered with 15 characters.
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('1234567890Capit')
    cy.get('.invalid-feedback').should('not.exist')
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('123Capital')
    cy.get('.invalid-feedback').should('not.exist')
    //Verify Re-enter Password input field. Negative test: check that the error message is displayed when the input field is empty.
    cy.get('#signupRepeatPassword').as('ReenterPasswordInput')
    cy.get('@ReenterPasswordInput').type('12345')
    cy.get('@ReenterPasswordInput').clear().blur()
    cy.get('.invalid-feedback')
      .should('contain.text', 'Re-enter password required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)')
      //Verify Re-enter Password input field. Negative test: check that the error message is displayed when the incorrect data is entered.
    cy.get('@ReenterPasswordInput').type('123456Capital')
    cy.get('.invalid-feedback')
      .should('contain.text', 'Passwords do not match')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
    cy.get('@ReenterPasswordInput').clear()
    cy.get('@ReenterPasswordInput').type('123Capital')
    cy.get('.invalid-feedback').should('not.exist')

    //Verify that Register button is disabled when the required fields are not filled in with correct data.
    cy.get('@NameInput').clear()
    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled')    
    cy.get('@NameInput').clear()
    cy.get('@NameInput').type('John'.trim())

    cy.get('@LastNameInput').clear()  
    cy.get('@LastNameInput').type('eeeeeeeeeeeeeeeeeeeee'.trim())
    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled')

    cy.get('@LastNameInput').clear()
    cy.get('@LastNameInput').type('Whitney'.trim())
    cy.get('@EmailInput').clear()
    cy.get('@EmailInput').type('hhh;@mail.com')
    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled')
    cy.get('@EmailInput').clear()
    cy.get('@EmailInput').type('whitney20@mailinator.com')

    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('123Capi')
    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled')
    cy.get('@PasswordInput').clear()
    cy.get('@PasswordInput').type('123Capital')
    cy.get('@ReenterPasswordInput').clear()
    cy.get('@ReenterPasswordInput').type('123456Capital')
    cy.get('button.btn.btn-primary').contains('Register').should('be.disabled')
     cy.get('@ReenterPasswordInput').clear()
    cy.get('@ReenterPasswordInput').type('123Capital')
    cy.get('button.btn.btn-primary').contains('Register').should('be.enabled')
      .click()
      cy.get('.modal-content').should('not.exist')
      cy.get('button.dropdown-toggle.user-nav_toggle').click()
      cy.get('.user-nav_menu.dropdown-menu.show').contains('Logout')
      cy.get('button.dropdown-item.btn.btn-link.user-nav_link').click()

    
    cy.login('whitney1@mailinator.com', '123Capital')
    cy.get('#signinPassword').type('123Capital', { sensitive: true })  
  })
});