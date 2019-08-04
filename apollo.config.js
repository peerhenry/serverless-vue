const path = require('path')

// Load .env files
/* const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env')
const env = loadEnv([
  path.resolve(__dirname, '.env'),
  path.resolve(__dirname, '.env.local'),
]) */

module.exports = {
  client: {
    // service: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    service: 'my-service-name',
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}'],
    localSchemaFile: path.resolve(__dirname, './src/schema.graphql'),
  },
  service: {
    // name: env.VUE_APP_APOLLO_ENGINE_SERVICE,
    name: 'my-service-name',
    localSchemaFile: path.resolve(__dirname, './src/schema.graphql'),
  },
  /*engine: {
    endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
    apiKey: env.VUE_APP_APOLLO_ENGINE_KEY,
  },*/
}
