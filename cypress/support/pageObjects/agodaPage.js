class AgodaPage {
  goToFlightTab() {
    cy.get("#tab-flight-tab").click();
  }

  searchFlight(from, to, date) {
    cy.get("#flight-origin-search-input").type(from);
    cy.contains("li", from).click();
    cy.get("#flight-destination-search-input").type(to);
    cy.contains("li", to).click();
    cy.get(
      '[aria-label="Fri May 30 2025 "] > .a4cbd-box > .PriceSurgePicker-Day__container > .PriceSurgePicker-Day__circle'
    ).click();
    cy.get('[data-test="SearchButtonBox"]').click();
  }

  selectFlightByAirline(airline) {
    cy.get("[data-testid='web-refresh-flights-card']", { timeout: 20000 })
      .contains(airline)
      .parents("[data-testid='web-refresh-flights-card']")
      .first()
      .click();
    cy.get('[style="width: 104px;"] > .a5d86-bg-product-primary').click();
  }

  fillContactDetails({ firstName, lastName, email, phone }) {
    cy.get('[data-testid="contact.contactFirstName"]').type(firstName);
    cy.get('[data-testid="contact.contactLastName"]').type(lastName);
    cy.get('[data-testid="contact.contactEmail"]').type(email);
    cy.get(
      '[data-testid="contact.contactPhoneNumber-PhoneNumberDataTestId"]'
    ).type(phone);
    // cy.get('[data-testid="0"]').click();
  }

  fillPassengerDetails({
    firstName,
    lastName,
    dob,
    nationality,
    passportNumber,
    passportCountry,
    passportExpiry,
  }) {
    cy.get('[data-testid="flight.forms.i0.units.i0.passengerFirstName"]').type(
      firstName
    );
    cy.get('[data-testid="flight.forms.i0.units.i0.passengerLastName"]').type(
      lastName
    );
    cy.get('[data-testid="0"]').click();

    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId"]'
    ).type(dob.day);
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-MonthInputDataTestId"]'
    ).click();
    cy.contains("label", dob.month).click();
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId"]'
    ).type(dob.year);

    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passengerNationality"]'
    ).click();
    cy.contains("label", nationality).click();

    cy.get('[data-testid="flight.forms.i0.units.i0.passportNumber"]').type(
      passportNumber
    );
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passportCountryOfIssue"]'
    ).click();
    cy.contains("label", passportCountry).click();

    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]'
    ).type(passportExpiry.day);
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passportExpiryDate-MonthInputDataTestId"]'
    ).click();
    cy.contains("label", passportExpiry.month).click();
    cy.get(
      '[data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]'
    ).type(passportExpiry.year);

    cy.contains("Continue to add-ons").click();
  }

  verifyFlightTime(airlines) {
    cy.get(
      '[data-testid="kite-box"] > .Typographystyled__TypographyStyled-sc-j18mtu-0'
    ).should("contain.text", airlines);
  }
}

export default new AgodaPage();
