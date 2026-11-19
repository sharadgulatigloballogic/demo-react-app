import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IFormTab from './IFormTab'

afterEach(cleanup)

describe('IFormTab N/A capitalization on blur', () => {
  it.each(['n/a', 'N/a', 'na'])('normalizes "%s" in Apt No to "N/A"', async (input) => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const aptNo = screen.getByLabelText('Apt No')

    await user.type(aptNo, input)
    await user.tab()

    expect(aptNo.value).toBe('N/A')
  })

  it.each(['4B', 'Suite 200'])('leaves "%s" in Apt No unchanged', async (input) => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const aptNo = screen.getByLabelText('Apt No')

    await user.type(aptNo, input)
    await user.tab()

    expect(aptNo.value).toBe(input)
  })

  it('still normalizes "n/a" in Middle Initial', async () => {
    const user = userEvent.setup()
    render(<IFormTab />)
    const middleInitial = screen.getByLabelText(/Middle Initial/)

    await user.type(middleInitial, 'n/a')
    await user.tab()

    expect(middleInitial.value).toBe('N/A')
  })
})
