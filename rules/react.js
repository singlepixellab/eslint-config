import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: "spl/react",
    files: ["**/*.js"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react": reactPlugin,
      "jsx-a11y": jsxA11y,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat["jsx-runtime"].rules,
      ...jsxA11y.flatConfigs.recommended.rules,

      // Prevent missing displayName in a React component definition
      "react/display-name": ["off", { ignoreTranspilerName: false }],

      // Enforce boolean attributes notation in JSX
      "react/jsx-boolean-value": ["error", "never", { always: [] }],

      // Validate closing bracket location in JSX
      "react/jsx-closing-bracket-location": ["error", "tag-aligned"],

      // Validate closing tag location in JSX
      "react/jsx-closing-tag-location": "error",

      // Enforce or disallow spaces inside of curly braces in JSX attributes
      "react/jsx-curly-spacing": [
        "error",
        { when: "never", allowMultiline: true },
      ],

      // Enforce or disallow spaces around equal sign
      "react/jsx-equals-spacing": ["error", "always"],

      // Disable event handler naming conventions in JSX
      "react/jsx-handler-names": "off",

      // Validate props indentation in JSX
      "react/jsx-indent-props": ["error", 2],

      // Limit maximum of props on a single line in JSX
      "react/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ],

      // Prevent usage of .bind() in JSX props
      "react/jsx-no-bind": [
        "error",
        {
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
          ignoreDOMComponents: true,
        },
      ],

      // Prevent usage of unwrapped JSX strings
      "react/jsx-no-literals": "off",

      // Enforce PascalCase for JSX components
      "react/jsx-pascal-case": ["error", { allowAllCaps: true }],

      // Disable props sorting
      "react/jsx-sort-props": "off",

      // [Deprecated] Disable defaultProps declarations sorting
      "react/jsx-sort-default-props": "off",

      // No jsx extension
      // https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
      "react/jsx-filename-extension": ["error", { extensions: [".js"] }],

      // This is no longer needed since React 17+ with the new JSX transform
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
      "react/react-in-jsx-scope": "off",

      // React 18.3.0 deprecated defaultProps for function components
      // https://github.com/facebook/react/pull/25699
      "react/require-default-props": "off",

      // We recommend using TypeScript instead of checking prop types at runtime
      // https://react.dev/reference/react/Component#static-proptypes
      "react/prop-types": "off",

      // Enforce arrow function type for function components, ensures
      // consistency and avoids confusion between class and function components
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      // Allow prop spreading to enable flexible and reusable components
      "react/jsx-props-no-spreading": "off",

      // Allow unescaped entities in JSX (e.g., apostrophes), prevents noise for
      // common text content in JSX
      "react/no-unescaped-entities": "off",

      // Allow use of `dangerouslySetInnerHTML`, needed in some cases and
      // the responsibility lies with the developer
      "react/no-danger": "off",

      // Prevent usage of deprecated methods
      "react/no-deprecated": "error",

      // Prevent multiple component definition per file
      "react/no-multi-comp": "off",

      // Prevent usage of setState
      "react/no-set-state": "off",

      // Require ES6 class declarations over React.createClass
      "react/prefer-es6-class": ["error", "always"],

      // Enforce that all elements that require alternative text have meaningful
      // information
      "jsx-a11y/alt-text": [
        "error",
        {
          "elements": ["img", "object", "area", 'input[type="image"]'],
          "img": [],
          "object": [],
          "area": [],
          'input[type="image"]': [],
        },
      ],

      // Enforce that anchors have content
      "jsx-a11y/anchor-has-content": ["error", { components: [] }],

      // Ensure <a> tags are valid
      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],

      // Elements with aria-activedescendant must be tabbable
      "jsx-a11y/aria-activedescendant-has-tabindex": "error",

      // Enforce all aria-* props are valid
      "jsx-a11y/aria-props": "error",

      // Enforce ARIA state and property values are valid
      "jsx-a11y/aria-proptypes": "error",

      // Require ARIA roles to be valid and non-abstract
      "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],

      // Enforce that elements that do not support ARIA roles, states, and
      // properties do not have those attributes
      "jsx-a11y/aria-unsupported-elements": "error",

      // Ensure the autocomplete attribute is correct and suitable for the form
      // field it is used with
      "jsx-a11y/autocomplete-valid": [
        "off",
        {
          inputComponents: [],
        },
      ],

      // Require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
      "jsx-a11y/click-events-have-key-events": "error",

      // Enforce that a control (an interactive element) has a text label
      "jsx-a11y/control-has-associated-label": [
        "error",
        {
          labelAttributes: ["label"],
          controlComponents: [],
          ignoreElements: [
            "audio",
            "canvas",
            "embed",
            "input",
            "textarea",
            "tr",
            "video",
          ],
          ignoreRoles: [
            "grid",
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "row",
            "tablist",
            "toolbar",
            "tree",
            "treegrid",
          ],
          depth: 5,
        },
      ],

      // Ensure <hX> tags have content and are not aria-hidden
      "jsx-a11y/heading-has-content": ["error", { components: [""] }],

      // Require HTML elements to have a "lang" prop
      "jsx-a11y/html-has-lang": "error",

      // Ensure iframe elements have a unique title
      "jsx-a11y/iframe-has-title": "error",

      // Prevent img alt text from containing redundant words like "image",
      // "picture", or "photo"
      "jsx-a11y/img-redundant-alt": "error",

      // Elements with an interactive role and interaction handlers must be
      // focusable
      "jsx-a11y/interactive-supports-focus": "error",

      // Enforce that a label tag has a text label and an associated control
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: "both",
          depth: 25,
        },
      ],

      // Require HTML element's lang prop to be valid
      "jsx-a11y/lang": "error",

      // Media elements must have captions
      "jsx-a11y/media-has-caption": [
        "error",
        {
          audio: [],
          video: [],
          track: [],
        },
      ],

      // Require that mouseover/out come with focus/blur, for keyboard-only
      // users
      "jsx-a11y/mouse-events-have-key-events": "error",

      // Prevent use of `accessKey`
      "jsx-a11y/no-access-key": "error",

      // Prohibit autoFocus prop
      "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],

      // Prevent distracting elements, like <marquee> and <blink>
      "jsx-a11y/no-distracting-elements": [
        "error",
        {
          elements: ["marquee", "blink"],
        },
      ],

      // WAI-ARIA roles should not be used to convert an interactive element to
      // non-interactive
      "jsx-a11y/no-interactive-element-to-noninteractive-role": [
        "error",
        {
          tr: ["none", "presentation"],
        },
      ],

      // A non-interactive element does not support event handlers (mouse and
      // key handlers)
      "jsx-a11y/no-noninteractive-element-interactions": [
        "error",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],

      // WAI-ARIA roles should not be used to convert a non-interactive element
      // to interactive
      "jsx-a11y/no-noninteractive-element-to-interactive-role": [
        "error",
        {
          ul: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          ol: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          li: ["menuitem", "option", "row", "tab", "treeitem"],
          table: ["grid"],
          td: ["gridcell"],
        },
      ],

      // Tab key navigation should be limited to elements on the page that can
      // be interacted with
      "jsx-a11y/no-noninteractive-tabindex": [
        "error",
        {
          tags: [],
          roles: ["tabpanel"],
          allowExpressionValues: true,
        },
      ],

      // [Deprecated] Require onBlur instead of onChange
      "jsx-a11y/no-onchange": "off",

      // Ensure HTML elements do not specify redundant ARIA roles
      "jsx-a11y/no-redundant-roles": [
        "error",
        {
          nav: ["navigation"],
        },
      ],

      // Enforce that DOM elements without semantic behavior not have
      // interaction handlers
      "jsx-a11y/no-static-element-interactions": [
        "error",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],

      // Enforce that elements with ARIA roles must have all required attributes
      // for that role
      "jsx-a11y/role-has-required-aria-props": "error",

      // Enforce that elements with explicit or implicit roles defined contain
      // only aria-* properties supported by that role
      "jsx-a11y/role-supports-aria-props": "error",

      // Only allow <th> to have the "scope" attr
      "jsx-a11y/scope": "error",

      // Enforce tabIndex value is not greater than zero
      "jsx-a11y/tabindex-no-positive": "error",

      // Enforce Rules of Hooks
      "react-hooks/rules-of-hooks": "error",

      // Verify the list of the dependencies for Hooks like useEffect
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
