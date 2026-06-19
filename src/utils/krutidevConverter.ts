/**
 * Production-Grade Krutidev 010 to Devanagari Unicode Converter
 */

const CHARS_KD = [
  "ñ", "Q+Z", "sas", "aa", ")Z", "ZZ",
  "å", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹",
  "¶+", "d+", "[+k", "[+", "x+", "T+", "t+", "M+", "<+", "Q+", ";+", "j+", "u+",
  "Ùk", "Ù", "ä", "–", "—", "é", "™", "=kk", "f=k",
  "à", "á", "â", "ã", "ºz", "º", "í", "{k", "{", "=", "«",
  "Nî", "Vî", "Bî", "Mî", "<î", "|", "K", "}",
  "J", "Vª", "Mª", "<ªª", "Nª", "Ø", "Ý", "nzZ", "æ", "ç", "Á", "xz", "#", ":",
  "vksS", "vkS", "vks", "v‚", "vk", "v", "b±", "Ã", "bZ", "b", "m", "Å", ",s", ",", "_",
  "ô", "Dk", "d", "D", "[k", "[", "Xk", "x", "X", "Ä", "?k", "?", "³",
  "pkS", "Pk", "p", "P", "N", "Tk", "t", "T", ">", "÷", "¥",
  "ê", "ë", "V", "B", "ì", "ï", "M+", "<+", "M", "<", ".k", ".",
  "Rk", "r", "R", "Fk", "F", ")", "n", "/k", "èk", "/", "Ë", "è", "Uk", "u", "U",
  "Ik", "i", "I", "Q", "¶", "Ck", "c", "C", "Hk", "H", "Ek", "e", "E",
  ";", "¸", "j", "Yk", "y", "Y", "G", "Ok", "o", "O",
  "'k", "'", "\"k", "\"", "Lk", "l", "L", "g",
  "È", "z",
  "Ì", "Í", "Î", "Ï", "Ñ", "Ò", "Ó", "Ô", "Ö", "Ø", "Ù", "Ük", "Ü",
  "ksS", "kS", "ks", "‚", "k", "h", "q", "w", "`", "s", "S",
  "a", "¡", "%", "W", "•", "·", "∙", "~j", "~", "+", " ः",
  "^", "*", "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "Œ", "]", "~ ", "@"
];

const CHARS_UNICODE = [
  "॰", "QZ+", "sa", "a", "र्द्ध", "Z",
  "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
  "फ़्", "क़", "ख़", "ख़्", "ग़", "ज़्", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऩ",
  "त्त", "त्त्", "क्त", "दृ", "कृ", "न्न", "न्न्", "=k", "f=",
  "ह्न", "ह्य", "हृ", "ह्म", "ह्र", "ह्", "द्द", "क्ष", "क्ष्", "त्र", "त्र्",
  "छ्य", "ट्य", "ठ्य", "ड्य", "ढ्य", "द्य", "ज्ञ", "द्व",
  "श्र", "ट्र", "ड्र", "ढ्र", "छ्र", "क्र", "फ्र", "र्द्र", "द्र", "प्र", "प्र", "ग्र", "रु", "रू",
  "औ", "औ", "ओ", "ऑ", "आ", "अ", "ईं", "ई", "ई", "इ", "उ", "ऊ", "ऐ", "ए", "ऋ",
  "क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ",
  "चै", "च", "च", "च्", "छ", "ज", "ज", "ज्", "झ", "झ्", "ञ",
  "ट्ट", "ट्ठ", "ट", "ठ", "ड्ड", "ड्ढ", "ड़", "ढ़", "ड", "ढ", "ण", "ण्",
  "त", "त", "त्", "थ", "थ्", "द्ध", "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",
  "प", "प", "प्", "फ", "फ्", "ब", "ब", "ब्", "भ", "भ्", "म", "म", "म्",
  "य", "य्", "र", "ल", "ल", "ल्",  "ळ",  "व", "व", "व्",
  "श", "श्",  "ष", "ष्", "स", "स", "स्", "ह",
  "ीं", "्र",
  "द्द", "ट्ट", "ट्ठ", "ड्ड", "कृ", "भ", "्य", "ड्ढ", "झ्", "क्र", "त्त्", "श", "श्",
  "ौ", "ौ", "ो", "ॉ", "ा", "ी", "ु", "ू", "ृ", "े", "ै",
  "ं", "ँ", "ः", "ॅ", "ऽ", "ऽ", "ऽ", "्र", "्", "़", ":",
  "‘", "’", "“", "”", ";", "(", ")", "{", "}", "=", "।", ".", "-", "॰", ",", "् ", "/"
];

const DEVANAGARI_CONSONANTS = 'कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळक़ख़ग़ज़ड़ढ़फ़य़ऱऩ';

function replaceAll(text: string, search: string, replacement: string): string {
  return text.split(search).join(replacement);
}

