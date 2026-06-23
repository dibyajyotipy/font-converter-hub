/**
 * Production-Grade Preeti Font ↔ Devanagari Unicode Converter (Nepali)
 *
 * Architecture mirrors krutidevConverter.ts:
 *  - Greedy longest-match left-to-right via sorted key array
 *  - Pre-processing: reph reordering after mapping (post-rules)
 *  - Post-processing: Unicode NFC normalization
 *  - Extended ASCII coverage for old DTP documents
 */

// ---------------------------------------------------------------------------
// PART 1 — Preeti → Unicode
// ---------------------------------------------------------------------------

/**
 * Preeti character map.
 * Keys are sorted by descending length so multi-char sequences are
 * matched before single characters (greedy longest-match strategy).
 */
const PREETI_TO_UNICODE_MAP: Record<string, string> = {
  // Standard keys
  'a': 'ब', 'b': 'द', 'c': 'अ', 'd': 'म', 'e': 'भ',
  'f': 'ा', 'g': 'न', 'h': 'ज', 'i': 'ष्', 'j': 'व',
  'k': 'प', 'l': 'ि', 'n': 'ल', 'o': 'य', 'p': 'उ',
  'q': 'त्र', 'r': 'च', 's': 'क', 't': 'त', 'u': 'ग',
  'v': 'ख', 'w': 'ध', 'x': 'ह', 'y': 'थ', 'z': 'श',
  ';': 'स', "'": 'ु', '[': 'ृ', ']': 'े', '\\': '्',
  ',': ',', '.': '।', '/': 'र', '-': '(', '=': '.',

  // Shift keys
  'A': 'ब्', 'B': 'द्य', 'C': 'ऋ', 'D': 'म्', 'E': 'भ्',
  'F': 'ँ',  'G': 'न्', 'H': 'ज्', 'I': 'क्ष्', 'J': 'व्',
  'K': 'प्', 'L': 'ी',  'M': 'ः',  'N': 'ल्', 'O': 'इ',
  'P': 'ए',  'Q': 'त्त', 'R': 'च्', 'S': 'क्', 'T': 'त्',
  'U': 'ग्', 'V': 'ख्', 'W': 'ध्', 'X': 'ह्', 'Y': 'थ्',
  'Z': 'श्', ':': 'स्', '"': 'ू',  '}': 'ै',  '|': '्र',
  '<': '?',  '>': 'श्र', '?': 'रु', '_': ')',  '+': 'ं',

  // Number row (normal)
  '1': 'ज्ञ', '2': 'द्द', '3': 'घ',  '4': 'द्ध', '5': 'छ',
  '6': 'ट',   '7': 'ठ',   '8': 'ड',  '9': 'ढ',   '0': 'ण्',

  // Number row (shift → Devanagari numerals)
  '!': '१', '@': '२', '#': '३', '$': '४', '%': '५',
  '^': '६', '&': '७', '*': '८', '(': '९', ')': '०',

  // Backtick / tilde
  '`': 'ञ', '~': 'ञ्',

  // Extended ASCII — critical for old DTP documents
  '\u201E': 'ध्र',   // „
  '\u2026': '\u2018', // … → '  (left single quotation)
  '\u02C6': 'फ्',    // ˆ
  '\u2030': 'झ्',    // ‰
  '\u2039': 'ङ्घ',   // ‹
  '\u2018': 'ॅ',     // '
  '\u2022': 'ड्ड',   // •
  '\u02DC': 'ऽ',     // ˜
  '\u203A': 'द्र',   // ›
  '\u00A1': 'ज्ञ्',  // ¡
  '\u00A2': 'द्घ',   // ¢
  '\u00A3': 'घ्',    // £
  '\u00A9': 'र',     // ©
  '\u00AA': 'ङ',     // ª
  '\u00AB': '्र',    // «
  '\u00B0': 'ङ्ढ',   // °
  '\u00B1': '+',     // ±
  '\u00B4': 'झ',     // ´
  '\u00B6': 'ठ्ठ',   // ¶
  '\u00BF': 'रू',    // ¿
  '\u00C5': 'हृ',    // Å
  '\u00C6': '\u201C', // Æ → "
  '\u00CB': 'ङ्ग',   // Ë
  '\u00CC': 'न्न',   // Ì
  '\u00CD': 'ङ्क',   // Í
  '\u00CE': 'ङ्ख',   // Î
  '\u00D6': '=',     // Ö
  '\u00D7': '×',     // ×
  '\u00D8': '्य',    // Ø
  '\u00D9': ';',     // Ù
  '\u00DA': '\u2019', // Ú → '
  '\u00DB': '!',     // Û
  '\u00DC': '%',     // Ü
  '\u00DD': 'ट्ठ',   // Ý
  '\u00DF': 'द्म',   // ß
  '\u00E5': 'द्व',   // å
  '\u00E6': '\u201D', // æ → "
  '\u00E7': 'ॐ',     // ç
  '\u00F7': '/',     // ÷
};

// Pre-sort keys by descending length for greedy longest-match
const PREETI_KEYS_SORTED: string[] = Object.keys(PREETI_TO_UNICODE_MAP)
  .sort((a, b) => b.length - a.length);

