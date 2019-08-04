import auth0 from 'auth0-js'
import EventEmitter from 'events'

const isTest = process.env.NODE_ENV === 'test'
const auth_domain = 'dev-xoxu0sy8.eu.auth0.com'
const cliend_id = isTest
  ? 'L6MT6oqC1vVpSijQibvbDJzQrUcEFyZw'
  : 'xcG9E98vP0baX3S7pbGPhaFsqt72Ytpa'

const webAuth = new auth0.WebAuth({
  domain: auth_domain,
  redirectUri: `${window.location.origin}/auth-callback`,
  clientID: cliend_id,
  responseType: 'id_token',
  scope: 'openid profile email',
})

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const localStorageLoggedInKey = 'loggedIn'
const loginEvent = 'loginEvent'

class AuthService extends EventEmitter {
  idToken = null
  profile = null
  tokenExpiry = null

  // Starts the user login flow
  login(customState) {
    webAuth.authorize({
      appState: customState,
    })
  }

  // Handles the callback request from Auth0
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      webAuth.parseHash((err, authResult) => {
        if (err) {
          reject(err)
        } else {
          this.localLogin(authResult)
          resolve(authResult.idToken)
        }
      })
    })
  }

  localLogin(authResult) {
    this.idToken = authResult.idToken
    this.profile = authResult.idTokenPayload
    // Convert the JWT expiry time from seconds to milliseconds
    this.tokenExpiry = new Date(this.profile.exp * 1000)
    localStorage.setItem(localStorageLoggedInKey, 'true')
    this.emit(loginEvent, {
      loggedIn: true,
      profile: authResult.idTokenPayload,
      state: authResult.appState || {},
    })
  }

  renewTokens() {
    return new Promise((resolve, reject) => {
      if (localStorage.getItem(localStorageLoggedInKey) !== 'true') {
        return reject('Not logged in')
      }
      webAuth.checkSession({}, (err, authResult) => {
        if (err) {
          reject(err)
        } else {
          this.localLogin(authResult)
          resolve(authResult)
        }
      })
    })
  }

  logOut() {
    localStorage.removeItem(localStorageLoggedInKey)
    this.idToken = null
    this.tokenExpiry = null
    this.profile = null
    webAuth.logout({
      returnTo: window.location.origin,
    })
    this.emit(loginEvent, { loggedIn: false })
  }

  isAuthenticated() {
    return (
      Date.now() < this.tokenExpiry &&
      localStorage.getItem(localStorageLoggedInKey) === 'true'
    )
  }
}

export default new AuthService()
