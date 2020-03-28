module.exports = {
    'env': {
        'es6': true
    },
    'extends': [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': {
      'babel-eslint': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'prettier',
    ],
    'rules': {
      'prettier/prettier': 'error',
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 0,
      'react/state-in-constructor': 0,
      'react/static-property-placement': 0
    }
};
