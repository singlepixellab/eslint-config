import ignores from "./rules/ignores.js";
import core from "./rules/core.js";
import imports from "./rules/imports.js";
import react from "./rules/react.js";
import prettier from "./rules/prettier.js";
import jsdoc from "./rules/jsdoc.js";
import styles from "./rules/styles.js";
import typescript from "./rules/typescript.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Global ignores should always be first
  ...ignores,

  ...core,

  // eslint-plugin-import
  ...imports,

  // eslint-plugin-jsdoc
  ...jsdoc,

  // eslint-plugin-react, eslint-plugin-react-hooks etc
  ...react,

  // @typescript-eslint
  ...typescript,

  // styles: @stylistic/eslint-plugin
  ...styles,

  // Prettier should be last to have the opportunity to override other configs
  ...prettier,
];
