module.exports = {
  env: { browser: true, jest: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": "error",
    "no-implicit-coercion": "error",
    "import/first": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  ],
};
