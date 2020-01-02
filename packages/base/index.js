const { rules } = require('../shared')

module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier'],
  plugins: ['import', 'prettier'],
  rules,
  env: {
    node: true,
  },
}
