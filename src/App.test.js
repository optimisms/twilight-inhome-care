import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'

/* eslint-disable no-undef */
test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
/* eslint-enable no-undef */