export function convertKrutidevToUnicode(krutidevText: string): string {
  if (!krutidevText) return '';

  let text = krutidevText;

  // 1. Data Sanitization
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');

  // 2. Pre-Mapping Visual Formatting Fixes
  text = replaceAll(text, ' \xaa', '\xaa');
  text = replaceAll(text, ' ~j', '~j');
  text = replaceAll(text, ' z', 'z');
  text = replaceAll(text, '\\"', '"');
  text = text.replace(/^\]oa/g, 'एवं').replace(/ \]oa/g, ' एवं');
  text = replaceAll(text, 'rRo', 'rÙo'); 

  // 3. Core Array Mapping
  for (let i = 0; i < CHARS_KD.length; i++) {
    text = replaceAll(text, CHARS_KD[i], CHARS_UNICODE[i]);
  }

  // 4. Special Composite Glyphs Post-Pass
  text = replaceAll(text, '±', 'Zं'); 
  text = replaceAll(text, 'Æ', 'र्f');
  text = replaceAll(text, 'Ç', 'fa');
  text = replaceAll(text, 'É', 'र्fa');
  text = replaceAll(text, 'Ê', 'ीZ');

  // 5. The "Chhoti Ee" (f) Shift 
  text = text.replace(/f((?:[\u0900-\u097F]\u094d)*[\u0900-\u097F])/g, '$1\u093f');
  text = text.replace(/fa((?:[\u0900-\u097F]\u094d)*[\u0900-\u097F])/g, '$1\u093f\u0902');
  text = text.replace(/\u093f\u094d((?:[\u0900-\u097F]\u094d)*[\u0900-\u097F])/g, '\u094d$1\u093f');

  // 6. The "Reph" (Z -> र्) Shift
  const matras = "अआइईउऊएऐओऔािीुूृेैोौं:ँॅॉः़";
  let rephPos = text.indexOf('Z');
  let safetyLoop = 0; 
  
  while (rephPos > -1 && safetyLoop < text.length) {
    let probPos = rephPos - 1;
    
    while (probPos >= 0 && matras.includes(text.charAt(probPos))) probPos--;
    if (probPos >= 0 && DEVANAGARI_CONSONANTS.includes(text.charAt(probPos))) probPos--;
    while (probPos >= 1 && text.charAt(probPos) === '्' && DEVANAGARI_CONSONANTS.includes(text.charAt(probPos - 1))) {
      probPos -= 2;
    }
    
    const clusterStart = probPos + 1;
    
    if (clusterStart < rephPos) {
      text = text.substring(0, clusterStart) + 'र्' + text.substring(clusterStart, rephPos) + text.substring(rephPos + 1);
    } else {
      text = text.substring(0, rephPos) + 'र्' + text.substring(rephPos + 1);
    }
    
    rephPos = text.indexOf('Z');
    safetyLoop++;
  }

  // 7. Final Output Normalization
  text = replaceAll(text, '\\', '?'); 
  text = replaceAll(text, 'ओै', 'औ');
  
  // Fix misplaced Nuktas that typists put after the matra instead of before (e.g., जो़ -> ज़ो)
  text = text.replace(/([ािीुूृेैोौ])़/g, '़$1');

  return text;
}

