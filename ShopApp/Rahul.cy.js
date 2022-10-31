describe ("My first test suite", function ()
{
it ("My first test practice with rahul shetty", function ()
{

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("ca")
    cy.wait(3000)
    cy.get('.product').should('have.length',5)
    cy.get(".product:visible").should("have.length",4)
    //parent child chaining
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each(($el, index, $list) => {
    const textVeg=$el.find('.product-name').text()
    if (textVeg.include ('Cashews'))
    {
        cy.wrap ($el).find('button').click()
    }

})
     cy.get('brand greenLogo')






})

})
