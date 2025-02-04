// const nextJest = require('next/jest')

// const createJestConfig = nextJest({
//     // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//     dir: './',
// })

// // Add any custom config to be passed to Jest
// /** @type {import('jest').Config} */
// const config = {
//     // Add more setup options before each test is run
//     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//     testEnvironment: 'jest-environment-jsdom',
//     preset: 'ts-jest',
// }

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// module.exports = createJestConfig(config)

module.exports = {
    testEnvironment: 'node', // Use 'node' if testing backend code
    roots: ['<rootDir>'], // Adjust if your tests are in a different directory
    transform: {
      '^.+\\.js$': 'babel-jest', // Ensure Babel is set up for Jest if using ES6+
    },
    moduleFileExtensions: ['js', 'json'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional: Add test setup file
    collectCoverage: true, // Enable code coverage reports
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'], // Adjust coverage collection
  };