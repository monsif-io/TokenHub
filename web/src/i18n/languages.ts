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
export const INTERFACE_LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
] as const

export type InterfaceLanguageCode =
  (typeof INTERFACE_LANGUAGE_OPTIONS)[number]['code']

export function normalizeInterfaceLanguage(value?: string | null): string {
  if (!value) return 'en'

  const normalized = value.trim().replaceAll('_', '-').toLowerCase()
  if (normalized.startsWith('fr')) {
    return 'fr'
  }

  return 'en'
}

/**
 * Map a browser-detected locale onto the supported interface language codes ('en' or 'fr').
 */
export function convertDetectedLanguage(value: string): string {
  const lower = value.trim().replaceAll('_', '-').toLowerCase()
  if (lower.startsWith('fr')) {
    return 'fr'
  }
  return 'en'
}

/**
 * Convert an interface language code into a valid BCP-47 locale tag that the `Intl.*` APIs accept.
 */
export function toIntlLocale(value?: string | null): string | undefined {
  if (!value) return undefined
  if (value.startsWith('fr')) return 'fr-FR'
  return 'en-US'
}
