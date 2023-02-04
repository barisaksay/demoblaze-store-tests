export class StorePage {
  //navigates to store homepage
  navigate() {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get("#cat").should("have.text", "CATEGORIES");
  }

  //logins with correct credentials
  login(username, password) {
    cy.get("[class='nav-link']").contains("Log in").click();
    cy.wait(1000);
    cy.get("[id='loginusername']").type(username);
    cy.get("[id='loginpassword']").type(password);
    cy.get(".modal-footer button[onclick='logIn()']").click();
    //below is verification:  should this line be taken out of the prototype and used in the test
    //file directly for better usability of the prototype ?
    cy.get("a[data-target='#signInModal']")
      .contains("Sign up")
      .should("not.be.visible");
  }

  //logs out a logged in user
  logout() {
    cy.get("a[onclick='logOut()']").contains("Log out").click();

    //verification below
    cy.get("a[onclick='logOut()']")
      .contains("Log out")
      .should("not.be.visible");
  }

  //clicks on an item
  clickOnItem(itemIndex) {
    cy.get(".card > a").eq(itemIndex).click();
    cy.contains("Add to cart").should("have.text", "Add to cart");
  }

  //add item to cart
  addToCart() {
    cy.get("a").contains("Add to cart").click();
  }

  //select category
  selectCategory(categoryName) {
    cy.get("a.list-group-item").contains(categoryName).click();
    //verification: takes the name of the category entered,converts to lowercase and removes the last char
    //Since <p> tag ought to contain the name of the category but may not in plural form.
    categoryName = categoryName
      .toLowerCase()
      .substring(0, categoryName.length - 1);
    //there are multiple elements with .card-text class. Rather than changing the locator,
    //eq is chained and located the first element with .card-text and verified it contains the name entered.
    cy.get(".card-text").eq(0).should("contain.text", categoryName);
  }

  //go to next page
  goToNext() {
    cy.get("#next2").contains("Next").click();
  }

  //go to previous page
  goToPrevious() {
    cy.get("#prev2").contains("Previous").click();
  }

  //go to cart
  goToCart(){
    cy.contains("Cart").click();
    cy.get("h2").contains("Products").should("be.visible");
    //alternatively;  cy.contains("Total")

  }

  //place order
  placeOrder(){

  }
}
