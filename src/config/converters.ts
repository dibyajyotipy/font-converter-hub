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
      },
      {
        q: "Does this converter work for Marathi text?",
        a: "Yes. Marathi uses the same Devanagari script as Hindi, so Krutidev text typed for Marathi content converts to Unicode the same way. The output will be standard Devanagari Unicode, readable and editable regardless of whether the original content was in Hindi or Marathi."
      },
      {
        q: "Can I convert a Word, Excel, or PDF file directly?",
        a: "This tool converts pasted or typed text, not uploaded files. To convert a Word, Excel, or PDF document, open the file, copy the Krutidev text from it, paste it into the converter, and then paste the Unicode result back into your document. We're considering direct file upload support for a future update."
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
      title: "About This Krutidev to Unicode Converter",
      paragraphs: [
        "Krutidev is a non-Unicode, Remington-layout Hindi font that was widely adopted across Indian government offices, courts, typing institutes, and data entry centers since the 1990s. While reliable for typing inside Microsoft Word with the right font installed, Krutidev text becomes unreadable garbled English characters the moment it's viewed on a phone, shared on WhatsApp, pasted into a website, or opened on a computer without that specific font file. This free online Krutidev font converter solves that problem instantly.",
        "Our tool converts Krutidev 010 text into standard Unicode Devanagari — the universal Hindi text encoding used by every modern operating system, browser, and search engine. Once converted, your Hindi text becomes searchable, copy-paste friendly, and viewable everywhere without requiring anyone to install a special font.",
        "This Hindi font converter is built specifically for people who work with legacy government documents, old typing-test files, court records, and archived data entry work — anyone who needs to bring older Krutidev content into the modern Unicode standard used today.",
        "Unlike many converter tools that upload your text to a server, this entire conversion happens locally inside your browser using JavaScript. Your document content is never transmitted, stored, or logged anywhere — making it a safe choice even for sensitive official or personal documents.",
        "There's no signup, no installation, and no cost. Paste your Krutidev text, get instant Unicode output, and copy or download the result — all in a few seconds, completely free."
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
      },
      {
        q: "Does this work for Marathi text as well as Hindi?",
        a: "Yes. Since Marathi is also written in Devanagari script, Unicode Marathi text converts to Krutidev 010 the same way Hindi text does. Just paste your Unicode text as usual."
      },
      {
        q: "Can I upload a Word or PDF file instead of pasting text?",
        a: "Currently this tool works with pasted or typed text only. Copy the Unicode text from your Word, Excel, or PDF file, paste it here, convert it, then paste the Krutidev output back into your document. Direct file upload may be added in a future update."
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
      title: "About This Unicode to Krutidev Converter",
      paragraphs: [
        "Many official Hindi documents, old government records, and legal templates were originally typed in Krutidev — a Remington-layout, non-Unicode font still required by several courts, typing examinations, and government departments across India. If your content currently exists in modern Unicode Devanagari (the standard Hindi text used in Word, Google Docs, and websites) but needs to be submitted, printed, or formatted in the older Krutidev font, this free online converter handles that instantly.",
        "This tool converts standard Unicode Hindi text into Krutidev 010 keystroke-mapped characters. Once converted, the output text will display as readable Devanagari only when the Krutidev 010 font is applied — a small but important detail anyone preparing official Krutidev documents needs to know.",
        "This Hindi font converter is especially useful for typing instructors preparing practice material, government employees formatting documents in legacy systems, and students preparing for typing examinations that still grade work in Krutidev format. It bridges the gap between today's universal Unicode standard and the older font systems that many institutions haven't fully phased out.",
        "As with all tools on Font Converter Hub, this conversion runs entirely in your browser. No text is uploaded, transmitted, or saved on any server — your documents remain completely private throughout the process.",
        "There's no account required, no software to download, and no cost to use it. Simply paste your Unicode Hindi text, get instant Krutidev-mapped output, then copy the result or download it as a text file — ready to apply the Krutidev 010 font in Word or your document editor of choice."
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
