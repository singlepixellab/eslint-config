import tsEslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    name: "spl/typescript",
    files: ["**/*.{ts,tsx,mts,cts}"],
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",

      // Ensure that all explicitly declared properties are actually used
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
