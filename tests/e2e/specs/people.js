describe('People page', () => {
  it('should be visible after login', () => {
    cy.loginTo('/people')
    cy.url().should('include', '/people')
  })
})
