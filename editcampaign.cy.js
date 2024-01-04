describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();
     cy.get(':nth-child(6) > .nav-main-link > .nav-main-link-name').click();


     cy.get('.router-link-active > .nav-main-link-name').click();
     cy.get(':nth-child(2) > [colspan="2"] > a > [data-v-b821b090=""] > [data-testid="display-name"]').click();
     cy.contains('Actions').click();
     cy.get('.block-options > .dropdown > .dropdown-menu > :nth-child(1)').click();
     cy.get('#XG78kogLzpibnHAQQ').type('save')
     cy.contains('save').click();

    })
})
