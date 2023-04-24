import CreatePortfolio from "../src/components/CreatePortfolio";

describe("CreatePortfolio", () => {
  it("renders", () => {
    cy.mount(CreatePortfolio);
  });
});
