it('smoke test', () => {
  cy.visit('');
  cy.contains('cypress-e2e-testing-angular app is running!');
});
