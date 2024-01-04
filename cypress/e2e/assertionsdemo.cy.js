

it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io')
    
    cy.contains('get').click()
    //used to check whether the elementsor the text box contains the text/name Button
    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class','query-btn')
    .should('be.visible')
    .should('be.enabled')
  })