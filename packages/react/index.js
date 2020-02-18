const { env, rules } = require('@negebauer/eslint-config-shared')

module.exports = {
  extends: ['eslint-config-airbnb', 'react-app', 'prettier', 'prettier/react'],
  plugins: ['import', 'react', 'prettier'],
  rules,
  env: {
    ...env,
    browser: true,
  },
}
