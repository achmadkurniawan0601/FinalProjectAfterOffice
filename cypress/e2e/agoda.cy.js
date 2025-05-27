describe("Agoda", () => {
  it("Pesan Tiket Pesawat", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    cy.visit(Cypress.env("agoda_url"));
    cy.get("#tab-flight-tab").click();
    cy.get("#flight-origin-search-input").type("Jakarta");
    cy.get('[data-text="Soekarno-Hatta International Airport"]').click();
    cy.get("#flight-destination-search-input").type("Singapore");
    cy.get('[data-text="Singapore Changi Airport"]').click();
    cy.get(
      '[aria-label="Tue May 27 2025 "] > .a5d86-box > .PriceSurgePicker-Day__container > .PriceSurgePicker-Day__circle'
    ).click();
    cy.get('[data-test="SearchButtonBox"]').click();
    cy.get(
      ':nth-child(1) > [data-testid="web-refresh-flights-card"] > .a5d86-px-0 > [data-testid="flightCard-flight-detail"]'
    ).click();
    cy.get(".a5d86-bg-product-primary").click();
    cy.get('[data-testid="contact.contactFirstName"]').type("John");
    cy.get('[data-testid="contact.contactLastName"]').type("Doe");
    cy.get('[data-testid="contact.contactEmail"]').type("JohnDoe@mail.com");
    cy.get(
      '[data-testid="contact.contactPhoneNumber-PhoneNumberDataTestId"]'
    ).type("1234567890");
    cy.get('[data-testid="0"]').click();
    cy.get('[data-testid="flight.forms.i0.units.i0.passengerFirstName"]').type(
      "John"
    );
    cy.get('[data-testid="flight.forms.i0.units.i0.passengerLastName"]').type(
      "Doe"
    );
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId"]'
    ).type("30");
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]'
    ).click();
    cy.get(
      ":nth-child(1) > label > .a5d86-bg-generic-base-transparent"
    ).click();
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId"]'
    ).type("2000");
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerNationality"]'
    ).click();
    cy.get(
      ":nth-child(1) > label > .a5d86-bg-generic-base-transparent"
    ).click();
    // Passport details
    // cy.get('[data-testid="flight.forms.i0.units.i0.passportNumber"]').type(
    //   "312312"
    // );
    // cy.get(
    //   '[data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]'
    // ).click();
    // cy.get(
    //   ":nth-child(1) > label > .a5d86-bg-generic-base-transparent"
    // ).click();
    // cy.get(
    //   '[data-testid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]'
    // ).type("30");
    // cy.get(
    //   '[data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]'
    // ).click();
    // cy.get(
    //   ":nth-child(1) > label > .a5d86-bg-generic-base-transparent"
    // ).click();
    // cy.get(
    //   '[data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]'
    // ).type("2026");
    cy.contains("Continue to add-ons").click();
    cy.get(".a5d86-flex-wrap > :nth-child(1) > .a5d86-box").should(
      "contain.text",
      "21:50 - 00:50"
    );
  });
});
