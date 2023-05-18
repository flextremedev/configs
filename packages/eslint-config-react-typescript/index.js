const eslintConfigReact = require("@flextremedev/eslint-config-react");

module.exports = {
  ...eslintConfigReact,
  extends: [
    "@flextremedev/eslint-config-typescript",
    ...eslintConfigReact.extends.slice(1),
  ],
};
