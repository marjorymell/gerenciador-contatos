import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "no-console": "warn",
      "no-unused-vars": ["warn", { args: "none" }],
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
    },
  },
];
