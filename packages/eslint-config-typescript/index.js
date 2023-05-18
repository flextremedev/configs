module.exports = {
  extends: ["@flextremedev/eslint-config"],
  overrides: [
    {
      files: ["*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: ["packages/*/tsconfig.json", "tsconfig.json"],
          },
        },
      },
    },
  ],
};
