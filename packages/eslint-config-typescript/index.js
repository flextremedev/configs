module.exports = {
  extends: [
    "@flextremedev/eslint-config",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
