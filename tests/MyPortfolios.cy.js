import MyPortfolios from "../src/components/MyPortfolios";

describe("MyPortfolios", () => {
  beforeEach(() => {
    cy.mount(MyPortfolios, {
      props: {
        portfolioName: "My new portfolio",
      },
    });
  });

  it("displays name of new portfolio", () => {
    cy.get("div h2").should("contain", "My new portfolio");
  });
});
