module.exports = {
  env: {
    browser: true,
    node: true,
  },

  extends: ["next/core-web-vitals", "eslint:recommended", "prettier"],
  root: true,
  settings: {
    "mdx/code-blocks": true,
  },

  overrides: [
    {
      files: ["**/*.mdx"],
      extends: "plugin:mdx/recommended",
    },

    {
      files: ["**/*.tsx", "**/*.ts", "src/**/*.ts", "src/**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",
        "eslint:recommended",
        "prettier",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "prefer-const": "error",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/explicit-function-return-type": "error",
      },
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },
  ],

  globals: {
    JSX: "readonly",
  },
};
