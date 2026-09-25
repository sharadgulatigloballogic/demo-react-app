import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import IFormTab from './IFormTab'

describe('IFormTab - Apt No auto-capitalization', () => {
  it('capitalizes "n/a" entered in Apt No to "N/A" on blur', () => {
    render(<IFormTab />)
    const aptNoInput = screen.getByLabelText('Apt No')

    fireEvent.change(aptNoInput, { target: { value: 'n/a' } })
    fireEvent.blur(aptNoInput)

    expect(aptNoInput.value).toBe('N/A')
  })

  it('capitalizes "na" entered in Apt No to "N/A" on blur', () => {
    render(<IFormTab />)
    const aptNoInput = screen.getByLabelText('Apt No')

    fireEvent.change(aptNoInput, { target: { value: 'NA' } })
    fireEvent.blur(aptNoInput)

    expect(aptNoInput.value).toBe('N/A')
  })

  it('does not alter other values entered in Apt No on blur', () => {
    render(<IFormTab />)
    const aptNoInput = screen.getByLabelText('Apt No')

    fireEvent.change(aptNoInput, { target: { value: '4B' } })
    fireEvent.blur(aptNoInput)

    expect(aptNoInput.value).toBe('4B')
  })
})
