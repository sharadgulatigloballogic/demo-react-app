import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import IFormTab from './IFormTab'

afterEach(cleanup)

describe('IFormTab N/A capitalization', () => {
  it.each(['n/a', 'N/a', 'na', 'NA'])('capitalizes "%s" in Apt No on blur', async (input) => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const apt = screen.getByLabelText('Apt No')
    await user.type(apt, input)
    await user.tab()
    expect(apt).toHaveValue('N/A')
  })

  it('does not change other values in Apt No', async () => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const apt = screen.getByLabelText('Apt No')
    await user.type(apt, 'apt 4b')
    await user.tab()
    expect(apt).toHaveValue('apt 4b')
  })

  it('still capitalizes n/a in Middle Initial', async () => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const mi = screen.getByLabelText('Middle Initial')
    await user.type(mi, 'n/a')
    await user.tab()
    expect(mi).toHaveValue('N/A')
  })
})
