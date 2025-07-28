import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**", "**/build/**", "**/**.spec.js"],
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-alert": "warn",
      "no-unused-vars": ["error", { args: "none" }],
      "no-redeclare": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-var": "error",
      "arrow-spacing": ["error", { before: true, after: true }],
      "object-shorthand": ["error", "always"],
      "no-duplicate-imports": "error",
      "prefer-template": "warn",
    },
  },
]);
