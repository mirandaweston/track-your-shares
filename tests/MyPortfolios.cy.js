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
            share: 5,
            change: "-0.25%",
          },
          {
            name: "Microsoft Corporation",
            ticker: "MSFT",
            price: 251.86,
            share: 10,
            change: "-0.52%",
          },
          {
            name: "Amazon.com, Inc.",
            ticker: "AMZN",
            price: 3399.44,
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
    cy.get("table th").should("contain", "Name");
    cy.get("table th").should("contain", "Ticker");
    cy.get("table th").should("contain", "Price");
    cy.get("table th").should("contain", "Investment");
    cy.get("table th").should("contain", "Change");
  });

  it("displays portfolio of stocks within a table", () => {
    cy.get("tbody tr").eq(0).find("td").eq(0).should("contain", "Apple Inc.");
    cy.get("tbody tr").eq(0).find("td").eq(1).should("contain", "AAPL");
    cy.get("tbody tr").eq(0).find("td").eq(2).should("contain", "135.75");
    cy.get("tbody tr").eq(0).find("td").eq(4).should("contain", "-0.25%");
  });

  it("displays correct investment for each stock", () => {
    cy.get("tbody tr").eq(0).find("td").eq(3).should("contain", "678.75");
    cy.get("tbody tr").eq(1).find("td").eq(3).should("contain", "2518.60");
    cy.get("tbody tr").eq(2).find("td").eq(3).should("contain", "3399.44");
  });
});
