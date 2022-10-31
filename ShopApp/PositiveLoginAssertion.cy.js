
describe  ("Navigate to shoptopup Url Link", function () 
{
   //Positive Test
    it ("it should navigate shoptopup Url", function () 
    {  
        cy.visit ("https://admin-demo.nopcommerce.com/login")
        cy.url().should ("include","commerce")  //Validate url
        cy.title().should("eq",'Your store. Login') // Validate page title
        cy.contains('area') // validate page content

        cy.get('#Email').should("be.visible").should("be.enabled").clear().type("admin@yourstore.com")
        cy.get('#Password').should("be.visible").should("be.enabled").clear().type("admin")
        cy.get('#RememberMe').should("be.visible").click()
        cy.get('.button-1').should("be.visible").click()
    })

})

//Assertion
//Three validation=Page title, page content, and page url