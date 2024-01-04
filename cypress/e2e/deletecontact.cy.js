describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();
     cy.get(':nth-child(3) > .nav-main-link > .nav-main-link-name').click();
     cy.get('tbody > :nth-child(1) > .text-center').click();
     cy.contains('Actions').click();
     cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2)').click();
     
     cy.get('.swal2-input').type('DELETE')
     cy.get('.swal2-confirm').click();

    })
})