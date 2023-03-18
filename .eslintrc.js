module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', 'prettier', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
};
