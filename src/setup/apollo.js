import ApolloClient from 'apollo-boost'
import Vue from 'vue'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: `${process.env.VUE_APP_NETLIFY}/graphql`,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider
