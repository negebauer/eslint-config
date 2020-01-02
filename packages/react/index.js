const { rules } = require('../shared')

module.exports = {
  extends: ['eslint-config-airbnb', 'react-app', 'prettier', 'prettier/react'],
  plugins: ['import', 'react', 'prettier'],
  rules,
  env: {
    browser: true,
  },
}
