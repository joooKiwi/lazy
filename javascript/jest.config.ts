//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Config} from "jest"

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    clearMocks:               true,
    collectCoverage:          true,
    collectCoverageFrom:      ["./src/**/*.ts", "!**/index.ts", "!./src/Lazy.ts",],
    coverageDirectory:        "./coverage",
    coverageProvider:         "v8",
    coverageReporters:        ["lcov" , ["text", {skipFull: true,},],],
    errorOnDeprecated:        true,
    extensionsToTreatAsEsm:   [".ts",],
    moduleDirectories:        ["node_modules", "src",],
    modulePathIgnorePatterns: ["./dist/",],
    preset:                   "ts-jest",
    roots:                    ["./test", "./src",],
    setupFilesAfterEnv:       ["jest-extended/all",],
    testEnvironment:          "jsdom",
    verbose:                  true,
} satisfies Config
