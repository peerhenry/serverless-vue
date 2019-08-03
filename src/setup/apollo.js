import ApolloClient from 'apollo-boost'
// import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'
import Vue from 'vue'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  uri: `${process.env.VUE_APP_NETLIFY}/graphql`,
})

// const apolloClient = createApolloClient({
//   httpEndpoint: `${process.env.VUE_APP_NETLIFY}/graphql`,
// })

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloProvider
