/// <reference types="cypress"/>

describe("demoblaze store test suite",()=>{
    it("should go to home page",()=>{
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get("#cat").should("have.text","CATEGORIES")
    })

    it("should login",()=>{
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get("#cat").should("have.text","CATEGORIES")
        cy.get("[class='nav-link']").contains("Log in").click()
        cy.wait(1000)
        cy.get("[id='loginusername']").type("QA-test")
        cy.get("[id='loginpassword']").type("!12BN")
        cy.get(".modal-footer button[onclick='logIn()']").click()
        cy.get("a[data-target='#signInModal']").contains("Sign up").should("not.be.visible")
    })

    it("should be able to send contact message",()=>{
        cy.visit("https://www.demoblaze.com/index.html")
        cy.get("#cat").should("have.text","CATEGORIES")
        cy.get("a[class='nav-link']").contains("Contact").click()
        cy.wait(1000)

        cy.get("#recipient-email").type("test-user@email.com")
        cy.get("#recipient-name").type("test-name")
        cy.get("#message-text").type("test-msg")
        cy.get("button").contains("Send message").click()


    })
})