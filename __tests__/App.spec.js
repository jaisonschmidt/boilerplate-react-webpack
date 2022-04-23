import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/App'

describe('App', () => {
  it('Renders without error', () => {
    const { getByRole } = render(<App />)
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
