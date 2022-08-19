module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "prettier/prettier": ["error"],
        "no-var": "error",
    },
    plugins: ["prettier"],
};
