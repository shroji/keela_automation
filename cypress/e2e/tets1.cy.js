/// <reference types="cypress"/>
  
it('Google Search',() => {

    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation step by step{Enter}')

    //cy.contains('Google Search').click
   it('keela',() => {

    const url = 'https://dev.keela.co/';
cy.visit(url);
describe('Authenticated Test', () => {
    it('should visit a page that requires authentication', () => {
      const userEmail = 'keelaqa@gmail.com';
      const userPassword = 'Nepal@123';
        // Visit the Keela login page
   
  
  
      // Type email and password in the login form
      cy.get('#user-email').type(userEmail);
      cy.get('#user-password').type(userPassword);
  
      // Click the login button (replace with the actual selector)
      cy.get('.col-8 > .btn').click();
      cy.wait(2000);
      

      describe('Contact Creation', () => {
        it('should create a new contact', () => {
          // Visit the page with your contacts
          cy.visit('/contacts');
      
          // Click on the "Add Contact" button
          cy.get('.add-contact-button').click();
      
          // Fill out the contact form
          cy.get('#firstName').type('John');
          cy.get('#lastName').type('Doe');
          cy.get('#email').type('john.doe@example.com');
          cy.get('#phone').type('1234567890');
          // You can add more fields as needed
      
          // Submit the form
          cy.get('.save-button').click();
      
          // Assert that the new contact is created
          cy.get('.success-message').should('contain', 'Contact created successfully');
        });
      });
    
   
     // Click on the 'Contacts' link
    cy.get('#btn btn-sm btn-primary').click();
    //cy.get('#Add Contact').click();


    
      
      
      New code
      
      // simple test for the css locator using selector hub
    describe('Google', () => {
    it('Google Search',() => {

        cy.visit('https://google.com')
    //Assertions 
    cy.title().should('eq', 'googlesearch') 
  //To search the locator need the selector hub and then serach for the class or id. if we used the id represent with # if class represent with .
  cy.get(".search_query").type("tshirts") // class tag is used
   cy.get("#search_query").type("tshirts") // id tag is used
   cy.get("[name='search_query']").tye("tshpirts") // attribute tag is used  (since the attribute may be the placeholder, name ,value) 
});
});
  // test using the xpath in selector hub( for this nedd to add the xpath plugin
      it('finds list items', () => {
  cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
});


    for own project
        describe('OCR', () => {
    it('OCR',() => {

      cy.visit('https://.......')
      cy.get(".ant-btn").click()
      cy.ul(

  for the implicit assertions
      cy.url().should('include','azurestaticapps.net')
      cy.url().should('eq',.......url)
      cy.url().should('contain','azurestaticapps')

      //and assertions
      cy.url().should('include','azurestaticapps.net')
      .and('contain','....')-

        // through the cypress we can use the locator
        cy.get('//locator copy through the cypress').should('be.visible')
        .and('exist') 

      
})

