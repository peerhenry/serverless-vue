module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'literal', // 'literal' to make it work with .gql files, used to be 'apollo'
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['graphql'],
}
