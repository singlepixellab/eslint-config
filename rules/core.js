import js from "@eslint/js";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: "eslint/js/recommended",
    ...js.configs.recommended,
  },
  {
    name: "spl/base",
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        document: "readonly",
        navigator: "readonly",
        window: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "warn",
      reportUnusedInlineConfigs: "warn",
    },
    rules: {
      // Allow implicit return in array callbacks for brevity and flexibility
      "array-callback-return": ["error", { allowImplicit: true }],

      // Enforce block scoping to prevent variable hoisting issues
      "block-scoped-var": "error",

      // Disable capitalized comments for flexibility
      "capitalized-comments": "off",

      // Enforce class methods to use `this`, unless explicitly exempted
      "class-methods-use-this": ["error", { exceptMethods: [] }],

      // Disable complexity rule to allow freedom in control flow design
      "complexity": ["off", 20],

      // Require return statements for all code paths to avoid undefined returns
      "consistent-return": "error",

      // Enforce consistent brace style for all control statements
      "curly": ["error", "multi-line"],

      // Enforce calling super() in constructors to ensure proper initialization
      "constructor-super": "error",

      // Require a default case in switch statements unless explicitly commented
      "default-case": ["error", { commentPattern: "^no default$" }],

      // Enforce placing default case last for readability
      "default-case-last": "error",

      // Require default parameters to be last for consistency
      "default-param-last": "error",

      // Prefer dot notation for cleaner, more readable code
      "dot-notation": ["error", { allowKeywords: true }],

      // Enforce strict equality but allow loose null comparisons for
      // convenience
      "eqeqeq": ["error", "always", { null: "ignore" }],

      // Requires function names to match the name of the variable or property
      // to which they are assigned
      "func-name-matching": [
        "off",
        "always",
        {
          includeCommonJSModuleExports: false,
          considerPropertyDescriptor: true,
        },
      ],

      // Require function expressions to have a name
      "func-names": "warn",

      // Enforces use of function declarations or expressions
      // TODO: enable
      "func-style": ["off", "expression"],

      // Getter must always return a value to ensure correctness
      "getter-return": ["error", { allowImplicit: true }],

      // Enforce grouping of getter/setter pairs for clarity and maintenance
      "grouped-accessor-pairs": "error",

      // Disallow specified identifiers
      "id-denylist": "off",

      // This option enforces minimum and maximum identifier lengths
      "id-length": "off",

      // Require identifiers to match the provided regular expression
      "id-match": "off",

      // Require or disallow logical assignment logical operator shorthand
      "logical-assignment-operators": [
        "off",
        "always",
        {
          enforceForIfStatements: true,
        },
      ],

      // Specify the maximum depth that blocks can be nested
      "max-depth": ["off", 4],

      // Specify the max number of lines in a file
      "max-lines": [
        "off",
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // Enforce a maximum function length
      "max-lines-per-function": [
        "off",
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],

      // Specify the maximum depth callbacks can be nested
      "max-nested-callbacks": "off",

      // Limits the number of parameters that can be used in the function
      // declaration
      "max-params": ["off", 3],

      // Specify the maximum number of statement allowed in a function
      "max-statements": ["off", 10],

      // Require a capital letter for constructors
      "new-cap": [
        "error",
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: false,
          capIsNewExceptions: [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List",
          ],
        },
      ],

      // Warn on `alert` usage instead of error to allow debugging in
      // development
      "no-alert": "warn",

      // Disallow use of the Array constructor
      "no-array-constructor": "error",

      // Disallow async functions with promise constructors — confusing and
      // unnecessary
      "no-async-promise-executor": "error",

      // Avoid using `await` in loops to prevent performance issues
      "no-await-in-loop": "error",

      // Disallow use of bitwise operators
      "no-bitwise": "error",

      // Disallow use of the continue statement
      "no-continue": "error",

      // Disallow use of deprecated `arguments.caller` and `callee`
      "no-caller": "error",

      // Disallow case declarations inside `switch` for predictable scoping
      "no-case-declarations": "error",

      // Disallow assigning to classes to prevent errors
      "no-class-assign": "error",

      // Catch unnecessary checks like `x !== -0`
      "no-compare-neg-zero": "error",

      // Disallow assignments in conditionals to prevent bugs
      "no-cond-assign": ["error", "always"],

      // Warn on console except allow console.error for error logging
      "no-console": ["warn", { allow: ["error"] }],

      // Disallow reassigning const variables to prevent bugs
      "no-const-assign": "error",

      // Avoid ambiguous binary conditions like `a && b === c`
      "no-constant-binary-expression": "error",

      // Warn on conditions that are always truthy/falsy to avoid logic errors
      "no-constant-condition": "warn",

      // Disallow constructors that return values for clarity and correctness
      "no-constructor-return": "error",

      // Disallow invalid characters in regex
      "no-control-regex": "error",

      // Prevent `debugger` statements from slipping into production
      "no-debugger": "error",

      // Disallow duplicate function arguments to avoid parameter overwriting
      // bugs
      "no-dupe-args": "error",

      // Disallow duplicate class members to avoid conflicts
      "no-dupe-class-members": "error",

      // Disallow duplicate else-if conditions to prevent unreachable code
      "no-dupe-else-if": "error",

      // Disallow duplicate keys in objects to avoid unexpected property
      // overwrites
      "no-dupe-keys": "error",

      // Disallow duplicate switch cases to prevent unreachable code
      "no-duplicate-case": "error",

      // Disallow `else` after `return` to reduce unnecessary nesting
      "no-else-return": ["error", { allowElseIf: false }],

      // Disallow empty blocks to catch incomplete or missing code
      "no-empty": "error",

      // Disallow empty character classes in regex to prevent syntax errors
      "no-empty-character-class": "error",

      // Allow empty functions only when they serve as placeholders or overrides
      "no-empty-function": [
        "error",
        { allow: ["arrowFunctions", "functions", "methods"] },
      ],

      // Disallow empty object/array patterns to avoid confusion
      "no-empty-pattern": "error",

      // Allow `== null` for loose null checks (undefined or null)
      "no-eq-null": "off",

      // Disallow `eval()` for security and performance reasons
      "no-eval": "error",

      // Disallow reassignment of catch clause exceptions to preserve error info
      "no-ex-assign": "error",

      // Prevent extension of native prototypes for consistency and reliability
      "no-extend-native": "error",

      // Disallow unnecessary use of `bind` to avoid confusing context
      "no-extra-bind": "error",

      // Disallow unnecessary boolean casts to simplify code
      "no-extra-boolean-cast": "error",

      // Disallow unused labels to prevent dead code
      "no-extra-label": "error",

      // Disallow assignments to native objects or read-only global variables
      "no-global-assign": "error",

      // Disallow fallthroughs in `switch` to avoid bugs
      "no-fallthrough": "error",

      // Disallow function reassignments to prevent accidental overwrites
      "no-func-assign": "error",

      // Allow type coercion for readability in some cases
      "no-implicit-coercion": [
        "off",
        {
          boolean: false,
          number: true,
          string: true,
          allow: [],
        },
      ],

      // Disallow `eval`-like behavior for safety
      "no-implied-eval": "error",

      // Disallow comments inline after code
      "no-inline-comments": "off",

      // Disallow assigning to imports to maintain module immutability
      "no-import-assign": "error",

      // Disallow variable/function declarations inside blocks for clarity
      "no-inner-declarations": "error",

      // Disallow invalid regex to avoid runtime errors
      "no-invalid-regexp": "error",

      // Disallow irregular whitespace to prevent hard-to-find bugs
      "no-irregular-whitespace": "error",

      // Disallow legacy iterator protocol for modern JS practices
      "no-iterator": "error",

      // Disallow labels named as variables to avoid confusion
      "no-label-var": "error",

      // Disallow labeled statements to prevent goto-like logic
      "no-labels": ["error", { allowLoop: false, allowSwitch: false }],

      // Disallow lone blocks which serve no purpose
      "no-lone-blocks": "error",

      // Disallow if as the only statement in an else block
      "no-lonely-if": "error",

      // Disallow functions inside loops to avoid unexpected closures
      "no-loop-func": "error",

      // Disallow loss of precision in numeric literals to maintain accuracy
      "no-loss-of-precision": "error",

      // Disallow misleading character classes in regex to avoid matching errors
      "no-misleading-character-class": "error",

      // Disallow use of chained assignment expressions
      "no-multi-assign": ["error"],

      // Disallow multiline strings with backslash for clarity
      "no-multi-str": "error",

      // Disallow negated conditions
      "no-negated-condition": "off",

      // Disallow nested ternary expressions
      "no-nested-ternary": "error",

      // Disallow use of `new` without assignment to avoid side effects
      "no-new": "error",

      // Disallow `Function` constructor for security and readability
      "no-new-func": "error",

      // Disallow using new on native non-constructors to prevent errors
      "no-new-native-nonconstructor": "error",

      // Disallow wrapper object usage (e.g. `new Number`) for primitives
      "no-new-wrappers": "error",

      // Disallow legacy octal escapes in strings
      "no-nonoctal-decimal-escape": "error",

      // Disallow calling global objects as functions to prevent runtime errors
      "no-obj-calls": "error",

      // Disallow legacy octal literals
      "no-octal": "error",

      // Disallow octal escape sequences for clarity
      "no-octal-escape": "error",

      // Prevent mutation of parameters except for known use-cases
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc", // reduce accumulators
            "accumulator", // reduce accumulators
            "e", // e.returnvalue
            "req", // Express requests
            "request", // Express requests
            "res", // Express responses
            "response", // Express responses
            "$scope", // Angular 1 scopes
            "staticContext", // ReactRouter context
          ],
        },
      ],

      // Disallow returning from Promise executor to avoid unpredictable
      // behavior
      "no-promise-executor-return": "error",

      // Disallow use of unary operators, ++ and --
      "no-plusplus": "error",

      // Disallow usage of deprecated `__proto__` accessor
      "no-proto": "error",

      // Disallow direct calls to Object.prototype methods to avoid bugs
      "no-prototype-builtins": "error",

      // Prevent redeclaration of variables to avoid accidental overwrites
      "no-redeclare": "error",

      // Disallow multiple spaces in regex to prevent unintended matching
      "no-regex-spaces": "error",

      // Disable restricted imports for flexibility
      "no-restricted-imports": "off",

      // Restrict usage of legacy and unsafe properties with better alternatives
      "no-restricted-properties": [
        "error",
        {
          object: "arguments",
          property: "callee",
          message: "arguments.callee is deprecated",
        },
        {
          object: "Math",
          property: "pow",
          message: "Use the exponentiation operator (**) instead.",
        },
        {
          property: "__defineGetter__",
          message: "Use Object.defineProperty instead.",
        },
        {
          property: "__defineSetter__",
          message: "Use Object.defineProperty instead.",
        },
        {
          object: "global",
          property: "isFinite",
          message: "Use Number.isFinite instead",
        },
        {
          object: "window",
          property: "isFinite",
          message: "Use Number.isFinite instead",
        },
        {
          object: "self",
          property: "isFinite",
          message: "Use Number.isFinite instead",
        },
        {
          object: "global",
          property: "isNaN",
          message: "Use Number.isNaN instead",
        },
        {
          object: "window",
          property: "isNaN",
          message: "Use Number.isNaN instead",
        },
        {
          object: "self",
          property: "isNaN",
          message: "Use Number.isNaN instead",
        },
      ],

      // Disallow certain syntax forms
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message:
            "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],

      // Disallow assignments in return statements to prevent confusion
      "no-return-assign": ["error", "always"],

      // Disallow use of `javascript:` URLs for security reasons
      "no-script-url": "error",

      // Prevent self-assignment bugs (e.g. `foo = foo`)
      "no-self-assign": ["error", { props: true }],

      // Disallow self-comparisons like `x === x`
      "no-self-compare": "error",

      // Disallow comma operator for readability
      "no-sequences": "error",

      // Disallow returning from setters to prevent unexpected behavior
      "no-setter-return": "error",

      // Disallow variable shadowing to prevent bugs from hiding variables
      "no-shadow": "error",

      // Disallow shadowing of restricted names to avoid errors
      "no-shadow-restricted-names": "error",

      // Disallow the use of ternary operators
      "no-ternary": "off",

      // Disallow sparse arrays to avoid unexpected holes in arrays
      "no-sparse-arrays": "error",

      // Disallow template curly in strings to catch probable typos
      "no-template-curly-in-string": "error",

      // Only throw actual `Error` objects
      "no-throw-literal": "error",

      // Disallow use of undeclared variables to avoid runtime errors
      "no-undef": "error",

      // Disallow initializing variables to undefined to avoid redundancy
      "no-undef-init": "error",

      // Disallow use of undefined variable to prevent bugs,
      // we  use the no-global-assign and no-shadow-restricted-names rules to
      // prevent undefined from being shadowed or assigned a different value
      "no-undefined": "off",

      // Disallow dangling underscores in identifiers
      "no-underscore-dangle": [
        "error",
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          enforceInMethodNames: true,
        },
      ],

      // Disallow the use of Boolean literals in conditional expressions
      // also, prefer `a || b` over `a ? a : b`
      "no-unneeded-ternary": ["error", { defaultAssignment: false }],

      // Disallow confusing multiline expressions to prevent bugs
      "no-unexpected-multiline": "error",

      // Disallow unreachable code to avoid dead code
      "no-unreachable": "error",

      // Disallow unreachable loops except for specified loop types
      "no-unreachable-loop": "error",

      // Disallow unsafe finally blocks to avoid confusing control flow
      "no-unsafe-finally": "error",

      // Disallow unsafe negations to prevent logic errors
      "no-unsafe-negation": "error",

      // Disallow unsafe optional chaining with arithmetic to avoid bugs
      "no-unsafe-optional-chaining": [
        "error",
        { disallowArithmeticOperators: true },
      ],

      // Disallow expressions as statements for clarity
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
        },
      ],

      // Disallow unused labels to prevent unreachable code
      "no-unused-labels": "error",

      // Disallow unused private class members to keep code clean
      "no-unused-private-class-members": "error",

      // Disallow unused variables but allow rest siblings for cleaner code
      "no-unused-vars": [
        "error",
        {
          vars: "local",
          args: "none",
        },
      ],

      // Disallow use before definition for functions, classes, and variables
      "no-use-before-define": [
        "error",
        {
          functions: true,
          classes: true,
          variables: true,
        },
      ],

      // Disallow useless backreferences in regex to prevent errors
      "no-useless-backreference": "error",

      // Disallow try/catch blocks that don't do anything meaningful
      "no-useless-catch": "error",

      // Disallow useless computed keys to simplify objects
      "no-useless-computed-key": "error",

      // Disallow unnecessary string concatenation
      "no-useless-concat": "error",

      // Disallow useless constructors to keep code minimal
      "no-useless-constructor": "error",

      // Disallow escape characters that don’t do anything
      "no-useless-escape": "error",

      // Disallow unnecessary renaming to improve clarity
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],

      // Disallow redundant return statements
      "no-useless-return": "error",

      // Disallow var to enforce modern let/const usage
      "no-var": "error",

      // Disallow use of `void` for expressions — often a sign of poor code
      "no-void": "error",

      // Disable warnings on TODOs etc. to allow use in code reviews
      "no-warning-comments": [
        "off",
        {
          terms: ["todo", "bug", "fixme", "hack", "xxx"],
          location: "start",
        },
      ],

      // Disallow the `with` statement, which makes code unpredictable
      "no-with": "error",

      // Enforce object shorthand syntax for cleaner code
      "object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],

      // Allow just one var statement per function
      "one-var": ["error", "never"],

      // Require assignment operator shorthand where possible or prohibit it
      // entirely
      "operator-assignment": ["error", "always"],

      // Prefer const when variables are never reassigned to improve
      // immutability
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true,
        },
      ],

      // Prefer destructuring from objects/arrays for clearer assignments
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        { enforceForRenamedProperties: false },
      ],

      // Disallow the use of Math.pow in favor of the ** operator
      "prefer-exponentiation-operator": "error",

      // Prefer numeric literals instead of parseInt/Number for clarity
      "prefer-numeric-literals": "error",

      // Enforce modern `Object.hasOwn()` over `hasOwnProperty` for accuracy
      "prefer-object-has-own": "error",

      // Prefer use of an object spread over Object.assign
      "prefer-object-spread": "error",

      // Ensure rejected promises are `Error` instances
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

      // Prefer regex literals for performance and readability
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],

      // Prefer rest parameters over arguments for better clarity and
      // performance
      "prefer-rest-params": "error",

      // Prefer spread syntax over apply for readability
      "prefer-spread": "error",

      // Prefer template literals over string concatenation for clarity
      "prefer-template": "error",

      // Enforce specifying radix with `parseInt()` for clarity
      "radix": "error",

      // Allow atomic updates to be off for flexibility
      "require-atomic-updates": "off",

      // Allow async functions that don’t `await` for flexibility
      "require-await": "off",

      // Disable import sorting
      "sort-imports": "off",

      // Requires object keys to be sorted
      "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

      // Sort variables within the same declaration block
      "sort-vars": "off",

      // Require symbol descriptions to improve debugging
      "symbol-description": "error",

      // Enforce using isNaN properly to avoid incorrect NaN checks
      "use-isnan": "error",

      // Enforce valid typeof comparisons requiring string literals
      "valid-typeof": ["error", { requireStringLiterals: true }],

      // Require all vars to be declared at the top to avoid hoisting surprises
      "vars-on-top": "error",

      // Enforce literal on right in Yoda conditions (`if (42 === x)`) for
      // clarity
      "yoda": "error",

      // Require or disallow the Unicode Byte Order Mark
      "unicode-bom": ["error", "never"],
    },
  },
];
