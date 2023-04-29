import SearchBar from "../src/components/SearchBar";

describe("SearchBar", () => {
  beforeEach(() => {
    cy.mount(SearchBar);
  });

  it("renders a search input bar with given placeholder", () => {
    cy.get(".search-bar input").should(
      "have.attr",
      "placeholder",
      "Search by name"
    );
  });

  it("updates input value with user input", () => {
    const inputText = "test search query";
    cy.get(".search-bar input").type(inputText).should("have.value", inputText);
  });
});
