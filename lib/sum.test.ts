import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('suma dos números positivos', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('suma correctamente con negativos', () => {
    expect(sum(-1, 1)).toBe(0)
  })
})