describe('Dossiers page', () => {
  it('should be visible after login', () => {
    cy.loginTo('/dossiers')
    cy.url().should('include', '/dossiers')
  })
})
