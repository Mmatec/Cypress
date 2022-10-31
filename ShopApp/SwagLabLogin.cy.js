
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe ("should navigate to  swaglab", function ()
{
it ("use should be able to login", function ()
{
    cy.visit("https://sandbox.m.shoptopup.com/onboarding")
    
    //cy.get('[data-test="username"]').type('standard_user')
    //cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="login-button"]').click
    
})
})