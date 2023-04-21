import HomePage from "../src/components/HomePage";

describe("HomePage", () => {
  it("displays all headings", () => {
    cy.mount(HomePage);
    cy.get("h1").should("contain", "Stocks");
    cy.get("table th").should("contain", "Name");
    cy.get("table th").should("contain", "Ticker");
    cy.get("table th").should("contain", "Price");
    cy.get("table th").should("contain", "Change");
  });
});
