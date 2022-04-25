module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
