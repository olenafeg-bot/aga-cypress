/// <reference types="cypress" />
import GaragePage from "../pageObjects/GaragePage";
import FuelExpenses from "../pageObjects/FuelExpenses"; 
//Verify the Sign Up button is visible and contains correct text. Click on the button.
describe('Login to the application', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login('whitney110@mailinator.com', '123Capital')
  })
 it('car is added successfully', () => {
    
    cy.intercept('POST', '/api/cars').as('createCar')

    const garagePage = new GaragePage()
    garagePage.addCar('Audi', 'TT', '143537')
    
    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.equal(201)
    
    const carId = interception.response.body.data.id
    cy.log(`Created car with ID: ${carId}`)
    garagePage.carIsAdded('Audi', 'TT')
      //add fuel expense
    const fuelExpenses = new FuelExpenses()
    fuelExpenses.addFuelExpense('143538', '508', '14336')

   cy.intercept('GET', `/api/cars/${carId}`, {
        statusCode: 200,
        body: {
          id: carId,
          carBrandId: 1,
          carModelId: 1,
          initialMileage: 34452,
          updatedMileageAt: "2026-04-01T14:17:34.000Z",
          carCreatedAt: "2026-04-01T14:17:34.000Z",
          mileage: 34452,
          brand: "Audi",
          model: "TT",
          logo: "audi.png"
        }
      }).as('getCar')

      cy.addExpense(carId,'143643', '509', '14336').then((expense) => {
          expect(expense).to.have.property('id')
        //expect(expense.carId).to.eq(carId)
        expect(expense.liters).to.eq('509')
        expect(expense.mileage).to.eq('143640')
        expect(expense.totalCost).to.eq('14336')
})
})
    const fuelExpensesIsAdded = new FuelExpenses() //verify fuel expense is added successfully
    fuelExpensesIsAdded.fuelExpensesIsAdded('143643', '509', '14336')
   
    })
  })


  