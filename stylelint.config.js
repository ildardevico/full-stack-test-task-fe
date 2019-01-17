module.exports = {
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  rules: {
    'no-descending-specificity': null,
    'at-rule-name-case': 'lower',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['/.*/'],
      },
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['after-same-name', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'inside-block'],
      },
    ],
    'block-no-empty': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-whitespace-after': 'always',
    indentation: [
      2,
      {
        indentInsideParens: 'once-at-root-twice-in-block',
      },
    ],
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    // for prettier
    'function-comma-newline-after': null,
    'function-comma-newline-before': null,
    'function-comma-space-after': null,
    'function-comma-space-before': null,
    'function-max-empty-lines': null,
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': null,
    // prettier doesnt care about this space lets keep it here
    // "function-whitespace-after": "always"|"never",
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': null,
    'value-list-comma-space-before': null,
    'value-list-max-empty-lines': null,
    // this is fixable but lets keep it
    // 'custom-property-empty-line-before': 'never'
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': null,
    'declaration-block-semicolon-newline-after': null,
    'declaration-block-semicolon-newline-before': null,
    'declaration-block-semicolon-space-after': null,
    'declaration-block-semicolon-space-before': null,
    // prettier always adds the trailing semicolon
    'declaration-block-trailing-semicolon': null,
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,
    'selector-attribute-brackets-space-inside': 'never',
    // prettier doesnt care about this space
    // 'selector-attribute-operator-space-after': 'never'
    // 'selector-attribute-operator-space-before': 'never'
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-list-comma-newline-after': null,
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': null,
    'selector-list-comma-space-before': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',
    // prettier doesnt care about this space
    // 'media-feature-range-operator-space-after': 'always',
    // 'media-feature-range-operator-space-before': 'always'
    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': 'always',
    'at-rule-semicolon-newline-after': null,
    'at-rule-semicolon-space-before': 'never',
    // prettier doesnt care about this whitespace
    // 'comment-whitespace-inside': 'always'

    // debatable ( this also checks comments which prettier doesnt care)
    'max-empty-lines': null,
    'no-eol-whitespace': null,
  },
};
