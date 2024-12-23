module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', bracketSpacing: true }],
    'no-multiple-empty-lines': ['error', { max: 4, maxEOF: 0 }],
    'space-before-function-paren': ['off'],
    indent: ['off'],
    curly: ['error', 'multi-line'],
  },
};
