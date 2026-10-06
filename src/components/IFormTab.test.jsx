import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import IFormTab from './IFormTab'

// Regression test for VDLC-2394: Apt No field did not auto-capitalize "n/a" on blur,
// unlike sibling fields such as Middle Initial and Other Last Names Used.
describe('IFormTab - Apt No field N/A auto-capitalization', () => {
  it('capitalizes "n/a" to "N/A" when the Apt No field loses focus', () => {
    render(<IFormTab />)

    const aptNoInput = screen.getByLabelText('Apt No')
    fireEvent.change(aptNoInput, { target: { value: 'n/a' } })
    fireEvent.blur(aptNoInput)

    expect(aptNoInput.value).toBe('N/A')
  })

  it('capitalizes "na" (no slash) to "N/A" when the Apt No field loses focus', () => {
    render(<IFormTab />)

    const aptNoInput = screen.getByLabelText('Apt No')
    fireEvent.change(aptNoInput, { target: { value: 'NA' } })
    fireEvent.blur(aptNoInput)

    expect(aptNoInput.value).toBe('N/A')
  })

  it('does not alter other values in the Apt No field on blur', () => {
    render(<IFormTab />)

    const aptNoInput = screen.getByLabelText('Apt No')
    fireEvent.change(aptNoInput, { target: { value: '4B' } })
    fireEvent.blur(aptNoInput)

    expect(aptNoInput.value).toBe('4B')
  })
})
