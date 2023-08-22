module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  env: { node: true, jest: true },
  ignorePatterns: ['.elintrc.js'],
};
