import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  importPlugin.flatConfigs.recommended,
  {
    name: "spl/imports",
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      // Ensures imports point to a file/module that exists, prevents broken
      // imports
      "import/no-unresolved": [
        "error",
        { commonjs: true, caseSensitive: true },
      ],

      // Ensures named imports match the exported names, avoids silent bugs
      "import/named": "error",

      // We allow missing default exports; turning this off for flexibility
      "import/default": "off",

      // Allow full namespace imports (e.g. `import * as utils from './utils'`);
      // turning this off for convenience
      "import/namespace": "off",

      // Ensures files that export something do so correctly,
      // prevents mismatched export/import errors
      "import/export": "error",

      // Prevents confusing bugs when a named export shadows the default export,
      // keeps default usage explicit
      "import/no-named-as-default": "off",

      // Avoids subtle issues when using a default export’s members as named
      // imports
      "import/no-named-as-default-member": "off",

      // Mutable exports lead to unpredictable behavior, enforcing immutability
      // improves reliability
      "import/no-mutable-exports": "error",

      // We don’t use AMD modules, this keeps code modern and avoids unsupported
      // patterns
      "import/no-amd": "error",

      // Forces imports to come first, improves code structure and consistency
      "import/first": "error",

      // Prevents multiple imports from the same module, reduces clutter
      "import/no-duplicates": "error",

      // Enforces a specific order of imports, improves readability and
      // navigation
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal", "parent", "sibling", "index"],
          ],
        },
      ],

      // Requires a newline after the import block, improves visual separation
      "import/newline-after-import": "error",

      // Disallows absolute paths in imports, enforces relative or module-based
      // paths for better portability
      "import/no-absolute-path": "error",

      // Disallows `require()` with dynamic expressions, avoids unresolvable and
      // unpredictable imports
      "import/no-dynamic-require": "error",

      // Prevents usage of Webpack-specific import syntax, makes code more
      // tool-agnostic
      "import/no-webpack-loader-syntax": "error",

      // Prevents invalid usage of default exports as named, avoids runtime
      // errors
      "import/no-named-default": "error",

      // We allow exports anywhere in a file, disabled to support flexible file
      // structure
      "import/exports-last": "off",

      // We allow default exports, disabled to allow ergonomic export patterns
      "import/no-default-export": "off",

      // We allow named exports, disabled to support modular exports
      "import/no-named-export": "off",

      // Prevents files from importing themselves, avoids logical errors and
      // infinite loops
      "import/no-self-import": "error",

      // Avoids circular dependencies, keeps module graph clean and maintainable
      "import/no-cycle": ["error", { maxDepth: "∞" }],

      // Disallows unnecessary path segments, encourages clean and readable
      // paths
      "import/no-useless-path-segments": ["error", { commonjs: true }],

      // Flags modules with exports that are unused or missing, helps maintain
      // clean and efficient code
      "import/no-unused-modules": [
        "error",
        {
          unusedExports: true,
          missingExports: true,
        },
      ],

      // Prevents mixing CommonJS-style exports with `import`, ensures
      // consistency in module style
      "import/no-import-module-exports": ["error", { exceptions: [] }],

      // Disallows imports from sibling packages using relative paths, enforces
      // proper package boundaries
      "import/no-relative-packages": "error",

      // Standardizes inline `type` specifier placement, improves consistency in
      // type-aware codebases
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],

      // Prevents empty named import blocks, avoids noise and unnecessary syntax
      "import/no-empty-named-blocks": "error",
    },
  },
];
