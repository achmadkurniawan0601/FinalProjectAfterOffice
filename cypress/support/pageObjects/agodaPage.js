export class AgodaPage {
  searchFlight(departure, destination, date) {
    cy.get("#flight-origin").clear().type(departure);
    cy.get("#flight-destination").clear().type(destination);
    cy.get("#flight-departure-date").click();
    cy.get(`[data-date='${date}']`).click();
    cy.get("#search-button").click();
  }

  selectEarliestFlight(airline) {
    cy.get(".flight-result", { timeout: 15000 })
      .contains(airline)
      .parents(".flight-result")
      .first()
      .within(() => {
        cy.get(".departure-time").invoke("text").as("selectedDeparture");
        cy.get(".arrival-time").invoke("text").as("selectedArrival");
        cy.get(".total-price").invoke("text").as("selectedPrice");
        cy.get("button.select-flight").click();
      });
  }

  fillPassengerDetails(firstName, lastName, email) {
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type(email);
    cy.get("#confirm-passenger").click();

    cy.wrap(`${firstName} ${lastName}`).as("fullPassengerName");
  }

  expectPriceAndPassengerMatch() {
    cy.get("@selectedPrice").then((price) => {
      cy.get(".summary-total-price").should("contain", price.trim());
    });

    cy.get("@fullPassengerName").then((name) => {
      cy.get(".summary-passenger").should("contain", name.trim());
    });
  }

  expectDepartureAndArrivalTimeMatch() {
    cy.get("@selectedDeparture").then((depTime) => {
      cy.get(".summary-departure-time").should("contain", depTime.trim());
    });

    cy.get("@selectedArrival").then((arrTime) => {
      cy.get(".summary-arrival-time").should("contain", arrTime.trim());
    });
  }
}
