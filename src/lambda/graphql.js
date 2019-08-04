const { ApolloServer, gql } = require('apollo-server-lambda')
// const typeDefs = require('@/schema.graphql')

const typeDefs = gql`
  type Dossier {
    id: Int!
    title: String
    description: String
  }

  type Query {
    hello: String
    dossiers: [Dossier]
    dossier(id: Int!): Dossier
  }
`

const dossiers = [
  {
    id: 1,
    title: 'vietnam war',
    description: 'oh the horror',
  },
  {
    id: 2,
    title: 'party',
    description: 'le party',
  },
]

// resolvers receive parameters: (obj, args, context, info)
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    dossiers: () => dossiers,
    dossier: (obj, args) => {
      return dossiers.find(d => d.id === args.id)
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, // todo: use env to set false on production, however...
  introspection: true, // problem: process.env.NODE_ENV is always production
})

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT'],
    // credentials: true,
  },
})
