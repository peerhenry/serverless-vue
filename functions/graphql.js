const { ApolloServer, gql } = require('apollo-server-lambda')

// schema
const typeDefs = gql`
  type Dossier {
    title: String
    description: String
  }
  type Query {
    hello: String
    dossiers: [Dossier]
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    dossiers: () => [
      {
        title: 'vietnam war',
        description: 'oh the horror',
      },
      {
        title: 'party',
        description: 'le party',
      },
    ],
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, // todo: use env to set false on production
  introspection: true, // problem: process.env.NODE_ENV is always production
})

exports.handler = server.createHandler()
