describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();

     cy.get(':nth-child(6) > .nav-main-link > .nav-main-link-name').click();
     cy.get('.btn-primary').click();
     cy.log('Before attempting to find the element');
    cy.get('#aMs4bu6kyN6FbSrrd').type('green');
cy.log('After attempting to find the element');
    })
})