import type {Config} from "jest"

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    clearMocks:               true,
    collectCoverage:          true,
    collectCoverageFrom:      ["./src/**",],
    coverageDirectory:        "../coverage",
    coverageProvider:         "v8",
    errorOnDeprecated:        true,
    extensionsToTreatAsEsm:   [".ts",],
    moduleDirectories:        ["node_modules", "src",],
    modulePathIgnorePatterns: ["./dist/",],
    preset:                   "ts-jest",
    rootDir:                  "./test",
    setupFilesAfterEnv:       ["jest-extended/all",],
    testEnvironment:          "jsdom",
    verbose:                  true,
} satisfies Config
