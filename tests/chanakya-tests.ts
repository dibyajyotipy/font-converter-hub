import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from '../src/utils/krutidevConverter';
import { convertChanakyaToUnicode, convertUnicodeToChanakya, convertKrutidevToChanakya, convertChanakyaToKrutidev } from '../src/utils/chanakyaConverter';

console.log('\n=== CHANAKYA CONVERTER TESTS ===\n');

let passed = 0;
let total = 0;

function test(name: string, actual: string, expected: string) {
  total++;
  if (actual === expected) {
    console.log(`✅ PASS ${name}`);
    passed++;
  } else {
    console.log(`❌ FAIL ${name}`);
    console.log('  Expected:', JSON.stringify(expected));
    console.log('  Actual:  ', JSON.stringify(actual));
    // Show char codes for debugging
    console.log('  Expected codes:', [...expected].map(c => c.charCodeAt(0).toString(16)));
    console.log('  Actual codes:  ', [...actual].map(c => c.charCodeAt(0).toString(16)));
    console.log('');
  }
}

// ── Test 1: Round-trip KrutiDev → Unicode → Chanakya → Unicode → KrutiDev ──
const kd_input = 'd`frnso gC esa vkidk Lokxr gSA';
const unicode_from_kd = convertKrutidevToUnicode(kd_input);
console.log('KrutiDev input:', kd_input);
console.log('Unicode (intermediate):', unicode_from_kd);

const chanakya_output = convertUnicodeToChanakya(unicode_from_kd);
console.log('Chanakya output:', chanakya_output);

const unicode_back = convertChanakyaToUnicode(chanakya_output);
console.log('Unicode (round-trip back):', unicode_back);

test(
  'Test 1: Round-trip Unicode → Chanakya → Unicode preserves text',
  unicode_back.normalize('NFC'),
  unicode_from_kd.normalize('NFC')
);

// ── Test 2: Relay KrutiDev → Chanakya ──
const chanakya_via_relay = convertKrutidevToChanakya(kd_input);
test(
  'Test 2: KrutiDev → Chanakya relay matches direct Unicode→Chanakya',
  chanakya_via_relay,
  chanakya_output
);

// ── Test 3: Known Hindi sentence through Chanakya ──
const hindi_unicode = 'हिंदी हमारी राजभाषा है।';
const chanakya_hindi = convertUnicodeToChanakya(hindi_unicode);
const back_to_unicode = convertChanakyaToUnicode(chanakya_hindi);
console.log('\nHindi Unicode:', hindi_unicode);
console.log('Chanakya:', chanakya_hindi);
console.log('Back to Unicode:', back_to_unicode);
test(
  'Test 3: Hindi sentence round-trip via Chanakya',
  back_to_unicode.normalize('NFC'),
  hindi_unicode.normalize('NFC')
);

// ── Test 4: Complex conjuncts - KrutiDev with chhoti-ee and reph ──
const kd_complex = 'fganh gekjh jktHkk\"kk gSA';
const unicode_complex = convertKrutidevToUnicode(kd_complex);
const chanakya_complex = convertKrutidevToChanakya(kd_complex);
const back_complex = convertChanakyaToUnicode(chanakya_complex);
console.log('\nKrutiDev complex:', kd_complex);
console.log('Unicode:', unicode_complex);
console.log('Chanakya:', chanakya_complex);
console.log('Back to Unicode:', back_complex);
test(
  'Test 4: Complex conjuncts (chhoti-ee, reph) round-trip',
  back_complex.normalize('NFC'),
  unicode_complex.normalize('NFC')
);

// ── Test 5: Government form text ──
const kd_govform = 'vkosnu i=k%\nizkFkhZ dk uke% jke dqekj';
const unicode_govform = convertKrutidevToUnicode(kd_govform);
const chanakya_govform = convertKrutidevToChanakya(kd_govform);
const back_govform = convertChanakyaToUnicode(chanakya_govform);
console.log('\nGovt form KrutiDev:', kd_govform);
console.log('Unicode:', unicode_govform);
console.log('Chanakya:', chanakya_govform);
console.log('Back to Unicode:', back_govform);
test(
  'Test 5: Government form text round-trip',
  back_govform.normalize('NFC'),
  unicode_govform.normalize('NFC')
);

// ── Test 6: Chanakya → KrutiDev relay (reverse direction) ──
const chanakya_reverse_test = convertKrutidevToChanakya(kd_input);
const kd_from_chanakya = convertChanakyaToKrutidev(chanakya_reverse_test);
const unicode_from_roundtrip_kd = convertKrutidevToUnicode(kd_from_chanakya);
console.log('\nReverse relay test:');
console.log('Original KrutiDev:', kd_input);
console.log('KrutiDev from Chanakya:', kd_from_chanakya);
console.log('Unicode from round-trip KD:', unicode_from_roundtrip_kd);
console.log('Unicode original:', unicode_from_kd);
test(
  'Test 6: KD→Chanakya→KD→Unicode matches original Unicode',
  unicode_from_roundtrip_kd.normalize('NFC'),
  unicode_from_kd.normalize('NFC')
);

// ── Test 7: Empty and null inputs ──
test('Test 7a: Empty string', convertKrutidevToChanakya(''), '');
test('Test 7b: Empty string reverse', convertChanakyaToKrutidev(''), '');

