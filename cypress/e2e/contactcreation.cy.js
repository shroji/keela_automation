describe('keela', () => {
    it('keelaweb', () => {
      //cy.visit('https://example.cypress.io')
      cy.visit('https://dev.keela.co/')
      cy.get('#user-email').type('keelaqa@gmail.com')
      cy.get('#user-password').type('Nepal@123')
     cy.get('.col-8 > .btn').click();
     cy.get(':nth-child(3) > .nav-main-link > .nav-main-link-name').click();
     cy.get('.btn-primary').click();
     cy.get('#CpqfReuZvqitGBNmH').select('Mr.')
    
     cy.get('#v4XujpjcoMPocYqJC').type('rr')
     cy.get('#ZWpvyR5xcJP8YJRTQ').type('rr')
     cy.get('#\\32 pXxRz3CnNrb3tkQT').click();
     cy.get('#\\34 HaXsPhuqBehvwtTA').type('rr@gmail.com')
     cy.get('#hzwtSuqvda57BLH7W').click();
     cy.get('#J7jRteabtTLDsmLm7').type('983838241')
     cy.get('#nH6PoT5F7NrWgWfLHday').click();
     cy.get('#nH6PoT5F7NrWgWfLHmonth').click();
     cy.get('#nH6PoT5F7NrWgWfLHyear').click();
     cy.get('#G5atpHbSHLgNcZ5Wzstreet').type('rr')
     cy.get(':nth-child(11) > .row > :nth-child(1) > .form-group > :nth-child(3) > .form-control').type('rr')
     cy.get('#G5atpHbSHLgNcZ5Wzcountry').type('nepal')
     cy.get('#G5atpHbSHLgNcZ5Wzcity').type('kkk')
     cy.get('#G5atpHbSHLgNcZ5Wzregion').type('22')
     cy.get('#G5atpHbSHLgNcZ5Wzpostal').type('8800')

     cy.get('#\\37 9eLJwfkb3sjXyTgQ').click();
     cy.get('#hzwtSuqvda57BLH7W').click();
     cy.get('#vs2__combobox').click();
     cy.get('#vs3__combobox').click();
     cy.get('#gE45buoCFWT42yWDp').click();
     cy.get('#vs4__combobox').click();
     cy.get('.block-content-full > :nth-child(2) > .btn').click();
     
    })
  })