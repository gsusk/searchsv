module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "prettier/prettier": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-unused-vars": 1,
  },
}
