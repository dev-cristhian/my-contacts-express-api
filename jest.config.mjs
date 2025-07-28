/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "**/tests/**/*.[jt]s?(x)"],
};

export default config;
