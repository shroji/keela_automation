describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();
     cy.get(':nth-child(3) > .nav-main-link > .nav-main-link-name').click();
     cy.get(':nth-child(1) > [colspan="2"] > a > span.d-flex > [data-testid="display-name"]').click();
     cy.get(':nth-child(2) > .block-header > .block-options > .btn').click();
     cy.contains('Mr.').click();
    
     cy.get('#gEfiGQYMEdrn8khzP').type('elisha')
     cy.contains('save').click();







    })
})