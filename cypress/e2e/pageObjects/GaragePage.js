class GaragePage {
  get addCarButton() {
    return cy.get('button.btn.btn-primary').contains('Add car')
  }

  get addCarForm() {
    return cy.get('.modal-content')
  }

  get brandSelect() {
    return cy.get('#addCarBrand')
  }

  get modelSelect() {
    return cy.get('#addCarModel')
  }

  get mileageInput() {
    return cy.get('#addCarMileage') // краще додати id у HTML
  }

  get footer() {
    return cy.get('.modal-footer.d-flex.justify-content-end')
  }

  addCar(brand, model, mileage) {
    this.addCarButton.click()
    this.addCarForm.should('be.visible')
    this.brandSelect.select(brand)
    this.modelSelect.select(model)
    this.mileageInput.type(mileage)
    this.footer.find('.btn.btn-primary').contains('Add').click()
  }
  carIsAdded(brand, model) {
    cy.get('.car-item').should('contain.text', `${brand} ${model}`)
  }
}

export default GaragePage