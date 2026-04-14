# @singlepixellab/eslint-config

The ESLint rules and configs used by Single Pixel Lab.

## Requirements

- Node.js ≥ 18
- ESLint ≥ 9
- TypeScript ≥ 3.3.1

## Usage

Install package

```
npm install -dev @singlepixellab/eslint-config eslint
```

This package provides a default configuration as well as modular rule sets that can be composed as needed.

### Default configuration

You can use the full configuration directly:

```js
import config from "@singlepixellab/eslint-config";

export default config;
```

### Modular configurations

Each rule set can also be imported individually using subpath exports.

```js
import react from "@singlepixellab/eslint-config/react";
import styles from "@singlepixellab/eslint-config/styles";

export default [...styles, ...react];
```

Available modules:

| Module     | Import                                     | Description                    |
| ---------- | ------------------------------------------ | ------------------------------ |
| Core       | `@singlepixellab/eslint-config/core`       | Base ESLint rules              |
| Ignore     | `@singlepixellab/eslint-config/ignores`    | Default ignore patterns        |
| Import     | `@singlepixellab/eslint-config/imports`    | Import ordering and validation |
| JSDoc      | `@singlepixellab/eslint-config/jsdoc`      | JSDoc linting                  |
| Prettier   | `@singlepixellab/eslint-config/prettier`   | Prettier integration           |
| React      | `@singlepixellab/eslint-config/react`      | React and Hooks rules          |
| Style      | `@singlepixellab/eslint-config/styles`     | Stylistic rules                |
| TypeScript | `@singlepixellab/eslint-config/typescript` | TypeScript linting             |

### Named exports

Alternatively, the same configurations can be imported from the package entry.

```js
import { reactConfig, stylesConfig } from "@singlepixellab/eslint-config";

export default [...stylesConfig, ...reactConfig];
```

Named exports are provided for convenience, while subpath imports are generally recommended for clarity and tree-shaking.

## VS Code

- Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code: `dbaeumer.vscode-eslint`
- To run ESLint fix command (i.e. eslint --fix) whenever a file is saved, add the following config in the `settings.json` file:
  ```
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
  }
  ```
