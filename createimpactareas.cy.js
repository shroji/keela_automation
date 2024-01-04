describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();
     cy.get(':nth-child(5) > .nav-main-link > .nav-main-link-name').click();
     cy.get('.btn-primary').click();
     cy.get('#\\36 Ex3vdZGXg45Y2s8p').type('end')
     cy.get('.block-content-full > :nth-child(2) > .btn').click();
    })
})