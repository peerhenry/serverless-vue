module.exports = {
  client: {
    service: {
      name: 'serverless-vue',
      url: `http://localhost:9000/graphql`,
    },
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
}
