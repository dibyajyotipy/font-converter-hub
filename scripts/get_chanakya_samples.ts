import { convertUnicodeToChanakya } from '../src/utils/chanakyaConverter';

const sampleLetter = `सेवा में,
विभागाध्यक्ष महोदय,

विषय: काम की प्रगति के संबंध में।

महोदय,
विनम्र निवेदन है कि हमारे विभाग का काम तेजी से चल रहा है।`;

const govForm = `आवेदन पत्र:
प्रार्थी का नाम: राम कुमार
पिता का नाम: श्री लालचंद
राष्ट्रीयता: भारतीय
पता: विकास नगर, नई दिल्ली`;

const hindiParagraph = `हिंदी हमारी राजभाषा है। यह विश्व की सबसे वैज्ञानिक भाषाओं में से एक है। इसकी लिपि देवनागरी है जो अत्यंत स्पष्ट और वैज्ञानिक है।`;

console.log('--- SAMPLE LETTER ---');
console.log(convertUnicodeToChanakya(sampleLetter));
console.log('--- GOVT FORM ---');
console.log(convertUnicodeToChanakya(govForm));
console.log('--- HINDI PARAGRAPH ---');
console.log(convertUnicodeToChanakya(hindiParagraph));
