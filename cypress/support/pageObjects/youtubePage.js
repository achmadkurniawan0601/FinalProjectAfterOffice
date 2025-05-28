class YoutubePage {
  goToTrendingMovies() {
    cy.get(
      ":nth-child(4) > #items > :nth-child(1) > #endpoint > tp-yt-paper-item.style-scope",
      { timeout: 10000 }
    ).click();
    cy.get(".yt-tab-shape-wiz__tab--last-tab", { timeout: 10000 }).click();
  }

  selectTrendingVideoByIndex(index) {
    cy.get(
      ":nth-child(3) > #dismissible > ytd-thumbnail.style-scope > #thumbnail > #overlays > ytd-thumbnail-overlay-time-status-renderer.style-scope > .thumbnail-overlay-badge-shape > .badge-shape-wiz > .badge-shape-wiz__text"
    ).click();
  }

  assertVideoTitleAndChannel({ expectedTitle, expectedChannel }) {
    cy.get("#above-the-fold h1 .style-scope").should(
      "have.text",
      expectedTitle
    );
    cy.get("#upload-info #channel-name #text").should(
      "have.text",
      expectedChannel
    );
  }
}

export default new YoutubePage();
