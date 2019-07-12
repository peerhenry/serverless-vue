// https://docs.cypress.io/api/introduction/api.html

describe('Navbar', () => {
  it('second link has href to /about', () => {
    cy.visit('/')
    const secondLink = cy.get('#nav>a').eq(1)
    secondLink.should('have.attr', 'href').then(href => {
      expect(href).to.equal('/about')
    })
  })

  it('can navigate to About page', () => {
    cy.visit('/')
    const secondLink = cy.get('#nav>a').eq(1)
    secondLink.click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/about')
    })
  })
})
