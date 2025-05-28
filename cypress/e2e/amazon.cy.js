// File: cypress/e2e/amazon.cy.js
import AmazonPage from "../support/pageObjects/amazonPage";

describe("Amazon", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("amazon_url"));
  });

  it("Checkout Chair Item", () => {
    cy.viewport(1920, 1080);

    AmazonPage.searchItem("chair");
    AmazonPage.sortByPriceHighToLow();
    AmazonPage.selectItemByText(
      "Office Chair Leather Home Desk 360° Rotating Office Chair"
    );
    AmazonPage.assertProductTitleAndPrice({
      expectedTitle:
        "Office Chair Leather Home Desk 360° Rotating Office Chair",
      expectedPrice: "39",
    });
  });
});
