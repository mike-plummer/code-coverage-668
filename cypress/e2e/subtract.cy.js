/// <reference types="cypress" />
import { subtract } from '../../src/main.js'

it('subtract', () => {
  expect(subtract(2, 3)).to.eql(-1)
})