import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: "spl/styles",
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // Enforce linebreaks after opening and before closing array brackets
      "@stylistic/array-bracket-newline": ["off", "consistent"],

      // Enforce consistent spacing inside array brackets
      "@stylistic/array-bracket-spacing": ["warn", "never"],

      // Enforce line breaks after each array element
      "@stylistic/array-element-newline": [
        "off",
        { multiline: true, minItems: 3 },
      ],

      // Require parentheses around arrow function arguments
      "@stylistic/arrow-parens": [
        "warn",
        "always",
        { requireForBlockBody: true },
      ],

      // Enforce consistent spacing before and after the arrow in arrow
      // functions
      "@stylistic/arrow-spacing": ["warn", { after: true, before: true }],

      // Disallow or enforce spaces inside of blocks after opening block and
      // before closing block
      "@stylistic/block-spacing": ["warn", "always"],

      // Enforce consistent brace style for blocks
      "@stylistic/brace-style": ["warn", "1tbs", { allowSingleLine: true }],

      // Require or disallow trailing commas
      "@stylistic/comma-dangle": ["warn", "always-multiline"],

      // Enforce consistent spacing before and after commas
      "@stylistic/comma-spacing": ["warn", { after: true, before: false }],

      // Enforce consistent comma style
      "@stylistic/comma-style": ["warn", "last"],

      // Enforce consistent spacing inside computed property brackets
      "@stylistic/computed-property-spacing": ["warn", "never"],

      // Enforce consistent line breaks after opening and before closing braces
      "@stylistic/curly-newline": "off",

      // Enforce consistent newlines before and after dots
      "@stylistic/dot-location": ["warn", "property"],

      // Require or disallow newline at the end of files
      "@stylistic/eol-last": ["warn", "always"],

      // Enforce line breaks between arguments of a function call
      "@stylistic/function-call-argument-newline": ["warn", "consistent"],

      // Enforce consistent line breaks inside function parentheses
      "@stylistic/function-paren-newline": ["warn", "multiline-arguments"],

      // Enforce consistent spacing around `*` operators in generator functions
      "@stylistic/generator-star-spacing": [
        "warn",
        { after: true, before: false },
      ],

      // Enforce the location of arrow function bodies
      "@stylistic/implicit-arrow-linebreak": ["warn", "beside"],

      // Enforce consistent indentation
      "@stylistic/indent": [
        "warn",
        2,
        {
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          flatTernaryExpressions: false,
          FunctionDeclaration: { body: 1, parameters: 1, returnType: 1 },
          FunctionExpression: { body: 1, parameters: 1, returnType: 1 },
          ignoreComments: false,
          ignoredNodes: [
            "TSUnionType",
            "TSIntersectionType",
            "TSTypeParameterInstantiation",
            "FunctionExpression > .params[decorators.length > 0]",
            "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",

            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            "JSXElement",
            "JSXElement > *",
            "JSXAttribute",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXSpreadAttribute",
            "JSXExpressionContainer",
            "JSXOpeningElement",
            "JSXClosingElement",
            "JSXFragment",
            "JSXOpeningFragment",
            "JSXClosingFragment",
            "JSXText",
            "JSXEmptyExpression",
            "JSXSpreadChild",
          ],
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          offsetTernaryExpressions: true,
          outerIIFEBody: 1,
          SwitchCase: 1,
          tabLength: 2,
          VariableDeclarator: 1,
        },
      ],

      // Indentation for binary operators
      "@stylistic/indent-binary-ops": ["warn", 2],

      // Enforce or disallow spaces inside of curly braces in JSX attributes and
      // expressions
      "@stylistic/jsx-child-element-spacing": "off",

      // Enforce closing bracket location in JSX
      "@stylistic/jsx-closing-bracket-location": "warn",

      // Enforce closing tag location for multiline JSX
      "@stylistic/jsx-closing-tag-location": "warn",

      // Disallow unnecessary JSX expressions when literals alone are sufficient
      // or enforce JSX expressions on literals in JSX children or attributes
      "@stylistic/jsx-curly-brace-presence": [
        "warn",
        { propElementValues: "always" },
      ],

      // Enforce consistent linebreaks in curly braces in JSX attributes and
      // expressions
      "@stylistic/jsx-curly-newline": "warn",

      // Enforce or disallow spaces inside of curly braces in JSX attributes and
      // expressions
      "@stylistic/jsx-curly-spacing": ["warn", "never"],

      // Enforce or disallow spaces around equal signs in JSX attributes
      "@stylistic/jsx-equals-spacing": "warn",

      // Enforce proper position of the first property in JSX
      "@stylistic/jsx-first-prop-new-line": "warn",

      // Enforce line breaks before and after JSX elements when they are used as
      // arguments to a function
      "@stylistic/jsx-function-call-newline": ["warn", "multiline"],

      // Enforce props indentation in JSX
      "@stylistic/jsx-indent-props": ["warn", 2],

      // Enforce maximum of props on a single line in JSX
      "@stylistic/jsx-max-props-per-line": [
        "warn",
        { maximum: 1, when: "multiline" },
      ],

      // Require one JSX element per line
      "@stylistic/jsx-one-expression-per-line": [
        "warn",
        { allow: "single-child" },
      ],

      // Enforce PascalCase for user-defined JSX components
      "@stylistic/jsx-pascal-case": "warn",

      // Disallow multiple spaces between inline JSX props
      "@stylistic/jsx-props-no-multi-spaces": "warn",

      // Enforce the consistent use of either double or single quotes in JSX
      // attributes
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],

      // Disallow extra closing tags for components without children
      "@stylistic/jsx-self-closing-comp": [
        "warn",
        { component: true, html: false },
      ],

      // Enforce props alphabetical sorting
      "@stylistic/jsx-sort-props": "off",

      // Enforce whitespace in and around the JSX opening and closing brackets
      "@stylistic/jsx-tag-spacing": [
        "warn",
        {
          afterOpening: "never",
          beforeClosing: "never",
          beforeSelfClosing: "always",
          closingSlash: "never",
        },
      ],

      // Disallow missing parentheses around multiline JSX
      "@stylistic/jsx-wrap-multilines": [
        "warn",
        {
          arrow: "parens-new-line",
          assignment: "parens-new-line",
          condition: "parens-new-line",
          declaration: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
          propertyValue: "parens-new-line",
          return: "parens-new-line",
        },
      ],

      // Enforce consistent spacing between property names and type annotations
      // in types and interfaces
      "@stylistic/key-spacing": [
        "warn",
        { beforeColon: false, afterColon: true },
      ],

      // Enforce consistent spacing before and after keywords
      "@stylistic/keyword-spacing": [
        "warn",
        {
          before: true,
          after: true,
          overrides: {
            return: { after: true },
            throw: { after: true },
            case: { after: true },
          },
        },
      ],

      // Enforce position of line comments
      "@stylistic/line-comment-position": [
        "off",
        {
          position: "above",
          ignorePattern: "",
          applyDefaultPatterns: true,
        },
      ],

      // Enforce consistent linebreak style,
      // disallow mixed 'LF' and 'CRLF' as linebreaks
      "@stylistic/linebreak-style": ["warn", "unix"],

      // Require empty lines around comments
      "@stylistic/lines-around-comment": "off",

      // Disallow an empty line between class members
      "@stylistic/lines-between-class-members": [
        "warn",
        "always",
        { exceptAfterSingleLine: false },
      ],

      // Enforce a maximum line length
      "@stylistic/max-len": [
        "warn",
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],

      // Enforce a maximum number of statements allowed per line
      "@stylistic/max-statements-per-line": ["off", { max: 1 }],

      // Require a specific member delimiter style for interfaces and type
      // literals
      "@stylistic/member-delimiter-style": "warn",

      // Enforce a particular style for multiline comments
      "@stylistic/multiline-comment-style": ["off", "starred-block"],

      // Enforce newlines between operands of ternary expressions
      "@stylistic/multiline-ternary": ["off", "never"],

      // Enforce or disallow parentheses when invoking a constructor with no
      // arguments
      "@stylistic/new-parens": "warn",

      // Require a newline after each call in a method chain
      "@stylistic/newline-per-chained-call": [
        "warn",
        { ignoreChainWithDepth: 4 },
      ],

      // Disallow arrow functions where they could be confused with comparisons
      "@stylistic/no-confusing-arrow": "off",

      // Disallow unnecessary parentheses
      "@stylistic/no-extra-parens": ["warn", "functions"],

      // Disallow unnecessary semicolons
      "@stylistic/no-extra-semi": "off",

      // Disallow leading or trailing decimal points in numeric literals
      "@stylistic/no-floating-decimal": "warn",

      // Disallow mixed binary operators
      "@stylistic/no-mixed-operators": [
        "warn",
        {
          // the list of arithmetic groups disallows mixing `%` and `**` with
          // other arithmetic operators
          groups: [
            ["%", "**"],
            ["%", "+"],
            ["%", "-"],
            ["%", "*"],
            ["%", "/"],
            ["/", "*"],
            ["&", "|", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!=="],
            ["&&", "||"],
          ],
          allowSamePrecedence: false,
        },
      ],

      // Disallow mixed spaces and tabs for indentation
      "@stylistic/no-mixed-spaces-and-tabs": "warn",

      // Disallow multiple spaces
      "@stylistic/no-multi-spaces": "warn",

      // Disallow multiple empty lines
      "@stylistic/no-multiple-empty-lines": [
        "warn",
        { max: 1, maxBOF: 0, maxEOF: 0 },
      ],

      // Disallow all tabs
      "@stylistic/no-tabs": "warn",

      // Disallow trailing whitespace at the end of lines
      "@stylistic/no-trailing-spaces": [
        "warn",
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],

      // Disallow whitespace before properties
      "@stylistic/no-whitespace-before-property": "warn",

      // Enforce the location of single-line statements
      "@stylistic/nonblock-statement-body-position": [
        "warn",
        "beside",
        { overrides: {} },
      ],

      // Enforce consistent line breaks after opening and before closing braces
      "@stylistic/object-curly-newline": [
        "warn",
        {
          ObjectExpression: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ExportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
        },
      ],

      // Enforce consistent spacing inside braces
      "@stylistic/object-curly-spacing": ["warn", "always"],

      // Enforce placing object properties on separate lines
      "@stylistic/object-property-newline": [
        "warn",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],

      // Require or disallow newlines around variable declarations
      "@stylistic/one-var-declaration-per-line": ["warn", "always"],

      // Enforce consistent linebreak style for operators
      "@stylistic/operator-linebreak": [
        "warn",
        "before",
        { overrides: { "=": "none" } },
      ],

      // Require or disallow padding within blocks
      "@stylistic/padded-blocks": [
        "warn",
        {
          blocks: "never",
          classes: "never",
          switches: "never",
        },
        {
          allowSingleLineBlocks: true,
        },
      ],

      // Require or disallow padding lines between statements
      "@stylistic/padding-line-between-statements": "off",

      // Require quotes around object literal, type literal, interfaces and
      // enums property names
      "@stylistic/quote-props": [
        "warn",
        "consistent-as-needed",
        { keywords: false, unnecessary: true, numbers: false },
      ],

      // Enforce the consistent use of either backticks, double, or single
      // quotes
      "@stylistic/quotes": ["warn", "double", { avoidEscape: true }],

      // Enforce spacing between rest and spread operators and their expressions
      "@stylistic/rest-spread-spacing": ["warn", "never"],

      // Require or disallow semicolons instead of ASI
      "@stylistic/semi": ["warn", "always"],

      // Enforce consistent spacing before and after semicolons
      "@stylistic/semi-spacing": ["warn", { before: false, after: true }],

      // Enforce location of semicolons
      "@stylistic/semi-style": ["warn", "last"],

      // Enforce consistent spacing before blocks
      "@stylistic/space-before-blocks": "warn",

      // Enforce consistent spacing before function parenthesis
      "@stylistic/space-before-function-paren": [
        "warn",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],

      // Enforce consistent spacing inside parentheses
      "@stylistic/space-in-parens": ["warn", "never"],

      // Require spacing around infix operators
      "@stylistic/space-infix-ops": "warn",

      // Enforce consistent spacing before or after unary operators
      "@stylistic/space-unary-ops": [
        "warn",
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],

      // Enforce consistent spacing after the `//` or `/*` in a comment
      "@stylistic/spaced-comment": [
        "warn",
        "always",
        {
          line: {
            exceptions: ["-", "+"],
            markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
          },
          block: {
            exceptions: ["-", "+"],
            markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
            balanced: true,
          },
        },
      ],

      // Enforce spacing around colons of switch statements
      "@stylistic/switch-colon-spacing": [
        "warn",
        { after: true, before: false },
      ],

      // Require or disallow spacing around embedded expressions of template
      // strings
      "@stylistic/template-curly-spacing": "warn",

      // Require or disallow spacing between template tags and their literals
      "@stylistic/template-tag-spacing": ["warn", "never"],

      // Require consistent spacing around type annotations
      "@stylistic/type-annotation-spacing": ["warn", {}],

      // Enforces consistent spacing inside TypeScript type generics
      "@stylistic/type-generic-spacing": "warn",

      // Expect space before the type declaration in the named tuple
      "@stylistic/type-named-tuple-spacing": "warn",

      // Require parentheses around immediate `function` invocations
      "@stylistic/wrap-iife": [
        "warn",
        "any",
        { functionPrototypeMethods: true },
      ],

      // Require parenthesis around regex literals
      "@stylistic/wrap-regex": "off",

      // Require or disallow spacing around the `*` in `yield*` expressions
      "@stylistic/yield-star-spacing": ["warn", { after: true, before: false }],
    },
  },
];
