/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform:{
    "^.+\\.tsx?$": ['ts-jest', { 
      tsconfig: "tsconfig.jest.json",
     },]
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"]
  // globals:{
  //   'ts-jest':{
  //     tsconfig: "tsconfig.jest.json",
  //   },
  // }
};