export function convertPreetiToUnicode(preetiText: string): string {
  if (!preetiText) return '';

  let text = preetiText;

  // 1. Data sanitisation (strip invisible zero-width chars)
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');

  // 2. Greedy longest-match left-to-right character substitution
  let result = '';
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const key of PREETI_KEYS_SORTED) {
      if (text.startsWith(key, i)) {
        result += PREETI_TO_UNICODE_MAP[key];
        i += key.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Pass through unknown characters unchanged
      result += text[i];
      i++;
    }
  }

  text = result;

  const DEVANAGARI_CONSONANTS_PR = 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळक़ख़ग़ज़ड़ढ़फ़य़ऱऩ';

  // 3a. Post-rule: Ikar (ि U+093F) reordering
  //    In Preeti, 'l' produces ि and is typed BEFORE the consonant it belongs to.
  //    After mapping we see: ि + consonant-cluster. Shift ि to after the cluster.
  text = text.replace(
    new RegExp(`\u093F((?:[${DEVANAGARI_CONSONANTS_PR}]\u094D)*[${DEVANAGARI_CONSONANTS_PR}])`, 'g'),
    '$1\u093F'
  );
  // Edge case: ि before ् — push past the next consonant too
  text = text.replace(
    new RegExp(`\u093F\u094D((?:[${DEVANAGARI_CONSONANTS_PR}]\u094D)*[${DEVANAGARI_CONSONANTS_PR}])`, 'g'),
    '\u094D$1\u093F'
  );

  // 3b. Post-rule: Reph (्र U+094D+U+0930) reordering
  //    '|' → '्र'. In Preeti the reph glyph appears AFTER the cluster visually,
  //    but in Unicode र् must precede the cluster it sits on.
  //    Pattern: consonant (halant+consonant)* (matras*) ्र → र् + that cluster+matras
  const MATRAS_PR = '\u093E-\u094D\u0901-\u0903';
  text = text.replace(
    new RegExp(
      `([${DEVANAGARI_CONSONANTS_PR}](?:\u094D[${DEVANAGARI_CONSONANTS_PR}])*[${MATRAS_PR}]*)(\u094D\u0930)`,
      'g'
    ),
    '\u0930\u094D$1'
  );

  // 4. Unicode NFC normalization
  text = text.normalize('NFC');

  return text;
}


// ---------------------------------------------------------------------------
// PART 2 — Unicode → Preeti
// ---------------------------------------------------------------------------

/**
 * Build the reverse map by inverting PREETI_TO_UNICODE_MAP.
 * Where multiple Preeti keys map to the same Unicode output, we keep
 * the first (shortest / most standard) Preeti key.
 * Sorted by Unicode string length descending for greedy matching.
 */
const UNICODE_TO_PREETI_PAIRS: [string, string][] = (() => {
  const seen = new Map<string, string>();

  // Process in ascending key-length order so shorter/simpler Preeti keys win
  const keys = Object.keys(PREETI_TO_UNICODE_MAP).sort((a, b) => a.length - b.length);

  for (const preetiKey of keys) {
    const unicodeVal = PREETI_TO_UNICODE_MAP[preetiKey];
    if (!seen.has(unicodeVal)) {
      seen.set(unicodeVal, preetiKey);
    }
  }

  const pairs: [string, string][] = [];
  for (const [unicodeStr, preetiKey] of seen.entries()) {
    // Skip trivially short/ambiguous pass-throughs that would corrupt output
    pairs.push([unicodeStr, preetiKey]);
  }

  // Sort by Unicode string length descending (conjuncts matched before singles)
  pairs.sort((a, b) => b[0].length - a[0].length);

  return pairs;
})();

export function convertUnicodeToPreeti(unicodeText: string): string {
  if (!unicodeText) return '';

  let text = unicodeText;

  // 1. Data sanitisation
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');

  // 2. Ikar (ि U+093F) pre-shift: in Preeti, 'l' (ि) is typed BEFORE the consonant.
  //    In Unicode, ि appears AFTER the consonant cluster.
  //    Move ि to precede the consonant cluster so the reverse-map produces 'l' in the right position.
  //    This mirrors the unicode-to-krutidev approach for chhoti-ee.
  text = text.replace(
    /((?:[\u0900-\u097F]\u094D)*[\u0900-\u097F])\u093F/g,
    '\u093F$1'
  );

  // 2b. Reph shift: move र् (U+0930 U+094D) from its Unicode position
  //    (before the cluster it sits on) to after the cluster + matras,
  //    replacing it with '|' (the Preeti pipe key → ्र visual reph).
  //
  //    Unicode: र् + consonant-cluster + matras  →  cluster + matras + |
  text = text.replace(
    /\u0930\u094D((?:[\u0900-\u097F]\u094D)*[\u0900-\u097F][\u093E-\u094D\u0901-\u0903]*)/g,
    '$1|'
  );

  // 3. Greedy longest-match replacement using the inverted pair list
  let result = '';
  let i = 0;
  while (i < text.length) {
    let matched = false;
    for (const [unicodeStr, preetiKey] of UNICODE_TO_PREETI_PAIRS) {
      if (text.startsWith(unicodeStr, i)) {
        result += preetiKey;
        i += unicodeStr.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += text[i];
      i++;
    }
  }

  return result;
}
