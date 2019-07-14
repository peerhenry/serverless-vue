describe('Profile page', () => {
  it('should not be availble if the user is not logged in', () => {
    cy.visit('/profile')
  })

  it('should be visible after login', () => {
    cy.visit('/profile')
  })
})
