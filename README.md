# @singlepixellab/eslint-config

The ESLint rules and configs used by Single Pixel Lab.

## Usage

1. Install package
   ```
   npm install -dev @singlepixellab/eslint-config eslint
   ```

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
