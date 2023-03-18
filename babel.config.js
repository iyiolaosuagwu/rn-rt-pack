module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                alias: {
                    // This needs to be mirrored in tsconfig.json
                    '@dtos': './app/dtos',
                    '@store': './app/store',
                    '@assets': './app/assets',
                    '@router': './app/router',
                    '@screens': './app/screens',
                    '@utility': './app/utility',
                    '@services': './app/services',
                    '@components': './app/components',
                    '@config': './app/config',
                },
            },
        ],
    ],
};
