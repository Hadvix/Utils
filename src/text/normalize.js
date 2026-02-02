/**
 * Normalize text for consistent comparisons.
 * Deletes diacritics, converts to lowercase, and normalizes whitespace.
 * @param {string} text - Text to be normalized.
 * @returns {string} Normalized text.
 */
export function normalize(text) {
  return String(text ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}+/gu, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}
