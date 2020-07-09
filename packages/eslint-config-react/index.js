module.exports = {
  extends: ["../eslint-config", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": "error",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
