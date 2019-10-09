module.exports = {
  "plugins": [
    "react",
    "meteor"
  ],
  "extends": [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:meteor/recommended"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "comma-dangle": "off",
    "no-unused-vars": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "consistent-return": "off",
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-await-in-loop": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "no-undef": "off"
  },
  "parserOptions": {
    "ecmaVersion": 6,
      "sourceType": "module",
        "ecmaFeatures": {
      "jsx": true
    }
  }
};
