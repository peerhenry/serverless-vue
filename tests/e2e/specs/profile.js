describe('Profile page', () => {
  /*it('should not be availble if the user is not logged in', () => {
    cy.visit('/profile')
    cy.location().should(loc => {
      expect(loc.origin).to.eq('https://dev-xoxu0sy8.eu.auth0.com')
    })
  })*/

  it('should successfully log into our app', () => {
    cy.login()
      .then(resp => resp.body)
      .then(body => {
        const { access_token, expires_in, id_token } = body
        const auth0State = {
          nonce: '',
          state: 'some-random-state',
        }
        const callbackUrl = `/auth-callback#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${
          auth0State.state
        }`
        cy.visit(callbackUrl, {
          onBeforeLoad(win) {
            win.document.cookie =
              'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State)
          },
        })
      })
  })
  /*
  it('should be visible after login', () => {
    cy.visit('/profile')
  })*/
})