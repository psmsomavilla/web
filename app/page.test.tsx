import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Página principal', () => {
  it('se renderiza sin errores', () => {
    render(<Page />)
    expect(document.querySelector('main')).toBeInTheDocument()
  })
})