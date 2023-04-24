import MyPortfolios from "../src/components/MyPortfolios";

describe("MyPortfolios", () => {
  beforeEach(() => {
    cy.mount(MyPortfolios, {
      props: {
        portfolioName: "My new portfolio",
        portfolioStocks: [
          { name: "Apple Inc.", ticker: "AAPL", price: 145.12, change: 1.2 },
        ],
      },
    });
  });

  it("displays name of new portfolio", () => {
    cy.get("div h2").should("contain", "My new portfolio");
  });

  it("displays all headings", () => {
    cy.get("table th").should("contain", "Name");
    cy.get("table th").should("contain", "Ticker");
    cy.get("table th").should("contain", "Price");
    cy.get("table th").should("contain", "Change");
  });

  it("displays new portfolio", () => {
    cy.get("table tbody tr").should("have.length", 1);
    cy.get("table td").should("contain", "Apple Inc.");
    cy.get("table td").should("contain", "AAPL");
    cy.get("table td").should("contain", "145.12");
    cy.get("table td").should("contain", "1.2");
  });
});
