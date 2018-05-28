const { allRules, activeRules } = require('./rules/custom')

module.exports = {
  rules: allRules,
  configs: {
    all: {
      plugins: [
        'taro'
      ],
      parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: activeRules
    }
  }
}
