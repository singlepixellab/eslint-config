import config from "./eslint.config.js";

export default config;

export { default as coreConfig } from "./rules/core.js";
export { default as ignoresConfig } from "./rules/ignores.js";
export { default as importsConfig } from "./rules/imports.js";
export { default as jsdocConfig } from "./rules/jsdoc.js";
export { default as prettierConfig } from "./rules/prettier.js";
export { default as reactConfig } from "./rules/react.js";
export { default as stylesConfig } from "./rules/styles.js";
export { default as typescriptConfig } from "./rules/typescript.js";
