describe("Youtube Movies", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("youtube_url"));
  });
  it("Watch Video Trending", () => {
    cy.viewport(1440, 1032);
    cy.get(
      ":nth-child(4) > #items > :nth-child(1) > #endpoint > tp-yt-paper-item.style-scope"
    ).click();
    cy.get(".yt-tab-shape-wiz__tab--last-tab").click();
    cy.get(
      ":nth-child(3) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope"
    );
    cy.get(
      ":nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > #overlays > ytd-thumbnail-overlay-time-status-renderer.style-scope > .thumbnail-overlay-badge-shape > .badge-shape-wiz > .badge-shape-wiz__text"
    ).click();
    cy.get(
      "#above-the-fold > :nth-child(1) > h1.style-scope > .style-scope"
    ).should("have.text", "Superman | Official Trailer | DC");
    cy.get(
      "#upload-info > #channel-name > #container > #text-container > #text > .yt-simple-endpoint"
    ).should("have.text", "DC");
  });
});