const UNICODE_TO_KRUTIDEV_PAIRS: [string, string][] = [
  // Punctuation & English Symbols
  ["‘", "^"],
  ["’", "*"],
  ["“", "Þ"],
  ["”", "ß"],
  ["(", "¼"],
  [")", "½"],
  ["{", "¿"],
  ["}", "À"],
  ["=", "¾"],
  ["।", "A"],
  ["?", "\\"],
  ["-", "&"],
  ["µ", "&"],
  ["॰", "Œ"],
  [",", "]"],
  [".", "-"],
  ["् ", "~ "],
  
  // Numbers
  ["०", "å"],
  ["१", "ƒ"],
  ["२", "„"],
  ["३", "…"],
  ["४", "†"],
  ["५", "‡"],
  ["६", "ˆ"],
  ["७", "‰"],
  ["८", "Š"],
  ["९", "‹"],
  ["x", "Û"],

  // Special Combined / Nukta Characters
  ["फ़्", "¶"],
  ["क़", "d"],
  ["ख़", "[k"],
  ["ग़", "x"],
  ["ज़्", "T"],
  ["ज़", "t"],
  ["ड़", "M+"],
  ["ढ़", "<+"],
  ["फ़", "Q"],
  ["य़", ";"],
  ["ऱ", "j"],
  ["ऩ", "u"],
  ["त्त्", "Ù"],
  ["त्त", "Ùk"],
  ["क्त", "Dr"],
  ["दृ", "–"],
  ["कृ", "—"],
  
  // Conjuncts & Half Characters
  ["ह्न", "à"],
  ["ह्य", "á"],
  ["हृ", "â"],
  ["ह्म", "ã"],
  ["ह्र", "ºz"],
  ["ह्", "º"],
  ["द्द", "í"],
  ["क्ष्", "{"],
  ["क्ष", "{k"],
  ["त्र्", "«"],
  ["त्र", "="],
  ["ज्ञ", "K"],
  ["छ्य", "Nî"],
  ["ट्य", "Vî"],
  ["ठ्य", "Bî"],
  ["ड्य", "Mî"],
  ["ढ्य", "<î"],
  ["द्य", "|"],
  ["द्व", "}"],
  ["श्र", "J"],
  ["ट्र", "Vª"],
  ["ड्र", "Mª"],
  ["ढ्र", "<ªª"],
  ["छ्र", "Nª"],
  ["क्र", "Ø"],
  ["फ्र", "Ý"],
  ["द्र", "æ"],
  ["प्र", "ç"],
  ["ग्र", "xz"],
  ["रु", "#"],
  ["रू", ":"],
  ["्र", "z"],
  
  // Independent Vowels
  ["ओ", "vks"],
  ["औ", "vkS"],
  ["आ", "vk"],
  ["अ", "v"],
  ["ई", "bZ"],
  ["इ", "b"],
  ["उ", "m"],
  ["ऊ", "Å"],
  ["ऐ", ",s"],
  ["ए", ","],
  ["ऋ", "_"],

  // Consonants & Half Consonants
  ["क्", "D"],
  ["क", "d"],
  ["क्क", "ô"],
  ["ख्", "["],
  ["ख", "[k"],
  ["ग्", "X"],
  ["ग", "x"],
  ["घ्", "?"],
  ["घ", "?k"],
  ["ङ", "³"],
  ["चौ", "pkS"],
  ["चै", "pS"],
  ["च्", "P"],
  ["च", "p"],
  ["छ", "N"],
  ["ज्", "T"],
  ["ज", "t"],
  ["झ्", "÷"],
  ["झ", ">"],
  ["ञ", "¥"],
  
  // Beckett / Remington Special Keys
  ["ट्ट", "ê"],
  ["ट्ठ", "ë"],
  ["ट", "V"],
  ["ठ", "B"],
  ["ड्ड", "ì"],
  ["ड्ढ", "ï"],
  ["ड", "M"],
  ["ढ", "<"],
  ["ण्", "."],
  ["ण", ".k"],

  ["त्", "R"],
  ["त", "r"],
  ["थ्", "F"],
  ["थ", "Fk"],
  ["द्ध", ")"],
  ["द", "n"],
  ["ध्", "/"],
  ["ध", "/k"],
  ["न्", "U"],
  ["न", "u"],

  ["प्", "I"],
  ["प", "i"],
  ["फ्", "¶"],
  ["फ", "Q"],
  ["ब्", "C"],
  ["ब", "c"],
  ["भ्", "H"],
  ["भ", "Hk"],
  ["म्", "E"],
  ["म", "e"],

  ["य्", "¸"],
  ["य", ";"],
  ["र", "j"],
  ["ल्", "Y"],
  ["ल", "Yk"],
  ["ळ", "G"],
  ["व्", "O"],
  ["व", "Ok"],

  ["श्", "'"],
  ["श", "'k"],
  ["ष्", "\""],
  ["ष", "\"k"],
  ["स्", "L"],
  ["स", "Lk"],
  ["ह", "g"],

  // Matras & Vowel Signs
  ["ऑ", "v‚"],
  ["ॉ", "‚"],
  ["ो", "ks"],
  ["ौ", "kS"],
  ["ा", "k"],
  ["ी", "h"],
  ["ु", "q"],
  ["ू", "w"],
  ["ृ", "`"],
  ["े", "s"],
  ["ै", "S"],
  ["ं", "a"],
  ["ँ", "¡"],
  ["ः", "%"],
  ["ॅ", "W"],
  ["ऽ", "·"],
  ["़", "+"],
  ["्", "~"]
];

UNICODE_TO_KRUTIDEV_PAIRS.sort((a, b) => b[0].length - a[0].length);

export function convertUnicodeToKrutidev(unicodeText: string): string {
  if (!unicodeText) return '';

  let text = unicodeText;

  // 1. Data Sanitization
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, '');

  // 2. Reph (र्) Shift: Move half-R (र + ्) to the end of the consonant cluster + matras, and replace with 'Z'
  // Unicode Reph is \u0930\u094d (र्)
  text = text.replace(/\u0930\u094d((?:[\u0900-\u097F]\u094d)*[\u0900-\u097F][\u093e-\u094d\u0901-\u0903]*)/g, '$1Z');

  // 3. Chhoti-Ee (ि) Shift: Move chhoti-ee matra (\u093f) to the front of the preceding consonant cluster, and replace with 'f'
  text = text.replace(/((?:[\u0900-\u097F]\u094d)*[\u0900-\u097F])\u093f\u0902/g, 'fa$1');
  text = text.replace(/((?:[\u0900-\u097F]\u094d)*[\u0900-\u097F])\u093f/g, 'f$1');

  // 4. Character Replacements
  for (const [unicodeStr, krutidevStr] of UNICODE_TO_KRUTIDEV_PAIRS) {
    text = replaceAll(text, unicodeStr, krutidevStr);
  }

  return text;
}