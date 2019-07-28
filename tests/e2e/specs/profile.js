describe('Profile page', () => {
  it('should be visible after login', () => {
    cy.loginTo('/profile')
    cy.url().should('include', '/profile')
  })

  it('should do another', () => {
    cy.loginTo('/profile')
    cy.url().should('include', '/profile')
  })
})
