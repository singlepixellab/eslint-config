import jsdoc from "eslint-plugin-jsdoc";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: "spl/jsdoc",
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      jsdoc,
    },
  },
];
