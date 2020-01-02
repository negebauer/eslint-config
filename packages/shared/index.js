module.exports = {
  rules: {
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/__stories__/*',
          '.storybook/*.js',
          '**/*.test.js',
          '**/*.stories.jsx',
        ],
      },
    ],
  },
}
