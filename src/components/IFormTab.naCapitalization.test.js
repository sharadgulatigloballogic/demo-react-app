import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const source = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'IFormTab.jsx'),
  'utf8'
)

describe('IFormTab N/A capitalization (VE-239)', () => {
  it('wires onBlur={handleNACapitalization} on the Apt No input', () => {
    const aptNoInput = source.match(
      /<input[\s\S]*?id="aptNo"[\s\S]*?\/>/
    )
    assert.ok(aptNoInput, 'expected aptNo input in IFormTab.jsx')
    assert.match(
      aptNoInput[0],
      /onBlur=\{handleNACapitalization\}/,
      'Apt No must normalize n/a to N/A on blur like Middle Initial'
    )
  })

  it('handleNACapitalization only capitalizes exact na/n/a values', () => {
    assert.match(
      source,
      /trimmedValue === 'na' \|\| trimmedValue === 'n\/a'/
    )
  })
})
