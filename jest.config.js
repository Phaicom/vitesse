module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'text-summary'],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  snapshotSerializers: ['jest-serializer-vue'],
  moduleFileExtensions: [
    'vue',
    'js',
    'ts',
  ],
  transform: {
    '.*\\.vue$': 'vue3-jest',
    '.*\\.ts$': 'ts-jest',
    '.+\\.(css|scss|svg|png|jpg|jpeg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
