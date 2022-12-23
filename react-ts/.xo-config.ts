// Referred to https://zenn.dev/toshiyuki/articles/d2d8b53a9cbfa8
module.exports = {
  extends: ["xo-react"],
  rules: {
    // Component filename is PascalCase, hooks filename is camelCase.
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          pascalCase: true,
          camelCase: true,
        },
      },
    ],
    // Define components with arrow functions.
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
    // Do not check file extensions on import.
    "import/extensions": "off",
    // Do not import "React".
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // Up to two function arguments are valid.
    // If there are three or more arguments, they are grouped together to form a single object.
    "max-params": ["error", 2],
  },
  // turn on prettier
  prettier: true,
};
