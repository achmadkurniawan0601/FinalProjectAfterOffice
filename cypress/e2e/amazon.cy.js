describe("Amazon", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("amazon_url"));
  });
  it("Checkout Chair Item", () => {
    cy.viewport(1920, 1080);
    // try {
    //   cy.get(".a-button-input").click();
    // } catch (error) {}
    cy.get("#nav-bb-search").type("chair");
    cy.get(".nav-bb-button").click();
    cy.get("#a-autoid-0-announce").click();
    cy.get("#s-result-sort-select_2").click();
    cy.contains(
      "Office Chair Leather Home Desk 360° Rotating Office Chair"
    ).click();
    cy.get("#title > #productTitle").should(
      "contain.text",
      "Office Chair Leather Home Desk 360° Rotating Office Chair"
    );
    cy.get(
      '.a-spacing-none > .a-price > [aria-hidden="true"] > .a-price-whole'
    ).should("contain.text", "39");
  });
});
