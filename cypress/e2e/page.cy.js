describe("page test", () => {
  it("user can change the description", () => {
    // testo kunas
    cy.visit("http://localhost:3003");

    const desc = "desc";
    const input = "input";

    cy.findByTestId(desc).should("have.text", "initial description");

    const newDesc = "new description";

    cy.findByTestId(input).type(newDesc);
    cy.findByText("change").click();

    cy.findByTestId(desc).should("have.text", newDesc);
    cy.findByTestId(input).should("have.value", "");
  });
});
