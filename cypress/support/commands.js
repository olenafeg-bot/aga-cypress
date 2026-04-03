// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginByAPI', (name) => {
    cy.request({
        method: 'POST',
        url: '/api/auth/signin',
        body: {
            email: "whitney111@mailinator.com",
            password: "123Capital",
            remember: false
        },
        headers: {
            Authorization: "Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw=="
         }
    }).then((response) => {
        expect(response.status).to.eq(200)
        let cookieParams = response.headers['set-cookie'][0].split("; ");
        let name = cookieParams[0].split("=")[0];
        let value = cookieParams[0].split("=")[1];
        let domain = cookieParams[1].split("=")[1];
        let expires = cookieParams[2].split("=")[1];
        cy.setCookie(name, value, {domain, path: '/', expires: expires})
        console.log(cookieParams);
    });
    
})
  
    

    
 Cypress.Commands.add('addExpense', (carId, mileage, liters, totalCost) => {
      cy.request({
      method: 'POST',
      url: '/api/expenses',
      body: {
            carId: carId,
            reportedAt:  "2026-04-03",       
            mileage: mileage,
            liters: liters,
            totalCost: totalCost,
            
        },
       //headers: {
       //Authorization: "Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==",
       //Cookie: "sid, s%3A5fyxXJ3hVNKSn2lduEpWQ2uDzjaOJTku.BHVyANgWYWHb1ghYbwZUXeCZH7JnNnmQw9Ze4x3fOTA, {forstudy.space, /, 2027-05-07T20:58:33.301Z}"
       //}
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body).to.include({
            carId: carId,
            reportedAt: "2026-04-03",
            mileage: mileage,
            liters: liters,            
            totalCost: totalCost,
            
        })
        return response.body.data
    })
 })

    

 Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('button.btn.btn-outline-white.header_signin').contains('Sign In').click();
  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password);
  cy.get('app-signin-modal').contains('Login').should('be.visible').click();
 
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})