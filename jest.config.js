/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
export default config;
