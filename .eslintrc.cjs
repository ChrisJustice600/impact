module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-undef": ["error", { typeof: true }], // Allow __dirname with typeof check
  },
  parser: "@babel/eslint-parser", // Assuming you're using Babel
  env: {
    es6: true, // Enables features of ECMAScript 2015 (ES6)
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // Disables type-related rules for non-TS files
  },
};
