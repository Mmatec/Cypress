
describe ('Navigate to konga url and create an account', function ()
{

    it ('should create an account with valid email and password', function ()
     {
        cy.visit('https://new.konga.com/')
        cy.get('.NavbarComponent_paddings__qmVoS > .NavbarComponent_standardFont__1_yd2').click()
        cy.get('[data-testid="signUp"]').click() 
        cy.get('class="signUp_signUpCard_names__27hYw"')
        
        


    
    
    
    
    
    })


})