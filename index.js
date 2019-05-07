module.exports = {
  'extends': require.resolve('eslint-config-5minds-typescript/fast'),
  'rules': {
    'import/no-extraneous-dependencies': ['off'],
    'no-new-func': ['off'],
    'operator-linebreak': ['off'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn']
  }
}
