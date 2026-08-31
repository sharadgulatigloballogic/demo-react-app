import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const source = readFileSync(join(__dirname, 'IFormTab.jsx'), 'utf8')

describe('IFormTab aptNo N/A capitalization (VE-234)', () => {
  it('wires onBlur={handleNACapitalization} on the aptNo input', () => {
    const idIndex = source.indexOf('id="aptNo"')
    assert.ok(idIndex !== -1, 'expected id="aptNo" in IFormTab.jsx')

    const inputStart = source.lastIndexOf('<input', idIndex)
    assert.ok(inputStart !== -1, 'expected <input before id="aptNo"')

    const inputEnd = source.indexOf('/>', idIndex)
    assert.ok(inputEnd !== -1, 'expected self-closing aptNo input')

    const aptNoInput = source.slice(inputStart, inputEnd + 2)
    assert.match(
      aptNoInput,
      /onBlur=\{handleNACapitalization\}/,
      'aptNo must call handleNACapitalization on blur like middleInitial/otherNames'
    )
  })
})
