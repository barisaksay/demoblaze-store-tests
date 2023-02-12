//trying to add some basic custom commands
Cypress.Commands.add("login",(username,password)=>{
    cy.get("[class='nav-link']").contains("Log in").click();
    cy.wait(1000);
    cy.get("[id='loginusername']").type(username);
    cy.get("[id='loginpassword']").type(password);
    cy.get(".modal-footer button[onclick='logIn()']").click();
})

Cypress.Commands.add("logout",()=>{
    cy.get("a[onclick='logOut()']").contains("Log out").click();
})





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })