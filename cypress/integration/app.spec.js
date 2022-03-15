describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("Navigation", () => {
  it("should navigate to the first blog page", () => {
    cy.visit("/");
    cy.get('a[href*="/posts/how-this-is-start"]').click();
    // waiting for first time compile...
    cy.wait(3000);
    cy.url().should("include", "/posts/how-this-is-start");
    cy.get("h1").contains("Back to the time when it was begin");
  });
});
