module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    quotes: ['error', 'single'], // Utiliser des guillemets simples
    'linebreak-style': ['error', 'unix'], // Enforcer LF line endings
    'no-plusplus': 'off', // Désactiver la règle pour l'opérateur ++
    'vuejs-accessibility/click-events-have-key-events': 'off', // Désactiver la règle pour les événements de clic
  },
};
