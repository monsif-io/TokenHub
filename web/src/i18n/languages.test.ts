/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { describe, expect, test } from 'vitest'

import { convertDetectedLanguage, normalizeInterfaceLanguage } from './languages'

describe('convertDetectedLanguage', () => {
  test('maps browser French tags onto fr', () => {
    expect(convertDetectedLanguage('fr')).toBe('fr')
    expect(convertDetectedLanguage('fr-FR')).toBe('fr')
    expect(convertDetectedLanguage('fr-CA')).toBe('fr')
  })

  test('falls back other languages to en', () => {
    expect(convertDetectedLanguage('en')).toBe('en')
    expect(convertDetectedLanguage('zh-CN')).toBe('en')
    expect(convertDetectedLanguage('ja')).toBe('en')
  })
})

describe('normalizeInterfaceLanguage', () => {
  test('normalizes language codes to en or fr', () => {
    expect(normalizeInterfaceLanguage('fr')).toBe('fr')
    expect(normalizeInterfaceLanguage('FR-fr')).toBe('fr')
    expect(normalizeInterfaceLanguage('en')).toBe('en')
    expect(normalizeInterfaceLanguage('unknown')).toBe('en')
  })
})
