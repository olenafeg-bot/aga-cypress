import SignUpPage from "../pageObjects/SignUpPage";
import GaragePage from "../pageObjects/GaragePage";
import FuelExpenses from "../pageObjects/FuelExpenses"; 

//Verify the car can be added successfully to the garage list.
describe('Adding car to the garage', () => {
  beforeEach(() => {
    cy.visit('/')
    //cy.addTestContext('Adding car to the garage')
  })

  it('car is added successfully', () => {
    const signUpPage = new SignUpPage()
    signUpPage.signUpButton.click()
    signUpPage.fillSignUpForm('Whitney', 'Whitney', 'whitney74@mailinator.com', '123Capital')
    signUpPage.registerButton.click()


    const garagePage = new GaragePage()
    garagePage.addCar('Audi', 'TT', '143537')
    garagePage.carIsAdded('Audi', 'TT')

    const fuelExpenses = new FuelExpenses()
    fuelExpenses.addFuelExpense('143538', '508', '14336')
  })

  //it('fuel expenses can be added successfully', () => {
 //   const fuelExpenses = new FuelExpenses()
 //   fuelExpenses.addFuelExpense('508', '60')
 // })
})

