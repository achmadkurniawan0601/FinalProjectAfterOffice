import AgodaPage from "../support/pageObjects/agodaPage";

describe("Agoda", () => {
  it("Pesan Tiket Pesawat", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit(Cypress.env("agoda_url"));
    cy.viewport(1440, 1024);

    AgodaPage.goToFlightTab();
    AgodaPage.searchFlight("Jakarta", "Singapore", "2025-05-30");
    AgodaPage.selectFlightByAirline("Citilink");
    AgodaPage.fillContactDetails({
      firstName: "John",
      lastName: "Doe",
      email: "JohnDoe@mail.com",
      phone: "1234567890",
    });
    // cy.get('[data-testid="0"]').click();
    AgodaPage.fillPassengerDetails({
      firstName: "John",
      lastName: "Doe",
      dob: {
        day: "30",
        month: "January",
        year: "2000",
      },
      nationality: "Indonesia",
      passportNumber: "312312",
      passportCountry: "Indonesia",
      passportExpiry: {
        day: "30",
        month: "January",
        year: "2026",
      },
    });

    AgodaPage.verifyFlightTime("Citilink");
  });
});
