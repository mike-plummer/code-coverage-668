/// <reference types="cypress" />
import { add } from '../../src/main.js'

it('add', () => {
  expect(add(2, 3)).to.eql(5)
})