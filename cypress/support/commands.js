Cypress.Commands.add("login", (username, password) => {
  cy.get("[class='nav-link']").contains("Log in").as("loginBtn").click();
  cy.wait(1000);
  cy.get("[id='loginusername']").type(username);
  cy.get("[id='loginpassword']").type(password);
  cy.get(".modal-footer button[onclick='logIn()']").click();
  //below is verification:  should this line be taken out of the helper and used in the test
  //file directly for better usability of the helper function ?
  cy.get("a[data-target='#signInModal']")
    .contains("Sign up")
    .should("not.be.visible");
});

Cypress.Commands.add("logout",()=>{
    cy.get(".nav-item").contains("a","Log out").click()
    cy.get("@loginBtn").should("be.visible")
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
