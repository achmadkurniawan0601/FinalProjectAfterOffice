// File: cypress/support/pageObjects/amazonPage.js
class AmazonPage {
  searchItem(keyword) {
    cy.get("#twotabsearchtextbox").type(keyword);
    cy.get("#nav-search-submit-button").click();
  }

  sortByPriceHighToLow() {
    cy.get("#a-autoid-0-announce").click();
    cy.get("#s-result-sort-select_2").click();
  }

  selectItemByText(text) {
    cy.contains(text).click();
  }

  assertProductTitleAndPrice({ expectedTitle, expectedPrice }) {
    cy.get("#title > #productTitle").should("contain.text", expectedTitle);
    cy.get(
      ".a-spacing-none > .a-price > [aria-hidden='true'] > .a-price-whole"
    ).should("contain.text", expectedPrice);
  }
}

export default new AmazonPage();
