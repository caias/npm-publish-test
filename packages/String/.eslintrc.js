module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
  },
  ignorePatterns: ["node_modules/"],
  rules: {
    "comma-spacing": 2,
    "indent": [
      "error",
      4,
  ],
  },
  
};