/// <reference types="cypress"/>

import { StorePage } from "../page objects/demoblaze-store.cy";

describe("demoblaze store test suite", () => {
  const storePage = new StorePage();
  
  const username = "QA-test";
  const password = "!12BN";

  it("should go to home page", () => {
    storePage.navigate();
  });

  it("should login", () => {
    storePage.navigate();
    storePage.login(username, password);
  });

  it("should log out a logged in user", () => {
    storePage.navigate();
    storePage.login(username, password);
    //wait command is used just in order to wait for page to reload after the login action.
    //Therefore acting as a prevention against possibılty of failing the logOut action due to not being
    //able to find the LogOut button.
    cy.wait(2000)
    storePage.logout();
  });

  it("should be able to send contact message", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#cat").should("have.text", "CATEGORIES");
    cy.get("a[class='nav-link']").contains("Contact").click();
    cy.wait(1000);

    cy.get("#recipient-email").type("test-user@email.com");
    cy.get("#recipient-name").type("test-name");
    cy.get("#message-text").type("test-msg");
    cy.get("button").contains("Send message").click();
  });

  it("should go to cart", () => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#cat").should("have.text", "CATEGORIES");
    cy.contains("Cart").click();
    cy.get("h2").contains("Products").should("be.visible");
  });

  it("should click on a product", () => {
    storePage.navigate();
    storePage.clickOnItem(1);
  });

  it("should add the selected item to the cart",()=>{
    storePage.navigate()
    storePage.clickOnItem(1)
    storePage.addToCart()
  });

  it("should change category",()=>{
    storePage.navigate()
    storePage.selectCategory("Laptops")
  })
});