// ── Test 8: Numbers ──
const kd_numbers = 'å ƒ „ … † ‡ ˆ ‰ Š ‹';
const unicode_numbers = convertKrutidevToUnicode(kd_numbers);
const chanakya_numbers = convertKrutidevToChanakya(kd_numbers);
const back_numbers = convertChanakyaToUnicode(chanakya_numbers);
console.log('\nNumbers test:');
console.log('KrutiDev:', kd_numbers);
console.log('Unicode:', unicode_numbers);
console.log('Chanakya:', chanakya_numbers);
console.log('Back:', back_numbers);
test(
  'Test 8: Devanagari numbers through Chanakya (Devanagari numerals round-trip)',
  back_numbers,
  '० १ २ ३ ४ ५ ६ ७ ८ ९'
);

// ── Test 9: Buggy Words Session Assertions (स्त्रियों, धर्म, कर्म) ──
console.log('\nBuggy words session assertions:');
test(
  'Test 9a: Unicode to Chanakya for "स्त्रियों"',
  convertUnicodeToChanakya('स्त्रियों'),
  'çSÌýØô¢'
);
test(
  'Test 9b: Chanakya to Unicode for "स्त्रियों"',
  convertChanakyaToUnicode('çSÌýØô¢'),
  'स्त्रियों'
);
test(
  'Test 9c: Unicode to Chanakya for "धर्म"',
  convertUnicodeToChanakya('धर्म'),
  'Ï×ü'
);
test(
  'Test 9d: Chanakya to Unicode for "धर्म"',
  convertChanakyaToUnicode('Ï×ü'),
  'धर्म'
);
test(
  'Test 9e: Unicode to Chanakya for "कर्म"',
  convertUnicodeToChanakya('कर्म'),
  '·¤×ü'
);
test(
  'Test 9f: Chanakya to Unicode for "कर्म"',
  convertChanakyaToUnicode('·¤×ü'),
  'कर्म'
);

// ── Test 10: Full Test Sentence 1 ──
console.log('\nFull Test Sentence 1 assertions:');
const sent1_uni = 'शिक्षा, ज्ञान और चरित्र जीवन के आधार हैं। स्त्रियों की स्थिति समाज का दर्पण है। धर्म और कर्म से व्यक्ति महान बनता है।';
const sent1_kd = 'f\'k¿kk] Kku vkSj pfj¾ thOku ds vk/kkj gSaA fL¾;ksa dh fLFkfr Lkekt dk niZ.k gSA /keZ vkSj deZ Lks O;fDr egku curk gSA';
const sent1_ch = 'çàæÿææ, ™ææÙ ¥õÚU ¿çÚUÌý ÁèßÙ ·¤Ô ¥æÏæÚU ãñ¢Ð çSÌýØô¢ ·¤è çSÍçÌ â×æÁ ·¤æ ÎÂü‡æ ãñÐ Ï×ü ¥õÚU ·¤×ü âÔ ÃØçQ ×ãæÙ ÕÙÌæ ãñÐ';

test('Test 10a: Unicode to Chanakya', convertUnicodeToChanakya(sent1_uni), sent1_ch);
test('Test 10b: Chanakya to Unicode', convertChanakyaToUnicode(sent1_ch), sent1_uni);
test('Test 10c: KrutiDev to Chanakya', convertKrutidevToChanakya(sent1_kd), sent1_ch);
test('Test 10d: Chanakya to KrutiDev', convertChanakyaToKrutidev(sent1_ch), sent1_kd);

// ── Test 11: Full Test Sentence 2 (Real Govt Notice Excerpt) ──
console.log('\nFull Test Sentence 2 (Real Govt Notice Excerpt) assertions:');
const sent2_uni = 'उम्मीदवारों की न्यूनतम आयु १८ वर्ष होनी चाहिए तथा शैक्षणिक योग्यता D.El.Ed होना आवश्यक है। क्या आप तैयार हैं?';
const sent2_ch = '©×÷×èÎßæÚUô¢ ·¤è ‹ØêÙÌ× ¥æØé 18 ßáü ãôÙè ¿æçã° ÌÍæ àæñÿæç‡æ·¤ Øô‚ØÌæ D.El.Ed ãôÙæ ¥æßàØ·¤ ãñÐ €UØæ ¥æÂ ÌñØæÚU ãñ¢?';
const sent2_ch_from_kd = '©×÷×èÎßæÚUô¢ ·¤è ‹ØêÙÌ× ¥æØé 18 ßáü ãôÙè ¿æçã° ÌÍæ àæñÿæç‡æ·¤ Øô‚ØÌæ €U.×÷â.×÷·¤ ãôÙæ ¥æßàØ·¤ ãñÐ €UØæ ¥æÂ ÌñØæÚU ãñ¢?';
const sent2_kd_from_ch = "mEehnOkkjksa dh U;wure vk;q ƒŠ Ok\"kZ gksuh pkfg, rFkk 'kS¿kf.kd ;ksX;rk D-El-Ed gksuk vkOk';d gSA D;k vki rS;kj gSa\\";

test('Test 11a: Unicode to Chanakya', convertUnicodeToChanakya(sent2_uni), sent2_ch);
test('Test 11b: Chanakya to Unicode', convertChanakyaToUnicode(sent2_ch), sent2_uni);
test('Test 11c: Chanakya to KrutiDev', convertChanakyaToKrutidev(sent2_ch), sent2_kd_from_ch);
test('Test 11d: KrutiDev to Chanakya (converts English to Chanakya equivalents)', convertKrutidevToChanakya(sent2_kd_from_ch), sent2_ch_from_kd);

console.log(`\n=== Result: ${passed}/${total} tests passed ===\n`);

process.exit(passed === total ? 0 : 1);
