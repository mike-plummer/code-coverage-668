import { defineConfig } from 'cypress'
import configCodeCoverage from '@cypress/code-coverage/task.js'
import codeCoverageBabelRc from '@cypress/code-coverage/use-babelrc.js'

export default defineConfig({
  fixturesFolder: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      configCodeCoverage(on, config)
      on('file:preprocessor', codeCoverageBabelRc)
      return config
    },
  },
})
