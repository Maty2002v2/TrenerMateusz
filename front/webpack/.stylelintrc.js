/**
 * Stylelint config file
 * as configured in package.json under stylelint.extends
 *
 * @docs Stylelint https://stylelint.io/user-guide/
 * @docs StylelintWebpackPlugin: https://webpack.js.org/plugins/stylelint-webpack-plugin/
 * @docs stylelint-scss : https://github.com/kristerkari/stylelint-scss
 * @since 1.0.0
 */

module.exports = {
  plugins: ['stylelint-scss'],
  rules: {
    'no-empty-source': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // BEM rule
    "selector-class-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__([a-z0-9]+(?:-[a-z0-9]+)*))?(?:--([a-z0-9]+(?:-[a-z0-9]+)*))?$"
  },
};
