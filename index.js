module.exports = {
  'extends': require.resolve('eslint-config-5minds-typescript/fast'),
  'rules': {
    'arrow-body-style': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    'no-new-func': ['off'],
    'no-use-before-define': ['off'],
    'operator-linebreak': ['off'],
    'require-await': ['off'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/prefer-interface': ['off']
  }
}
