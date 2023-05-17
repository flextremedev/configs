module.exports = {
  extends: ["@flextremedev/eslint-config"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts?(x)"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowTypedFunctionExpressions: true },
        ],
        "@typescript-eslint/prefer-interface": "off",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
    },
  ],
};
