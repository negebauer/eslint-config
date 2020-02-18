const { env, rules } = require('@negebauer/eslint-config-shared')

module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier'],
  plugins: ['import', 'prettier'],
  rules,
  env: {
    ...env,
    node: true,
  },
}
