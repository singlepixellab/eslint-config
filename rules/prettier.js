import eslintPluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: "spl/prettier",
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "warn",

      // Rules to disable in favor of prettier
      "prefer-arrow-callback": "off",
      "arrow-body-style": "off",
    },
  },
];
