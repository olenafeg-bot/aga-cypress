class FuelExpenses {
  get sidebar() {
    return cy.get('.sidebar.d-flex.flex-column').find('a.btn.btn-white.btn-sidebar.sidebar_btn').contains('Fuel expenses')
  } 
  get fuelExpenseButton() {
    return cy.get('a.btn.btn-white.btn-sidebar.sidebar_btn.').contains('Fuel expenses')
  }

  openFuelExpenses() {
    this.fuelExpenseButton.click()
  }

   // get addFuelExpenseButton() {
       // return cy.get('button.btn.btn-white.btn-sidebar.sidebar_btn').contains('Fuel expenses')
                  
    //}
    get addExpenseButton() {
        return cy.get('button.btn.btn-primary').contains('Add an expense')
    }
    get addExpenseForm() {
        return cy.get('.modal-content')
    }
    get addMileageInput() {
        return cy.get('#addExpenseMileage')
    }
    get numberOfLitersInput() {
        return cy.get('#addExpenseLiters')
    }
    get totalCostInput() {
        return cy.get('#addExpenseTotalCost')
    }
    get footer() {
        return cy.get('.modal-footer.d-flex.justify-content-end')
  }

  addFuelExpense(mileage, liters, totalCost){
      this.sidebar.click()
      this.addExpenseButton.click()
      this.addExpenseForm.should('be.visible')
      this.addMileageInput.clear(mileage)
      this.addMileageInput.type(mileage)
      this.numberOfLitersInput.type(liters)
      this.totalCostInput.type(totalCost)
      this.footer.find('.btn.btn-primary').contains('Add').click()
  }
  fuelExpensesIsAdded(mileage, liters, totalCost) {
    cy.get('table.table.expenses_table').should('contain.text', `Mileage: ${mileage}`)
    cy.get('table.table.expenses_table').should('contain.text', `Liters: ${liters}`)
    cy.get('table.table.expenses_table').should('contain.text', `Total Cost: ${totalCost}`)
  }
}

export default FuelExpenses