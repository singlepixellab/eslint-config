import config from "./eslint.config";
import core from "./rules/core.js";
import ignores from "./rules/ignores.js";
import imports from "./rules/imports.js";
import jsdoc from "./rules/jsdoc.js";
import prettier from "./rules/prettier.js";
import react from "./rules/react.js";
import styles from "./rules/styles.js";

export default config;

export const configs = {
  core,
  ignores,
  imports,
  jsdoc,
  prettier,
  react,
  styles,
};
