describe ("navigate to nopcommerce url", function () {

    it("it should navigate to nopcommerce url", function () 
    
    {   
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get("#Email").clear().type("admin@yourstore.com").click()
        cy.get("#Password").clear().type("admin").click()
        cy.get("#RememberMe").click()
        cy.get(".button-1").click()
    
    
    })
})