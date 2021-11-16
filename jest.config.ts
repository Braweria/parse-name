import type { Config } from "@jest/types";
import { defaults } from "jest-config";

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const config: Config.InitialOptions = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};

export default config;
