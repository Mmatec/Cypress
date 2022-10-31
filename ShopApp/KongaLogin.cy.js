
describe ('navigate to konga url and automate login', function ()
{
 Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
    beforeEach (function () 
    {
        cy.visit('https://new.konga.com/')
    })

    it ('should login in with valid email and vaild password', function ()

    {
        cy.get('.NavbarComponent_paddings__qmVoS > .NavbarComponent_standardFont__1_yd2').click()
        cy.get('form > :nth-child(1) > div > input').clear().type('vinetokoye@gmail.com')
        cy.get('.Password_togglePassword__3Cijq').clear().type('testing')
        cy.get('.login_button__2r9QU').click()



     it('should be unable to login in with valid email and invalid password', function ()

     {
        cy.get('.login_backWrapper__3Ss1x').should('be.visible')
        cy.get('.login_input__3kGUY').contains('Email or Phone Number')
        cy.get('.login_input__3kGUY').clear().type('vinetokoye@gmail.com')
        cy.get('.Password_togglePassword__3Cijq').clear().type('test')
        cy.get('.login_button__2r9QU').click()



     })   


    })
})