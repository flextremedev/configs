module.exports = {
  extends: [
    "@flextremedev/eslint-config",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/prefer-interface": "off",
  },
};
