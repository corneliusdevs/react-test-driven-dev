module.exports = {
    // "env": {
    //     "browser": true,
    //     "es2021": true
    // },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "next",
        "next/core-web-vitals"

    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":"./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
    }
}
