describe ("Navigate to nopcommerce login page", function ()
//Negative Test
    {
        it ("it should navigate invalid email and valid password", function ()
         {
        cy.visit("https://admin-demo.nopcommerce.com/login")
        cy.get('#Email').clear().type("admin@yourstore123.com")
        cy.get('#Password').clear().type("admin")
        cy.get('#RememberMe').click()
        cy.get('.button-1').click() 
    })

 it("It should navigate valid email and invalid password", function () 
    {
       cy.visit("https://admin-demo.nopcommerce.com/login")
       cy.get('#Email').clear().type("admin@yourstore.com")
       cy.get('#Password').clear().type("admin123")
       cy.get('#RememberMe').click()
       cy.get('.button-1').click()

    })

    //Empty Fields
    it("it should navigate empty fields", function () 
    {
        cy.visit ("https://admin-demo.nopcommerce.com/login")
        cy.get('#Email').clear()
        cy.get('#Password').clear()
        cy.get('#RememberMe').click()
        cy.get('.button-1').click() 
    }) 
   
})


