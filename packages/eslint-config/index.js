module.exports = {
  env: { browser: true, jest: true, node: true },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "error",
    "no-implicit-coercion": "error",
  },
};
