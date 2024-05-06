import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat()
export default [
  ...compat.config(
    {
      extends: ['plugin:cypress/recommended'],
      rules: {
        'cypress/no-unnecessary-waiting': 'off'
      }
    })
]