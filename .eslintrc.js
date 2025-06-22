const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    extends: ['react-app', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            rules: {
                'prettier/prettier': ['warn', prettierOptions],
                // Disable base eslint no-redeclare rule as it conflicts with typescript
                'no-redeclare': 'off',
                '@typescript-eslint/no-redeclare': [
                    'error',
                    {
                        ignoreDeclarationMerge: true,
                    },
                ],
            },
        },
    ],
};