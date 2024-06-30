module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-navigation|react-native-gesture-handler)/)',
      'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-safe-area-context)/)',
      "/node_modules/(?!@react-native)",
       "/node_modules/(?!@react-native)"
    ],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
  };
  