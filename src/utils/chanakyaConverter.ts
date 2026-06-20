// Chanakya ↔ Unicode Converter - Clean Room Rebuild (Fixed)
// Built independently without consulting GPL code.

import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from './krutidevConverter';

const uniToChanakya: Record<string, string> = {
  // Vowels
  'अ': '¥', 'आ': '¥æ', 'इ': '§', 'ई': '§ü', 'उ': '©', 'ऊ': 'ª', 'ऋ': '«', 'ए': '°', 'ऐ': '°ð', 'ओ': '¥ô', 'औ': '¥õ',
  // Consonants
  'क': '·¤', 'ख': '¹', 'ग': '»', 'घ': 'ƒæ', 'ङ': '¾',
  'च': '¿', 'छ': 'À', 'ज': 'Á', 'झ': 'Ûæ', 'ञ': '†æ',
  'ट': 'ÅU', 'ठ': 'Æ', 'ड': 'Ç', 'ढ': 'É', 'ण': '‡æ',
  'त': 'Ì', 'थ': 'Í', 'द': 'Î', 'ध': 'Ï', 'न': 'Ù',
  'प': 'Â', 'फ': 'È', 'ब': 'Õ', 'भ': 'Ö', 'म': '×',
  'य': 'Ø', 'र': 'ÚU', 'ल': 'Ü', 'व': 'ß',
  'श': 'àæ', 'ष': 'á', 'स': 'â', 'ह': 'ã',
  
  // Conjuncts / Special
  'क्त': 'Q', 'क्ष': 'ÿæ', 'त्र': 'Ìý', 'ज्ञ': '™æ', 'श्र': 'Ÿæ',
  
  // Half Consonants
  'क्': '€U', 'ख्': '¹÷', 'ग्': '‚', 'घ्': 'ƒ', 'च्': "'", 'ज्': '…', 'ञ्': '†',
  'ट्': 'ÅU÷', 'ठ्': 'Æ÷', 'ड्': 'Ç÷', 'ढ्': 'É÷', 'ण्': '‡',
  'त्': 'ˆ', 'थ्': '‰', 'ध्': 'Š', 'न्': '‹', 'प्': 'Œ', 'फ्': 'È÷', 'ब्': 'Ž', 'भ्': 'Ö÷', 'म्': '×÷',
  'य्': 'Ä', 'ल्': 'Ë', 'व्': 'Ã', 'श्': 'à', 'ष्': 'c', 'स्': 'S', 'ह्': '±',
  
  // Subjoined Ra (ra-kar)
  '्र': 'ý',
  
  // Matras
  'ा': 'æ', 'ि': 'ç', 'ी': 'è', 'ु': 'é', 'ू': 'ê', 'ृ': 'ë', 'े': 'Ô', 'ै': 'ñ', 'ो': 'ô', 'ौ': 'õ',
  'ं': '¢', 'ँ': '¡', 'ः': 'Ñ', '्': '÷', '़': '¸', 'ऽ': 'ù',
  
  // Digits
  '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
  
  // Punctuation
  '।': 'Ð', '॥': 'H', ',': ',', '.': '.', '-': '-', ' ': ' '
};

// Sort mappings by descending key length
const uniToChanakyaSorted = Object.entries(uniToChanakya)
  .sort((a, b) => b[0].length - a[0].length);

// Build reverse mappings: Chanakya to Unicode, sorted by descending Chanakya key length
const chanakyaToUniSorted = Object.entries(uniToChanakya)
  .map(([u, c]) => ({ u, c }))
  .sort((a, b) => b.c.length - a.c.length);

export function convertUnicodeToChanakya(text: string): string {
  if (!text) return '';
  let res = text;
  
  // 1. Pre-process Reph (र् + consonant cluster + optional matra)
  // If followed by anusvara (ं), map to Z (reph + anusvara combined glyph)
  const rephWithAnusvaraRegex = /र्([क-ह](?:्[क-ह])*[ािीुूृेैोौ]?)ं/g;
  res = res.replace(rephWithAnusvaraRegex, '$1Z');
  res = res.replace(rephWithAnusvaraRegex, '$1Z');
  
  // Otherwise, map to ü (reph only hook glyph)
  const rephOnlyRegex = /र्([क-ह](?:्[क-ह])*[ािीुूृेैोौ]?)/g;
  res = res.replace(rephOnlyRegex, '$1ü');
  res = res.replace(rephOnlyRegex, '$1ü');
  
  // 2. Pre-process chhoti-ee (ि) movement.
  // Visual layout requires chhoti-ee to be typed before the entire consonant cluster.
  let pos = res.indexOf('ि');
  while (pos !== -1) {
    if (pos > 0) {
      let target = pos - 1;
      while (target > 1 && res[target - 1] === '्') {
        target -= 2;
      }
      res = res.substring(0, target) + 'ç' + res.substring(target, pos) + res.substring(pos + 1);
      pos = res.indexOf('ि', target + 2);
    } else {
      pos = res.indexOf('ि', pos + 1);
    }
  }

  // 3. Simple replacement loop
  for (const [u, c] of uniToChanakyaSorted) {
    res = res.split(u).join(c);
  }
  
  return res;
}

export function convertChanakyaToUnicode(text: string): string {
  if (!text) return '';
  let res = text;
  
  // 1. Direct replacements (except 'ç' which is handled via position logic)
  for (const { c, u } of chanakyaToUniSorted) {
    if (c === 'ç') continue;
    res = res.split(c).join(u);
  }
  
  // 2. Process Reph
  // Z maps back to र् + cluster + ं (reph + anusvara)
  res = res.replace(/(([क-ह]्)*[क-ह][ािीुूृेैोौ]?)Z/g, 'र्$1ं');
  
  // ü maps back to र् + cluster (reph only)
  res = res.replace(/(([क-ह]्)*[क-ह][ािीुूृेैोौ]?)ü/g, 'र्$1');
  
  // 3. Process chhoti-ee (ç -> ि suffix after the cluster)
  // Pattern: ç followed by ([क-ह]्)*[क-ह]
  res = res.replace(/ç(([क-ह]्)*[क-ह])/g, '$1ि');
  
  // Fallback for any leftover ç
  res = res.split('ç').join('ि');
  
  return res;
}

export function convertKrutidevToChanakya(krutidevText: string): string {
  if (!krutidevText) return '';
  const unicodeText = convertKrutidevToUnicode(krutidevText);
  return convertUnicodeToChanakya(unicodeText);
}

export function convertChanakyaToKrutidev(chanakyaText: string): string {
  if (!chanakyaText) return '';
  const unicodeText = convertChanakyaToUnicode(chanakyaText);
  return convertUnicodeToKrutidev(unicodeText);
}
