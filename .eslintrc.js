module.exports = {
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": 0,
    "no-undef": 0,
    "react/state-in-constructor": 0,
    "import/no-extraneous-dependencies": 0
  },
};
