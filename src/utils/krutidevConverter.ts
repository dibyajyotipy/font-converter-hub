/**
 * Comprehensive mapping between legacy Krutidev 010 and standard Devanagari Unicode.
 * Mappings are ordered such that complex conjuncts are replaced before individual characters.
 */

export const CHARS_KD = [
  "ñ", "Q+Z", "sas", "aa", ")Z", "ZZ", "‘", "’", "“", "”",
  "å", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹",
  "¶+", "d+", "[+k", "[+", "x+", "T+", "t+", "M+", "<+", "Q+", ";+", "j+", "u+",
  "Ùk", "Ù", "ä", "–", "—", "é", "™", "=kk", "f=k",
  "à", "á", "â", "ã", "ºz", "º", "í", "{k", "{", "=", "«",
  "Nî", "Vî", "Bî", "Mî", "<î", "|", "K", "}",
  "J", "Vª", "Mª", "<ªª", "Nª", "Ø", "Ý", "nzZ", "æ", "ç", "Á", "xz", "#", ":",
  "v‚", "vks", "vkS", "vk", "v", "b±", "Ã", "bZ", "b", "m", "Å", ",s", ",", "_",
  "ô", "d", "Dk", "D", "[k", "[", "x", "Xk", "X", "Ä", "?k", "?", "³",
  "pkS", "p", "Pk", "P", "N", "t", "Tk", "T", ">", "÷", "¥",
  "ê", "ë", "V", "B", "ì", "ï", "M+", "<+", "M", "<", ".k", ".",
  "r", "Rk", "R", "Fk", "F", ")", "n", "/k", "èk", "/", "Ë", "è", "u", "Uk", "U",
  "i", "Ik", "I", "Q", "¶", "c", "Ck", "C", "Hk", "H", "e", "Ek", "E",
  ";", "¸", "j", "y", "Yk", "Y", "G", "o", "Ok", "O",
  "'k", "'", "\"k", "\"", "l", "Lk", "L", "g",
  "È", "z",
  "Ì", "Í", "Î", "Ï", "Ñ", "Ò", "Ó", "Ô", "Ö", "Ø", "Ù", "Ük", "Ü",
  "‚", "ks", "kS", "k", "h", "q", "w", "`", "s", "S",
  "a", "¡", "%", "W", "•", "·", "∙", "·", "~j", "~", "\\", "+", " ः",
  "^", "*", "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]", "~ ", "@"
];

export const CHARS_UNICODE = [
  "॰", "QZ+", "sa", "a", "र्द्ध", "Z", "\"", "\"", "'", "'",
  "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
  "फ़्", "क़", "ख़", "ख़्", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ",
  "त्त", "त्त्", "क्त", "दृ", "कृ", "न्न", "न्न्", "=k", "f=",
  "ह्न", "ह्य", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष", "क्ष्", "त्र", "त्र्",
  "छ्य", "ट्य", "ठ्य", "ड्य", "ढ्य", "द्य", "ज्ञ", "द्व",
  "श्र", "ट्र", "ड्र", "ढ्र", "छ्र", "क्र", "फ्र", "र्द्र", "द्र", "प्र", "प्र", "ग्र", "रु", "रू",
  "ऑ", "ओ", "औ", "आ", "अ", "ईं", "ई", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",
  "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ",
  "चै", "च", "च", "च्", "छ", "ज", "ज", "ज्", "झ", "झ्", "ञ",
  "ट्ट", "ट्ठ", "ट", "ठ", "ड्ड", "ड्ढ", "ड़", "ढ़", "ड", "ढ", "ण", "ण्",
  "त", "त", "त्", "थ", "थ्", "द्ध", "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",
  "प", "प", "प्", "फ", "फ्", "ब", "ब", "ब्", "भ", "भ्", "म", "म", "म्",
  "य", "य्", "र", "ल", "ल", "ल्",  "ळ",  "व", "व", "व्",
  "श", "श्",  "ष", "ष्", "स", "स", "स्", "ह",
  "ीं", "्र",
  "द्द", "ट्ट", "ट्ठ", "ड्ड", "कृ", "भ", "्य", "ड्ढ", "झ्", "क्र", "त्त्", "श", "श्",
  "ॉ", "ो", "ौ", "ा", "ी", "ु", "ू", "ृ", "े", "ै",
  "ं", "ँ", "ः", "ॅ", "ऽ", "ऽ", "ऽ", "ऽ", "्र", "्", "?", "़", ":",
  "‘", "’", "“", "”", ";", "(", ")", "{", "}", "=", "।", ".", "-", "µ", "॰", ",", "् ", "/"
];

const DEVANAGARI_CONSONANTS = 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळक़ख़ग़ज़ड़ढ़फ़य़ऱऩ';
const DEVANAGARI_MODIFIERS = '[\\u093e-\\u094c\\u0901\\u0902\\u0903\\u0945\\u0947\\u0948]';

/**
 * Replaces all occurrences of a search string in a text.
 */
function replaceAll(text: string, search: string, replacement: string): string {
  return text.split(search).join(replacement);
}

/**
 * Converts Krutidev 010 encoded text into standard Devanagari Unicode.
 */
