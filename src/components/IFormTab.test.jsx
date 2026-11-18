import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import IFormTab from './IFormTab'

describe('IFormTab N/A capitalization', () => {
  afterEach(cleanup)

  it.each([
    ['Apt No', 'n/a'],
    ['Apt No', 'na'],
    ['Middle Initial', 'n/a'],
  ])('capitalizes the %s field value "%s" to N/A on blur', async (label, typed) => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const input = screen.getByLabelText(label)
    await user.type(input, typed)
    await user.tab()
    expect(input).toHaveValue('N/A')
  })

  it('does not alter other values in the Apt No field', async () => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const input = screen.getByLabelText('Apt No')
    await user.type(input, 'apt 4b')
    await user.tab()
    expect(input).toHaveValue('apt 4b')
  })
})
