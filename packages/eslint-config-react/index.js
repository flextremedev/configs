module.exports = {
  extends: ["@flextremedev/eslint-config", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
