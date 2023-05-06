import MyPortfolios from "../src/components/MyPortfolios";

describe("MyPortfolios", () => {
  beforeEach(() => {
    cy.mount(MyPortfolios, {
      props: {
        portfolioName: "My new portfolio",
        portfolioStocks: [
          {
            name: "Apple Inc.",
            ticker: "AAPL",
            price: 135.75,
            investment: 100,
            share: 5,
            change: "-0.25%",
          },
          {
            name: "Microsoft Corporation",
            ticker: "MSFT",
            price: 251.86,
            investment: 500,
            share: 10,
            change: "-0.52%",
          },
          {
            name: "Amazon.com, Inc.",
            ticker: "AMZN",
            price: 3399.44,
            investment: 1000,
            share: 1,
            change: "+2.27%",
          },
        ],
      },
    });
  });

  it("displays name of new portfolio", () => {
    cy.get("div h2").should("contain", "My new portfolio");
  });

  it("displays all headings", () => {
    cy.get("table th").should("contain", "Company");
    cy.get("table th").should("contain", "Ticker");
    cy.get("table th").should("contain", "Price");
    cy.get("table th").should("contain", "Investment");
    cy.get("table th").should("contain", "Change");
  });

  it("displays portfolio of stocks within a table", () => {
    cy.get("tbody tr").eq(0).find("td").eq(0).should("contain", "Apple Inc.");
    cy.get("tbody tr").eq(0).find("td").eq(1).should("contain", "AAPL");
    cy.get("tbody tr").eq(0).find("td").eq(2).should("contain", "135.75");
    cy.get("tbody tr").eq(0).find("td").eq(5).should("contain", "-0.25%");
  });

  it("displays correct investment for each stock", () => {
    cy.get("tbody tr").eq(0).find("td").eq(3).should("contain", "100");
    cy.get("tbody tr").eq(1).find("td").eq(3).should("contain", "500");
    cy.get("tbody tr").eq(2).find("td").eq(3).should("contain", "1000");
  });

  it("displays correct share for each stock to two decimal places", () => {
    cy.get("tbody tr").eq(0).find("td").eq(4).should("contain", "1.36");
    cy.get("tbody tr").eq(1).find("td").eq(4).should("contain", "0.5");
    cy.get("tbody tr").eq(2).find("td").eq(4).should("contain", "3.4");
  });
});
