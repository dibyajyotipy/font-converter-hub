export interface FAQItem {
  q: string;
  a: string;
}

export interface HowToStep {
  title: string;
  steps: string[];
  type?: 'brand' | 'amber';
}

export interface AboutSection {
  title: string;
  paragraphs: string[];
}

export interface Placeholders {
  input: string;
  output: string;
}

export interface ExampleChip {
  label: string;
  text: string;
}

export interface ExampleData {
  default: string;
  chips: ExampleChip[];
}

export interface ConverterInfo {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  href: string;
  slug: string;
  direction: 'krutidev-to-unicode' | 'unicode-to-krutidev';
  badge?: string;
  keywords?: string[];
  placeholders: Placeholders;
  faq: FAQItem[];
  howTo: HowToStep;
  about?: AboutSection;
  relatedTools?: string[];
  examples?: ExampleData;
  swapTarget?: string;
}

export const CONVERTERS: ConverterInfo[] = [
  {
    id: 'krutidev-to-unicode',
    name: 'Krutidev to Unicode Converter',
    shortName: 'Krutidev to Unicode',
    description: 'Convert Krutidev 010 text to Unicode instantly. Fast, private and browser-based.',
    longDescription: 'Convert legacy Krutidev font characters to Devanagari Unicode (Mangal/Arial Unicode MS) in real time.',
    href: '/krutidev-to-unicode',
    slug: 'krutidev-to-unicode',
    direction: 'krutidev-to-unicode',
    swapTarget: '/unicode-to-krutidev',
    keywords: [
      'krutidev to unicode',
      'krutidev 010 to unicode',
      'hindi font converter',
      'krutidev to mangal',
      'mangal font converter'
    ],
    placeholders: {
      input: 'कृत्तिदेव टेक्स्ट यहाँ पेस्ट या टाइप करें। उदाहरण: "d`frnso gC vksj fganh"',
      output: 'यूनिकोड (मंगल फॉन्ट) में परिवर्तित टेक्स्ट यहाँ दिखाई देगा...'
    },
    faq: [
      {
        q: 'What is Krutidev 010?',
        a: 'Krutidev 010 is a popular legacy, non-Unicode Devanagari font. It uses the Remington typewriter layout mapping, which translates English keystrokes into Hindi characters visually.'
      },
      {
        q: 'What is Unicode?',
        a: 'Unicode is the universal character encoding standard that represents Devanagari text natively on all modern digital platforms, search engines, and operating systems without needing custom font files.'
      },
      {
        q: 'Why convert Krutidev to Unicode?',
        a: 'Krutidev text is unreadable on mobile phones, emails, or search engines unless a specific font is installed. Converting to Unicode standardizes the text, making it accessible, searchable, and web-ready.'
      },
      {
        q: 'Can I use the converted text in MS Word?',
        a: 'Yes. Once copied, the Unicode Devanagari text can be pasted directly into MS Word (where it will render in the Mangal font), Google Docs, and web applications.'
      },
      {
        q: 'Is my data uploaded anywhere?',
        a: 'No. The conversion is performed 100% locally in your web browser. No text is sent to our servers, ensuring your documents remain completely private and secure.'
      }
    ],
    howTo: {
      title: 'How to Convert Krutidev 010 to Unicode Devanagari',
      steps: [
        'Type or paste your legacy <strong>Krutidev 010</strong> text in the left (or top on mobile) input text area.',
        'The converter will automatically process your input client-side in real time.',
        'Your converted standard <strong>Unicode Devanagari</strong> text will appear in the right (or bottom on mobile) output area.',
        'Click the <strong>Copy Text</strong> button to copy the output to your clipboard, or click <strong>Download</strong> to save it as a text file.'
      ],
      type: 'brand'
    },
    about: {
      title: 'About Krutidev to Unicode Font Conversion',
      paragraphs: [
        'This converter allows you to instantly translate text written in the legacy <strong>Krutidev 010</strong> font into standard <strong>Unicode Devanagari</strong> (Mangal). Krutidev is a Remington typewriter layout-based visual font mapping that represents Hindi characters visually using English keystrokes. However, because it is not standardized, search engines, mobile phones, and modern web applications cannot index or display Krutidev text unless the font is installed on the user\'s system.',
        'Converting Krutidev to Unicode makes your Devanagari Hindi text globally compatible, responsive, SEO-ready, and readable across all modern operating systems and digital channels without requiring any additional font downloads.'
      ]
    },
    relatedTools: ['unicode-to-krutidev', 'chanakya-to-unicode', 'devlys-to-unicode'],
    examples: {
      default: 'd`frnso gC esa vkidk Lokxr gSA',
      chips: [
        {
          label: 'Sample Letter',
          text: 'lsok esa]\nfoHkkxk/;{k egksn;]\n\nfo"k;% dke dh izxfr ds laca/k esaA\n\negksn;]\nfouez fuosnu gS fd gekjs foHkkx dk dke rsth ls py jgk gSA'
        },
        {
          label: 'Government Form',
          text: 'vkosnu i=k%\nizkFkhZ dk uke% jke dqekj\nfirk dk uke% Jh ykypan\njk"Vªh;rk% Hkkjrh;\nirk% fodkl uxj] ubZ fnYyh'
        },
        {
          label: 'Hindi Paragraph',
          text: 'fganh gekjh jktHkk"kk gSA ;g fo"o dh lcls oSKkfud Hkk"kkvksa esa ls ,d gSA bldh fyfi nsoukxjh gS tks vRkar Li"V vkSj oSKkfud gSA'
        }
      ]
    }
  },
  {
    id: 'unicode-to-krutidev',
    name: 'Unicode to Krutidev Converter',
    shortName: 'Unicode to Krutidev',
    description: 'Convert Devanagari Unicode text to Krutidev instantly. Fast, private and browser-based.',
    longDescription: 'Convert Devanagari Unicode (Mangal/Arial Unicode MS) to Krutidev 010 font online in real time.',
    href: '/unicode-to-krutidev',
    slug: 'unicode-to-krutidev',
    direction: 'unicode-to-krutidev',
    swapTarget: '/krutidev-to-unicode',
    keywords: [
      'unicode to krutidev',
      'unicode to krutidev 010',
      'mangal to krutidev',
      'devanagari to krutidev',
      'mangal font to krutidev'
    ],
    placeholders: {
      input: 'यूनिकोड (मंगल) हिंदी टेक्स्ट यहाँ पेस्ट या टाइप करें। उदाहरण: "कृत्तिदेव हब और हिंदी"',
      output: 'कृत्तिदेव फॉन्ट में परिवर्तित एनकोडिंग यहाँ दिखाई देगी (जैसे: d`frnso)...'
    },
    faq: [
      {
        q: 'What is Unicode?',
        a: 'Unicode Devanagari is the modern digital text standard. Characters are encoded semantically, making them readable natively across all computers, smartphones, social media, and search engines without any custom font files.'
      },
      {
        q: 'What is Krutidev?',
        a: 'Krutidev is a legacy Remington typewriter layout font. It encodes Hindi characters visually onto standard English ASCII keyboard keycodes, meaning the Krutidev font must be installed locally to read the text.'
      },
      {
        q: 'Why does converted text look like English characters?',
        a: 'Because Krutidev is a visual font mapping, the converted text is written in English keystroke characters (like \'d\' for \'क\'). When you apply the Krutidev 010 font family to this text, those English characters will display as Devanagari glyphs.'
      },
      {
        q: 'How do I view Krutidev output correctly?',
        a: 'Copy the converted output and paste it into Microsoft Word or any publishing program. Select the pasted text, and change the font family name to \'Krutidev 010\' or \'Kriti Dev 010\'.'
      },
      {
        q: 'Is conversion performed locally?',
        a: 'Yes. The conversion is processed 100% locally in your browser. Your text is never uploaded to any server, ensuring complete confidentiality of your documents.'
      }
    ],
    howTo: {
      title: 'How to Convert & Use Krutidev Output',
      steps: [
        'Type or paste your standard <strong>Unicode Devanagari</strong> text in the left (or top on mobile) input area.',
        'Copy the converted visual encoding from the right (or bottom on mobile) output area.',
        'Paste the copied text into Microsoft Word or any other offline text editor.',
        'Select the pasted text and change its font family to <strong>Krutidev 010</strong> (or Kruti Dev 010).',
        'The text will immediately render correctly as Devanagari Hindi.'
      ],
      type: 'amber'
    },
    about: {
      title: 'About Unicode to Krutidev Font Conversion',
      paragraphs: [
        'This utility allows you to convert modern <strong>Devanagari Unicode</strong> text back into the legacy <strong>Krutidev 010</strong> layout encoding. While Unicode is the universal digital standard for Hindi text on the internet, many Indian government departments, printing houses, stenography tests, and legacy DTP applications still strictly mandate files submitted in Krutidev or typing in Krutidev layout.',
        'Our tool converts standard Devanagari characters into the corresponding Remington layout keystrokes. Once converted, you can simply paste the English characters into your document and apply the Krutidev 010 font family to render it correctly as Hindi text.'
      ]
    },
    relatedTools: ['krutidev-to-unicode', 'chanakya-to-unicode', 'devlys-to-unicode'],
    examples: {
      default: 'कृत्तिदेव हब में आपका स्वागत है।',
      chips: [
        {
          label: 'Sample Letter',
          text: 'सेवा में,\nविभागाध्यक्ष महोदय,\n\nविषय: काम की प्रगति के संबंध में।\n\nमहोदय,\nविनम्र निवेदन है कि हमारे विभाग का काम तेजी से चल रहा है।'
        },
        {
          label: 'Government Form',
          text: 'आवेदन पत्र:\nप्रार्थी का नाम: राम कुमार\nपिता का नाम: श्री लालचंद\nराष्ट्रीयता: भारतीय\nपता: विकास नगर, नई दिल्ली'
        },
        {
          label: 'Hindi Paragraph',
          text: 'हिंदी हमारी राजभाषा है। यह विश्व की सबसे वैज्ञानिक भाषाओं में से एक है। इसकी लिपि देवनागरी है जो अत्यंत स्पष्ट और वैज्ञानिक है।'
        }
      ]
    }
  },
  {
    id: 'chanakya-to-unicode',
    name: 'Chanakya to Unicode Converter',
    shortName: 'Chanakya to Unicode',
    description: 'Convert legacy Chanakya visual font characters to standard Unicode.',
    longDescription: 'Convert legacy Chanakya visual font characters to standard Unicode.',
    href: '#',
    slug: 'chanakya-to-unicode',
    direction: 'krutidev-to-unicode',
    badge: 'Soon',
    placeholders: { input: '', output: '' },
    faq: [],
    howTo: { title: '', steps: [] }
  },
  {
    id: 'devlys-to-unicode',
    name: 'DevLys to Unicode Converter',
    shortName: 'DevLys to Unicode',
    description: 'Translate DevLys typewriter layout text to standard Devanagari Unicode.',
    longDescription: 'Translate DevLys typewriter layout text to standard Devanagari Unicode.',
    href: '#',
    slug: 'devlys-to-unicode',
    direction: 'krutidev-to-unicode',
    badge: 'Soon',
    placeholders: { input: '', output: '' },
    faq: [],
    howTo: { title: '', steps: [] }
  }
];
