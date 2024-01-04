describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();
     cy.contains('Campaigns').click();
   
     cy.get('tbody > :nth-child(1) > .text-center').click();
     cy.contains('Actions').click();
     cy.get('.dropdown-menu > :nth-child(4)').click();
     cy.get('.swal2-input').type('DELETE')
     cy.get('.swal2-confirm').click();




;
     
    })
})