export function convertKrutidevToUnicode(krutidevText: string): string {
  if (!krutidevText) return '';

  let text = krutidevText;

  // 1. Initial cleanup of space-bound symbols
  text = replaceAll(text, ' \xaa', '\xaa'); // space + ्र -> ्र
  text = replaceAll(text, ' ~j', '~j');
  text = replaceAll(text, ' z', 'z');

  // 2. Map standard characters (using ordered list)
  for (let i = 0; i < CHARS_KD.length; i++) {
    text = replaceAll(text, CHARS_KD[i], CHARS_UNICODE[i]);
  }

  // 3. Replace special composite glyphs
  text = replaceAll(text, '±', 'Zं'); // reph + anusvara
  text = replaceAll(text, 'Æ', 'र्f');
  text = replaceAll(text, 'Ç', 'fa');
  text = replaceAll(text, 'É', 'र्fa');
  text = replaceAll(text, 'Ê', 'ीZ');

  // 4. Shift chhoti-i vowel sign ('f') to the correct position (after the consonant)
  let position_of_i = text.indexOf('f');
  let loopLimit = 0;
  while (position_of_i > -1 && loopLimit < text.length) {
    if (position_of_i < text.length - 1) {
      const next_char = text.charAt(position_of_i + 1);
      const target = 'f' + next_char;
      text = replaceAll(text, target, next_char + 'ि');
    }
    position_of_i = text.indexOf('f', position_of_i + 1);
    loopLimit++;
  }

  // 5. Shift chhoti-i-anusvara ('fa') to the correct position
  let position_of_fa = text.indexOf('fa');
  loopLimit = 0;
  while (position_of_fa > -1 && loopLimit < text.length) {
    if (position_of_fa < text.length - 2) {
      const next_char = text.charAt(position_of_fa + 2);
      const target = 'fa' + next_char;
      text = replaceAll(text, target, next_char + 'िं');
    }
    position_of_fa = text.indexOf('fa', position_of_fa + 1);
    loopLimit++;
  }

  // 6. Fix chhoti-ee vowel sign placement when it lands on half-letters
  let position_of_wrong_ee = text.indexOf('ि्');
  loopLimit = 0;
  while (position_of_wrong_ee > -1 && loopLimit < text.length) {
    if (position_of_wrong_ee < text.length - 2) {
      const next_consonant = text.charAt(position_of_wrong_ee + 2);
      const target = 'ि्' + next_consonant;
      text = replaceAll(text, target, '्' + next_consonant + 'ि');
    }
    position_of_wrong_ee = text.indexOf('ि्', position_of_wrong_ee + 2);
    loopLimit++;
  }

  // 7. Fix reph ('Z') placement by moving it to the front of consonant clusters
  const set_of_matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ ॉ ः ़";
  let position_of_R = text.indexOf('Z');
  loopLimit = 0;
  while (position_of_R > -1 && loopLimit < text.length) {
    let probable_position = position_of_R - 1;
    
    // 1. Skip trailing matras/modifiers
    while (probable_position >= 0 && set_of_matras.indexOf(text.charAt(probable_position)) > -1) {
      probable_position--;
    }
    
    // 2. Skip exactly one base consonant
    if (probable_position >= 0 && DEVANAGARI_CONSONANTS.indexOf(text.charAt(probable_position)) > -1) {
      probable_position--;
    }
    
    // 3. Skip any preceding half-consonants (consonant + halant '्')
    while (probable_position >= 1 && text.charAt(probable_position) === '्' && DEVANAGARI_CONSONANTS.indexOf(text.charAt(probable_position - 1)) > -1) {
      probable_position -= 2;
    }
    
    // The cluster starts at probable_position + 1
    const cluster_start = probable_position + 1;
    if (cluster_start < position_of_R) {
      const cluster = text.substring(cluster_start, position_of_R);
      text = replaceAll(text, cluster + 'Z', 'र्' + cluster);
    }
    position_of_R = text.indexOf('Z');
    loopLimit++;
  }

  return text;
}

/**
 * Converts standard Devanagari Unicode text into legacy Krutidev 010 format.
 */
export function convertUnicodeToKrutidev(unicodeText: string): string {
  if (!unicodeText) return '';

  let text = unicodeText;

  // 1. Shift Devanagari chhoti-i matra (ि) to the front of the consonant cluster
  // In Unicode, it comes AFTER the cluster. In Krutidev, it must be typed BEFORE.
  const clusterRegex = new RegExp('(ि)?((?:[' + DEVANAGARI_CONSONANTS + ']्)*[' + DEVANAGARI_CONSONANTS + '])ि', 'g');
  text = text.replace(clusterRegex, 'ि$2');

  // 2. Shift Devanagari reph (र्) to the end of the consonant cluster + matras
  // In Unicode, it is stored BEFORE the consonant cluster. In Krutidev, it is typed AFTER.
  const rephRegex = new RegExp('र्(ि?(?:[' + DEVANAGARI_CONSONANTS + ']्)*[' + DEVANAGARI_CONSONANTS + ']' + DEVANAGARI_MODIFIERS + '*)', 'g');
  text = text.replace(rephRegex, '$1Z');

  // 3. Map Unicode characters to Krutidev equivalents using the ordered arrays
  for (let i = 0; i < CHARS_UNICODE.length; i++) {
    text = replaceAll(text, CHARS_UNICODE[i], CHARS_KD[i]);
  }

  return text;
}
