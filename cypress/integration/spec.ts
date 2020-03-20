describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show the app title', () => {
    cy.contains('cypress-e2e-testing-angular');
  });

  it('should show generate component command by default', () => {
    cy.get('.terminal').contains('ng generate component xyz');
  });

  it('should show the proper command when Angular Material is selected', () => {
    cy.contains('Angular Material').click();
    cy.get('.terminal').contains('ng add @angular/material');
  });
});
