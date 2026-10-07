import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IFormTab from './IFormTab'

describe('IFormTab - N/A auto-capitalization', () => {
  it('capitalizes "n/a" to "N/A" in the Apt No field on blur', async () => {
    const user = userEvent.setup()
    render(<IFormTab />)

    const aptNoInput = screen.getByLabelText('Apt No')
    await user.type(aptNoInput, 'n/a')
    await user.tab()

    expect(aptNoInput).toHaveValue('N/A')
  })

  it('does not alter other values entered in the Apt No field on blur', async () => {
    const user = userEvent.setup()
    render(<IFormTab />)

    const aptNoInput = screen.getByLabelText('Apt No')
    await user.type(aptNoInput, '4B')
    await user.tab()

    expect(aptNoInput).toHaveValue('4B')
  })
})
