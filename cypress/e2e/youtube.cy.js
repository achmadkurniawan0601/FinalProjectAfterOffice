import YoutubePage from "../support/pageObjects/youtubePage";

describe("Youtube Movies", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("youtube_url"));
  });

  it("Watch Video Trending", () => {
    cy.viewport(1440, 1032);

    YoutubePage.goToTrendingMovies();
    YoutubePage.selectTrendingVideoByIndex(3);
    YoutubePage.assertVideoTitleAndChannel({
      expectedTitle: "Jalan Pulang - Official Trailer",
      expectedChannel: "CINEMA 21",
    });
  });
});
