import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
 
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // Project runs in Node.js, not the browser
      globals: {
        ...globals.node,
      },
    },
  },
  {
    // Jest test files
    files: ["**/__test__/**/*.{js,mjs,cjs}", "**/*.{test,spec}.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },
]);
 
 