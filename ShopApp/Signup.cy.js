describe ("should navigate to nopcommerce", function ()
{
it ("it should navigate to nopcommerce url", function ()
{
    cy.visit("https://demo.automationtesting.in/Register.html")
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').click()
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').click()
    cy.get('.col-md-8 > .form-control').click()
    cy.get('#eid > .form-control').click()
    cy.get(':nth-child(4) > .col-md-4 > .form-control').click()
    cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').click()
    cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input').click()
    cy.get('#checkbox1').click()
    cy.get('#checkbox3').click()
    
})
})