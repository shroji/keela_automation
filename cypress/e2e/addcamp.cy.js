it('keela', () => {
    const url = 'https://dev.keela.co/';
    cy.visit(url);
  
    describe('Authenticated Test', () => {
      it('should visit a page that requires authentication', () => {
        const userEmail = 'keelaqa@gmail.com';
        const userPassword = 'Nepal@123';
  
        // Visit the Keela login page
        cy.get('#user-email').type(userEmail);
        cy.get('#user-password').type(userPassword);
        cy.get('.col-8 > .btn').click();
     
        // Wait for page navigation or use cy.url() to check the URL
        cy.wait(5000);
        describe('Campaigns Creation', () => {
            it('should create a new campaigns', () => {
              
              cy.visit('/Campaigns');
              cy.get('.nav-main-link-name').click();
              cy.visit('/Create Campaign');
            
              cy.get('.btn btn-sm btn-primary').click();
              cy.get('#control-label').type('clean green');
              cy.get('.btn btn-sm btn-primary').click();
              //for deletion

              cy.visit('/Actions');
        cy.get('.btn font-size-sm btn-sm btn-outline-primary').click();
cy.get('.dropdown-item').first().click();

// Confirm deletion if there's a confirmation dialog
cy.get('.swal2-confirm swal2-styled').click();
      });
    });
});
            });
        });
         
        //edit a compaign
        cy.visit('/Actions');
        cy.get('.btn font-size-sm btn-sm btn-outline-primary').click();
        cy.get('.dropdown-item').first().click();


cy.get('.control-label').clear().type('clean green fresh');
cy.get('.btn btn-sm btn-primary').click();
  
              
    