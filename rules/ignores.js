/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: "spl/ignores",
    ignores: [
      "**/node_modules/**",
      "**/.cache/**",
      "**/.react-router/**",
      "**/.next/**",
      "**/.vercel/**",
      "**/build/**",
      "**/public/build/**",
      "**/dist/**",
      "**/coverage/**",
    ],
  },
];
