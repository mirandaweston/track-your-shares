import HomePage from "../src/components/HomePage";

describe("HomePage", () => {
  let props;

  beforeEach(() => {
    props = {
      stocks: [
        { name: "Apple Inc.", ticker: "AAPL", price: 135.75, change: -0.25 },
        {
          name: "Microsoft Corporation",
          ticker: "MSFT",
          price: 255.85,
          change: 1.2,
        },
        {
          name: "Amazon.com, Inc.",
          ticker: "AMZN",
          price: 3312.0,
          change: -5.5,
        },
        { name: "Tesla, Inc.", ticker: "TSLA", price: 725.25, change: 2.1 },
        {
          name: "Alphabet Inc.",
          ticker: "GOOGL",
          price: 2267.5,
          change: -0.75,
        },
      ],
      showModal: false,
      newPortfolioName: "",
    };

    cy.mount(HomePage, { props });
  });

  it("displays all headings", () => {
    cy.get("h1").should("contain", "Stocks");
    cy.get("table th").should("contain", "Name");
    cy.get("table th").should("contain", "Ticker");
    cy.get("table th").should("contain", "Price");
    cy.get("table th").should("contain", "Change");
  });

  it("displays all stocks", () => {
    cy.get("table tbody tr").should("have.length", stocks.length);
    stocks.forEach((stock, index) => {
      cy.get(`table tbody tr:nth-child(${index + 1}) td:nth-child(1)`).should(
        "contain",
        stock.name
      );
      cy.get(`table tbody tr:nth-child(${index + 1}) td:nth-child(2)`).should(
        "contain",
        stock.ticker
      );
      cy.get(`table tbody tr:nth-child(${index + 1}) td:nth-child(3)`).should(
        "contain",
        stock.price
      );
      cy.get(`table tbody tr:nth-child(${index + 1}) td:nth-child(4)`).should(
        "contain",
        stock.change
      );
    });
  });

  it("updates the table when the search query changes", () => {
    cy.get(".search-bar input").type("AAPL");

    cy.get("table tbody tr").should("have.length", 1);
    cy.get("table tbody tr td:nth-child(1)").should("contain", "Apple Inc.");

    cy.get(".search-bar input").clear().type("xyz");

    cy.get("table tbody tr").should("have.length", 0);
  });

  it("displays a 'Create portfolio' button", () => {
    cy.get(".create-portfolio").should("exist");
  });

  it("confirms creation of portfolio", () => {
    const newPortfolio = "My Portfolio";
    cy.get(".create-portfolio button").click().type(newPortfolio);
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Created! Now you can start adding to null");
    });
  });

  it("displays an 'Add to portfolio' button to allow user to add stock", () => {
    cy.get(".add button").should("exist");
    cy.get(".add button").eq(0).click();
  });

  it("alerts user to create a portfolio", () => {
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Please first create a portfolio");
    });

    cy.get(".add button").eq(0).click();
  });
});

const stocks = [
  { name: "Apple Inc.", ticker: "AAPL", price: 135.75, change: -0.25 },
  { name: "Microsoft Corporation", ticker: "MSFT", price: 255.85, change: 1.2 },
  { name: "Amazon.com, Inc.", ticker: "AMZN", price: 3312.0, change: -5.5 },
  { name: "Tesla, Inc.", ticker: "TSLA", price: 725.25, change: 2.1 },
  { name: "Alphabet Inc.", ticker: "GOOGL", price: 2267.5, change: -0.75 },
];
