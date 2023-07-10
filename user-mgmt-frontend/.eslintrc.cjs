/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'es5',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
  'import/resolver': {
    node: {
      paths: [path.resolve(__dirname, '')],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    typescript: {
      project: path.resolve(__dirname, './tsconfig.json'),
    },
  },
};
