// https://docs.cypress.io/api/introduction/api.html

describe('Navbar', () => {
  it('can navigate to About page', () => {
    cy.visit('/')
    const secondLink = cy.get('#nav>a').eq(1)
    expect(secondLink.href).to.equal('/about')
  })
})