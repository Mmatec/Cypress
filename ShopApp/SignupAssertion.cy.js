
describe ('navigate to nopcommerce website', function () 
{
it ('should navigate to nopcommerce url', function () 

{
   cy.visit("https://www.nopcommerce.com/en/demo")
    //cy.get('.user-actions-ico > svg').invoke('show')
    //cy.contains('Register').click({force: true})
    //cy.url().should('include', 'Register')


    cy.visit ('https://www.nopcommerce.com/en/register?returnUrl=%2Fen%2Fdemo')
    cy.get('.page-title')
     .should('have.text','Register')
    
     cy.get('.section-title')
      .should('contain','Your Personal Details',)

     cy.get('.input-label')
     .should('be.visible')
     cy.get('#FirstName').clear()
      .type('Victoria Chidimma')
     cy.get('#LastName') .clear()
      .type('Okoye')
     cy.get('#Email').clear()
      .type('vinetokoye@gmail.com')
     cy.get('#ConfirmEmail').clear()
      .type('vinetokoye@gmail.com')
     cy.get('#Username').clear()
      .type('Adanri')
     cy.get('#check-availability-button')
      .should('be.visible')
      .click()
      

    
    



})
    
})
  

