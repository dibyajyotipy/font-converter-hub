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
  direction: 'krutidev-to-unicode' | 'unicode-to-krutidev' | 'krutidev-to-mangal' | 'mangal-to-krutidev' | 'krutidev-to-chanakya' | 'chanakya-to-krutidev' | 'preeti-to-unicode' | 'unicode-to-preeti';
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
        q: 'How do I convert KrutiDev to Unicode?',
        a: 'Paste your KrutiDev text into the input box above and click Convert — the Unicode output appears instantly and is ready to paste anywhere.'
      },
      {
        q: 'Why does my KrutiDev text show as random symbols or boxes like █?',
        a: 'That happens when KrutiDev-encoded text is viewed without the KrutiDev font installed — the device falls back to displaying raw character codes instead of Hindi glyphs. It\'s not corrupted; convert it here and it will display correctly in standard Unicode.'
      },
      {
        q: 'Is this converter free?',
        a: 'Yes, completely free with no login, no word limit, and no hidden charges.'
      },
      {
        q: 'Does this work for Marathi text typed in KrutiDev?',
        a: 'Yes. Marathi uses the Devanagari script, and KrutiDev was widely used for Marathi typing in Maharashtra government offices. This converter handles both Hindi and Marathi correctly, producing standard Devanagari Unicode.'
      },
      {
        q: 'Is KrutiDev still used today?',
        a: 'Yes, in pockets — particularly older government offices, courts, and some typing exam syllabi — though most new systems have moved to Unicode. Converting old KrutiDev files to Unicode is how most people keep that content usable going forward.'
      },
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
        q: 'What\'s the difference between KrutiDev and Mangal font?',
        a: 'KrutiDev is a non-Unicode font that maps Hindi visuals onto English keys; Mangal is a Unicode font that follows the international Hindi text standard. Converting KrutiDev to Unicode effectively makes your text Mangal-compatible.'
      },
      {
        q: 'Are KrutiDev and Devanagari the same thing?',
        a: 'No — Devanagari is the script (the writing system Hindi and Marathi use). KrutiDev and Mangal are both fonts that display Devanagari script, just using different underlying encodings.'
      },
      {
        q: 'Does this tool upload my text to a server?',
        a: 'No. All conversion happens locally in your browser using JavaScript — your text never leaves your device, ensuring your documents remain completely private and secure.'
      },
      {
        q: 'Can I convert Unicode back to KrutiDev?',
        a: 'Yes — use our <a href="/unicode-to-krutidev">Unicode to KrutiDev Converter</a> for the reverse direction.'
      },
      {
        q: 'Will the converted Unicode text work in MS Word, Excel, and WhatsApp?',
        a: 'Yes. Once converted, the text is standard Devanagari Unicode and works anywhere — Word, Excel, websites, WhatsApp, Google Docs, social media — no special font required.'
      },
      {
        q: 'Can I convert a Word, Excel, or PDF file directly?',
        a: 'This tool converts pasted or typed text, not uploaded files. To convert a Word, Excel, or PDF document, open the file, copy the Krutidev text from it, paste it into the converter, and then paste the Unicode result back into your document.'
      },
      {
        q: 'How does the converter handle mixed Hindi and English text?',
        a: 'Because legacy fonts like KrutiDev map Hindi characters directly onto English keys, any English words in your original KrutiDev document are represented under the hood by the same English keystrokes. The converter cannot distinguish between KrutiDev text and actual English text, meaning English words will also be converted and display as garbled Hindi. For mixed-language documents, you should copy and convert only the Hindi portions, or manually restore the English text after conversion.'
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
    relatedTools: ['unicode-to-krutidev', 'krutidev-to-mangal', 'krutidev-to-chanakya'],
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
        q: 'How do I convert Unicode to KrutiDev?',
        a: 'Paste your Unicode (Mangal) text into the input box above, click Convert, then copy the output and paste it into Word — then change the font to KrutiDev 010.'
      },
      {
        q: 'Why does the converted KrutiDev text look like random characters?',
        a: 'This is expected. KrutiDev is a legacy font that maps English ASCII characters to Hindi glyphs. The output only displays as correct Hindi once you apply the KrutiDev 010 font in your word processor.'
      },
      {
        q: 'Which KrutiDev version does this convert to?',
        a: 'This converter outputs KrutiDev 010, the standard and most widely used version. If you specifically need KrutiDev 055, 016, or another variant, check compatibility first — the conjunct mappings differ slightly between versions.'
      },
      {
        q: 'Does this work for text typed in Arial Unicode MS, not just Mangal?',
        a: 'Yes — both are standard Unicode fonts, so the conversion result is identical regardless of which Unicode font you originally typed in.'
      },
      {
        q: 'Does this work for Marathi text?',
        a: 'Yes — this converter handles Marathi Unicode text the same way it handles Hindi.'
      },
      {
        q: 'Is this converter free?',
        a: 'Yes, completely free with no login, no word limit, and no hidden charges.'
      },
      {
        q: 'Does this tool upload my text to a server?',
        a: 'No. All conversion happens locally in your browser. Your text never leaves your device.'
      },
      {
        q: 'Can I convert KrutiDev back to Unicode?',
        a: 'Yes — use our <a href="/krutidev-to-unicode">KrutiDev to Unicode Converter</a> for the reverse direction.'
      },
      {
        q: 'Will the converted text work in MS Word, Excel, and PowerPoint?',
        a: 'Yes. Paste the output, select it, and apply KrutiDev 010 font. It works in all Microsoft Office applications and LibreOffice.'
      },
      {
        q: 'Why does an exam or office form just say "KrutiDev" without a version number?',
        a: "In almost all cases this means KrutiDev 010, since it's the de facto standard. This converter's default output should work — but if your text shows incorrectly after applying the font, confirm with the requesting office which exact version they use."
      },
      {
        q: 'Can I convert a Word, Excel, or PDF file directly?',
        a: 'This tool converts pasted or typed text, not uploaded files. To convert a Word, Excel, or PDF document, copy the Unicode text from your Word, Excel, or PDF file, paste it here, convert it, then paste the Krutidev output back into your document.'
      },
      {
        q: 'How does the converter handle mixed Hindi and English text?',
        a: 'This converter translates Devanagari characters into KrutiDev visual key mappings. If your source text contains English words, they are left unchanged. However, when you paste the output into Word and apply the KrutiDev font, the English words will also have the KrutiDev font applied and will look like garbled symbols. You will need to select those English words in Word and change their font family back to a standard English font (like Arial or Calibri).'
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
    relatedTools: ['krutidev-to-unicode', 'mangal-to-krutidev', 'krutidev-to-chanakya'],
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
  },
  {
    id: 'krutidev-to-mangal',
    name: 'KrutiDev to Mangal Converter',
    shortName: 'KrutiDev to Mangal',
    description: 'Convert KrutiDev text to Mangal Unicode font online, free and instantly. Paste your KrutiDev text and get properly formatted Mangal/Unicode Hindi text in seconds.',
    longDescription: 'Convert legacy KrutiDev font characters to Mangal (Devanagari Unicode) in real time.',
    href: '/krutidev-to-mangal-converter',
    slug: 'krutidev-to-mangal-converter',
    direction: 'krutidev-to-mangal',
    swapTarget: '/mangal-to-krutidev-converter',
    keywords: [
      'krutidev to mangal',
      'krutidev 010 to mangal',
      'hindi font converter',
      'krutidev to unicode',
      'mangal font converter'
    ],
    placeholders: {
      input: 'कृत्तिदेव टेक्स्ट यहाँ पेस्ट या टाइप करें। उदाहरण: "d`frnso gC vksj fganh"',
      output: 'यूनिकोड (मंगल फॉन्ट) में परिवर्तित टेक्स्ट यहाँ दिखाई देगा...'
    },
    faq: [
      {
        q: 'How do I convert KrutiDev to Mangal?',
        a: 'Simply paste or type your legacy KrutiDev 010 text into the input box above. The tool automatically maps and converts the visual Remington typewriter characters to standard Mangal (Unicode) Devanagari text in real time. Once finished, you can copy or download the results.'
      },
      {
        q: 'Is the KrutiDev to Mangal converter free?',
        a: 'Yes, this converter is completely free to use. There are no limits on usage, no registration is required, and it runs 100% locally in your web browser.'
      },
      {
        q: 'Will the converted Mangal text work on mobile and Mac?',
        a: 'Yes. Mangal is a standard Devanagari Unicode font. Unlike legacy KrutiDev visual fonts, standard Unicode text works natively and is perfectly readable on all modern devices, including Android, iOS, Windows, and Mac, without installing any custom fonts.'
      },
      {
        q: 'Can I convert Mangal back to KrutiDev?',
        a: 'Yes, you can convert Mangal/Unicode text back to KrutiDev using our <a href="/mangal-to-krutidev-converter">Mangal to KrutiDev Converter</a>.'
      },
      {
        q: 'Does this tool upload my text to a server?',
        a: 'No. The entire conversion logic runs locally inside your browser using JavaScript. No text is ever uploaded, transmitted, or saved on a remote server, ensuring complete confidentiality for your documents.'
      },
      {
        q: "What's the difference between KrutiDev to Unicode and KrutiDev to Mangal?",
        a: 'There is no difference in the underlying text encoding. Mangal is simply Microsoft\'s default Unicode font for the Devanagari script. Therefore, converting KrutiDev to Unicode produces text that is fully compatible with and renders in the Mangal font.'
      },
      {
        q: 'How does the converter handle mixed Hindi and English text?',
        a: 'Since KrutiDev maps Hindi characters onto standard English keys, any English words in your document are represented under the hood by the same English keystrokes. The converter cannot distinguish between KrutiDev visual characters and actual English words, so the English text will also be converted and appear as garbled Hindi. For mixed-language files, copy and convert only the Hindi portions, or manually correct the English words after conversion.'
      }
    ],
    howTo: {
      title: 'How to Convert KrutiDev 010 to Mangal Font Online',
      steps: [
        'Type or paste your legacy <strong>KrutiDev 010</strong> text in the left (or top on mobile) input text area.',
        'The converter will automatically process your input client-side in real time.',
        'Your converted standard <strong>Mangal (Unicode)</strong> text will appear in the right (or bottom on mobile) output area.',
        'Click the <strong>Copy Text</strong> button to copy the output to your clipboard, or click <strong>Download</strong> to save it as a text file.'
      ],
      type: 'brand'
    },
    about: {
      title: 'About This KrutiDev to Mangal Converter',
      paragraphs: [
        "KrutiDev is a non-Unicode visual font mapping that converts English keystrokes into Hindi characters based on the Remington typewriter layout. While widely used in government and offline text editors, KrutiDev text displays as garbled English text on any device that does not have the font installed. Mangal, on the other hand, is the official standard Devanagari Unicode font shipped by default on Windows devices.",
        "Our free online KrutiDev to Mangal converter allows you to convert legacy typewriter-encoded Hindi characters into standard Mangal Unicode. This ensures your documents are readable on all modern digital platforms, emails, social media, and are fully searchable by Google and other search engines.",
        "Since the tool converts the text client-side directly in your browser, your data never leaves your computer. This offline-ready approach provides the highest level of security and privacy for sensitive court documents, government records, or personal letters.",
        "To start, simply paste your KrutiDev text in the input box, watch the converted Mangal text generate instantly, and copy or download the result for use in Microsoft Word, web browsers, or mobile apps."
      ]
    },
    relatedTools: ['mangal-to-krutidev', 'krutidev-to-unicode', 'unicode-to-krutidev', 'krutidev-to-chanakya'],
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
    id: 'mangal-to-krutidev',
    name: 'Mangal to KrutiDev Converter',
    shortName: 'Mangal to KrutiDev',
    description: 'Convert Mangal Unicode Hindi text to KrutiDev 010 font online, free and instantly. Paste your Mangal text and get KrutiDev-formatted output ready for government forms, print, and typing exams.',
    longDescription: 'Convert Mangal (Devanagari Unicode) text to legacy KrutiDev 010 font layout characters in real time.',
    href: '/mangal-to-krutidev-converter',
    slug: 'mangal-to-krutidev-converter',
    direction: 'mangal-to-krutidev',
    swapTarget: '/krutidev-to-mangal-converter',
    keywords: [
      'mangal to krutidev',
      'mangal to krutidev 010',
      'unicode to krutidev',
      'mangal font to krutidev 010',
      'devanagari to krutidev'
    ],
    placeholders: {
      input: 'यूनिकोड (मंगल) हिंदी टेक्स्ट यहाँ पेस्ट या टाइप करें। उदाहरण: "कृत्तिदेव हब और हिंदी"',
      output: 'कृत्तिदेव फॉन्ट में परिवर्तित एनकोडिंग यहाँ दिखाई देगी (जैसे: d`frnso)...'
    },
    faq: [
      {
        q: 'How do I convert Mangal to KrutiDev?',
        a: 'Simply paste or type your standard Mangal (Unicode) Devanagari Hindi text into the input box above. The tool instantly translates the text into legacy KrutiDev 010 visual key mappings in real time. You can then copy or download the converted text.'
      },
      {
        q: 'Why does the converted KrutiDev text look like random characters?',
        a: 'Since KrutiDev is a visual-only font mapping, it maps Devanagari shapes to English keyboard characters (like "d" for "क"). The output will look like random English characters until you paste them into a word processor (like MS Word) and apply the KrutiDev 010 font family to that text.'
      },
      {
        q: 'Is this converter free?',
        a: 'Yes, this converter is completely free to use with no limits on text length, no signups required, and complete client-side processing.'
      },
      {
        q: 'Which KrutiDev version does this convert to?',
        a: 'This tool converts standard Unicode text to the KrutiDev 010 layout, which is the most widely supported Remington typing layout used in government examinations and legal work in India.'
      },
      {
        q: 'Does this tool work for Mangal to KrutiDev 10?',
        a: 'Yes. "KrutiDev 10" and "KrutiDev 010" refer to the exact same font mapping layout. This tool is fully compatible with both names.'
      },
      {
        q: 'Does this tool upload my text to a server?',
        a: 'No. The conversion runs entirely locally inside your browser using JavaScript. No text is ever uploaded, stored, or transmitted to any server, keeping your data confidential.'
      },
      {
        q: 'Can I convert KrutiDev back to Mangal?',
        a: 'Yes. You can use our <a href="/krutidev-to-mangal-converter">KrutiDev to Mangal Converter</a> to convert any legacy KrutiDev text back to Mangal Unicode Devanagari text.'
      },
      {
        q: 'Will the converted text work in MS Word, Excel, and PowerPoint?',
        a: 'Yes. Copy the converted text, paste it into MS Word, Excel, or PowerPoint, select it, and change the font family to "KrutiDev 010". The text will instantly display correctly as Devanagari Hindi.'
      },
      {
        q: 'How does the converter handle mixed Hindi and English text?',
        a: 'This converter translates Devanagari characters into KrutiDev visual key mappings. Any English words in your text are left unchanged. However, when you paste the output into MS Word or another editor and apply the KrutiDev font family, the English words will also render using the KrutiDev font and look like garbled symbols. To fix this, select the English words individually and change their font back to a standard English font (like Arial or Calibri).'
      }
    ],
    howTo: {
      title: 'How to Convert Mangal (Unicode) to KrutiDev 010',
      steps: [
        'Type or paste your standard <strong>Mangal (Unicode)</strong> Hindi text in the left (or top on mobile) input area.',
        'Copy the converted visual encoding from the right (or bottom on mobile) output area.',
        'Paste the copied text into Microsoft Word or any other offline editor.',
        'Select the pasted text and change its font family to <strong>KrutiDev 010</strong> (or Kruti Dev 010).',
        'The text will immediately render correctly as Devanagari Hindi.'
      ],
      type: 'amber'
    },
    about: {
      title: 'About This Mangal to KrutiDev Converter',
      paragraphs: [
        "While Devanagari Unicode (Mangal font) is the modern standard for websites, emails, and smartphones, legacy systems in Indian state government departments, public sector undertakings, and courts still mandate document submissions in the Remington typewriter-based KrutiDev font family. This tool bridges the gap by letting you convert your digital Unicode text back to KrutiDev-mapped characters.",
        "When you convert Unicode to KrutiDev, the output characters will initially look like a garbled string of English characters (such as \"d`frnso\"). This is because KrutiDev operates as a visual keyboard layout font. Once you copy the output, paste it into an editor like Microsoft Word, and select the \"KrutiDev 010\" font family, the glyphs will render as clean, standard Devanagari Hindi text.",
        "As with all tools on our site, the translation is performed directly in your browser using JavaScript. None of your text is sent to our servers, assuring complete privacy and security for government work or personal files."
      ]
    },
    relatedTools: ['krutidev-to-mangal', 'unicode-to-krutidev', 'krutidev-to-unicode', 'chanakya-to-krutidev'],
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
    id: 'krutidev-to-chanakya',
    name: 'Krutidev to Chanakya Converter',
    shortName: 'Krutidev to Chanakya',
    description: 'Convert Krutidev 010 Hindi text to Chanakya font online, free and instantly.',
    longDescription: 'Convert legacy Krutidev font characters to Chanakya font encoding in real time.',
    href: '/krutidev-to-chanakya-converter',
    slug: 'krutidev-to-chanakya-converter',
    direction: 'krutidev-to-chanakya',
    swapTarget: '/chanakya-to-krutidev-converter',
    keywords: [
      'krutidev to chanakya',
      'krutidev 010 to chanakya',
      'hindi font converter',
      'chanakya font converter'
    ],
    placeholders: {
      input: 'कृत्तिदेव टेक्स्ट यहाँ पेस्ट या टाइप करें। उदाहरण: "d`frnso gC vksj fganh"',
      output: 'चाणक्य फॉन्ट में परिवर्तित टेक्स्ट यहाँ दिखाई देगा...'
    },
    faq: [
      {
        q: 'How do I convert KrutiDev to Chanakya?',
        a: 'Paste your KrutiDev text into the input box above and click Convert. Copy the output and apply the Chanakya font to it in your document.'
      },
      {
        q: 'Why does the converted text look like random characters?',
        a: 'Both KrutiDev and Chanakya are legacy fonts that map Devanagari shapes to English keys. The output will only look like correct Hindi once you apply the Chanakya font in your word processor or DTP software.'
      },
      {
        q: 'Is this converter free?',
        a: 'Yes, completely free with no login, no word limit, and no hidden charges.'
      },
      {
        q: 'Does this tool upload my text to a server?',
        a: 'No. All conversion happens locally in your browser using JavaScript — your text never leaves your device, ensuring your documents remain completely private and secure.'
      },
      {
        q: 'Can I convert Chanakya back to KrutiDev?',
        a: 'Yes — use our <a href="/chanakya-to-krutidev-converter">Chanakya to KrutiDev Converter</a> for the reverse direction.'
      },
      {
        q: 'How does the converter handle mixed Hindi and English text?',
        a: 'Since both KrutiDev and Chanakya map visual Devanagari characters to English keycodes, actual English words in the text are stored as visual codes. The converter translates all English characters assuming they represent Devanagari glyphs, so English words will become garbled. It is best to convert only the Hindi sections and copy the English sections directly.'
      },
      {
        q: 'Will the converted Chanakya text work in design software like CorelDraw and PageMaker?',
        a: 'Yes. Once you copy the converted text and paste it into CorelDraw, PageMaker, or Photoshop, select the text and set its font to Chanakya. The characters will render as correct Devanagari Hindi.'
      }
    ],
    howTo: {
      title: 'How to Convert KrutiDev to Chanakya',
      steps: [
        'Type or paste your legacy <strong>KrutiDev</strong> text in the left (or top on mobile) input text area.',
        'The converter will automatically process your input client-side in real time.',
        'Your converted <strong>Chanakya</strong> text will appear in the right (or bottom on mobile) output area.',
        'Copy the text, paste it into your document, and change the font to Chanakya.'
      ],
      type: 'brand'
    },
    relatedTools: ['chanakya-to-krutidev', 'krutidev-to-unicode', 'krutidev-to-mangal'],
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
    id: 'chanakya-to-krutidev',
    name: 'Chanakya to Krutidev Converter',
    shortName: 'Chanakya to Krutidev',
    description: 'Convert Chanakya Hindi text to Krutidev 010 font online, free and instantly.',
    longDescription: 'Convert legacy Chanakya font characters to Krutidev 010 font encoding in real time.',
    href: '/chanakya-to-krutidev-converter',
    slug: 'chanakya-to-krutidev-converter',
    direction: 'chanakya-to-krutidev',
    swapTarget: '/krutidev-to-chanakya-converter',
    keywords: [
      'chanakya to krutidev',
      'chanakya to krutidev 010',
      'hindi font converter',
      'krutidev font converter'
    ],
    placeholders: {
      input: 'चाणक्य टेक्स्ट यहाँ पेस्ट या टाइप करें।',
      output: 'कृत्तिदेव फॉन्ट में परिवर्तित एनकोडिंग यहाँ दिखाई देगी...'
    },
    faq: [
      {
        q: 'How do I convert Chanakya to KrutiDev?',
        a: 'Paste your Chanakya text into the input box above and click Convert. Copy the output and apply the KrutiDev 010 font to it in your document.'
      },
      {
        q: 'Why does the converted text look like random characters?',
        a: 'KrutiDev is a legacy font that maps Devanagari shapes to English keys. The output will only look like correct Hindi once you apply the KrutiDev 010 font in your word processor.'
      },
      {
        q: 'Is this converter free?',
        a: 'Yes, completely free with no login, no word limit, and no hidden charges.'
      },
      {
        q: 'Does this tool upload my text to a server?',
        a: 'No. All conversion happens locally in your browser using JavaScript — your text never leaves your device.'
      },
      {
        q: 'Can I convert KrutiDev back to Chanakya?',
        a: 'Yes — use our <a href="/krutidev-to-chanakya-converter">KrutiDev to Chanakya Converter</a> for the reverse direction.'
      },
      {
        q: 'How does the converter handle mixed Hindi and English text?',
        a: 'Since Chanakya and KrutiDev are visual-only fonts mapping Devanagari to English keys, the converter translates all English characters assuming they represent Devanagari. Any actual English words will become garbled in the final output. We recommend converting only the Devanagari portions and copying English words directly.'
      },
      {
        q: 'Will the converted KrutiDev text work in MS Word, Excel, and PageMaker?',
        a: 'Yes. Once you copy the converted text and paste it into Word or other editors, select the text and apply the KrutiDev 010 font. It will instantly render correctly as Devanagari Hindi.'
      }
    ],
    howTo: {
      title: 'How to Convert Chanakya to KrutiDev',
      steps: [
        'Type or paste your legacy <strong>Chanakya</strong> text in the left (or top on mobile) input text area.',
        'The converter will automatically process your input client-side in real time.',
        'Your converted <strong>KrutiDev</strong> text will appear in the right (or bottom on mobile) output area.',
        'Copy the text, paste it into your document, and change the font to KrutiDev 010.'
      ],
      type: 'amber'
    },
    relatedTools: ['krutidev-to-chanakya', 'krutidev-to-unicode', 'unicode-to-krutidev', 'mangal-to-krutidev'],
    examples: {
      default: 'âÔßæ ×Ô¢,\nçßÖæ»æŠØÿæ ×ãôÎØ,\n\nçßáØ: ·¤æ× ·¤è ŒÚU»çÌ ·¤Ô â¢Õ¢Ï ×Ô¢Ð\n\n×ãôÎØ,\nçßÙ×÷ÚU çÙßÔÎÙ ãñ ç·¤ ã×æÚUÔ çßÖæ» ·¤æ ·¤æ× ÌÔÁè âÔ ¿Ü ÚUãæ ãñÐ',
      chips: [
        {
          label: 'Sample Letter',
          text: 'âÔßæ ×Ô¢,\nçßÖæ»æŠØÿæ ×ãôÎØ,\n\nçßáØ: ·¤æ× ·¤è ŒÚU»çÌ ·¤Ô â¢Õ¢Ï ×Ô¢Ð\n\n×ãôÎØ,\nçßÙ×÷ÚU çÙßÔÎÙ ãñ ç·¤ ã×æÚUÔ çßÖæ» ·¤æ ·¤æ× ÌÔÁè âÔ ¿Ü ÚUãæ ãñÐ'
        },
        {
          label: 'Government Form',
          text: '¥æßÔÎÙ ÂÌý:\nŒÚUæÍèü ·¤æ Ùæ×: ÚUæ× ·¤é×æÚU\nçÂÌæ ·¤æ Ùæ×: Ÿæè ÜæÜ¿¢Î\nÚUæcÅU÷ÚUèØÌæ: ÖæÚUÌèØ\nÂÌæ: çß·¤æâ Ù»ÚU, Ù§ü çÎËÜè'
        },
        {
          label: 'Hindi Paragraph',
          text: 'çã¢Îè ã×æÚUè ÚUæÁÖæáæ ãñÐ Øã çßàß ·¤è âÕâÔ ßñ™ææçÙ·¤ Öæáæ¥ô¢ ×Ô¢ âÔ °·¤ ãñÐ §â·¤è çÜçÂ ÎÔßÙæ»ÚUè ãñ Áô ¥ˆØ¢Ì SÂcÅU ¥õÚU ßñ™ææçÙ·¤ ãñÐ'
        }
      ]
    }
  },
  {
    id: 'preeti-to-unicode',
    name: 'Preeti to Unicode Converter',
    shortName: 'Preeti to Unicode',
    description: 'Convert Preeti font Nepali text to Unicode (Devanagari) online — free, instant, and browser-based.',
    longDescription: 'Convert legacy Preeti font characters to standard Devanagari Unicode in real time. Works for Nepali documents, old DTP files, and newspaper content.',
    href: '/preeti-to-unicode',
    slug: 'preeti-to-unicode',
    direction: 'preeti-to-unicode',
    swapTarget: '/unicode-to-preeti',
    keywords: [
      'preeti to unicode converter',
      'preeti to unicode nepali',
      'preeti to unicode download',
      'preeti to unicode converter online',
      'preeti to unicode converter in word',
      'how to convert preeti to unicode',
      'how to change preeti to unicode'
    ],
    placeholders: {
      input: 'यहाँ Preeti फन्टमा लेखिएको पाठ टाइप गर्नुहोस्...',
      output: 'युनिकोड (नेपाली) मा रूपान्तरित पाठ यहाँ देखिनेछ...'
    },
    faq: [
      {
        q: 'What is Preeti font and why do I need to convert it?',
        a: 'Preeti is a legacy ASCII-based Nepali font widely used in government offices, newspapers, and DTP workflows before Unicode became the standard. Text typed in Preeti looks like random English characters (e.g. g]kfn) without the Preeti font installed — it is not real Unicode. Converting it to Unicode Devanagari makes it readable on any device, browser, or app without needing any font installed.'
      },
      {
        q: 'How do I convert Preeti to Unicode?',
        a: 'Paste your Preeti text into the input box above and the Unicode Nepali output appears instantly. No software download, no account needed. The conversion happens entirely in your browser.'
      },
      {
        q: 'How do I use Preeti to Unicode converter in Word?',
        a: 'After converting, click the Copy button to copy the Unicode text. Open Microsoft Word, click where you want the text, and paste (Ctrl+V). The text will appear as standard Devanagari Unicode — you can use any Unicode Nepali font like Kalimati or Arial Unicode MS. You do not need the Preeti font installed.'
      },
      {
        q: 'Is this Preeti to Unicode converter free?',
        a: 'Yes, completely free. No sign-up, no download, no usage limit. The conversion runs locally in your browser — your text is never sent to any server.'
      },
      {
        q: 'What is the difference between Preeti and Unicode Nepali?',
        a: 'Preeti is an encoding hack — it uses English keyboard characters to visually mimic Nepali text using a custom font. Unicode is the actual international standard for Nepali (Devanagari) text. Unicode text works everywhere — phones, browsers, apps — without any special font. Preeti text only works on systems where the Preeti font is installed.'
      },
      {
        q: 'Can this tool convert old Preeti documents with special characters?',
        a: 'Yes. This converter handles the full Preeti character set including extended characters used in older DTP documents (conjuncts like ध्र, ङ्ग, ड्ड and special symbols). Most basic converters miss these — ours handles them correctly.'
      }
    ],
    howTo: {
      title: 'How to Convert Preeti to Unicode',
      steps: [
        'Paste your <strong>Preeti font text</strong> into the input box on the left',
        'The converted <strong>Unicode Nepali</strong> text appears instantly on the right',
        'Click <strong>Copy</strong> to copy the Unicode text, then paste it anywhere — Word, Google Docs, social media, or your website'
      ],
      type: 'brand'
    },
    relatedTools: ['unicode-to-preeti', 'krutidev-to-unicode', 'krutidev-to-mangal'],
    examples: {
      default: `g]kfn`,
      chips: [
        {
          label: 'नेपाल',
          text: `g]kfn`
        },
        {
          label: 'Sample sentence',
          text: `d]/f] b]z g]kfn x'g\\`
        },
        {
          label: 'Conjunct test',
          text: `lj4fgu/`
        }
      ]
    }
  },
  {
    id: 'unicode-to-preeti',
    name: 'Unicode to Preeti Font Converter',
    shortName: 'Unicode to Preeti',
    description: 'Convert Unicode Nepali text to Preeti font encoding online. Free, instant, browser-based. Perfect for legacy Nepali DTP, newspapers, and government document workflows.',
    longDescription: 'Convert Nepali Unicode to Preeti font encoding instantly. Designed for DTP operators, newspaper publishers, and government offices that still require Preeti-formatted text for PageMaker, InDesign, CorelDraw, and Word templates.',
    href: '/unicode-to-preeti',
    slug: 'unicode-to-preeti',
    direction: 'unicode-to-preeti',
    swapTarget: '/preeti-to-unicode',
    keywords: [
      'unicode to preeti font',
      'nepali unicode to preeti',
      'unicode to preeti font converter',
      'unicode to preeti nepali',
      'unicode to preeti converter online',
      'unicode to preeti download',
      'how to convert unicode to preeti',
      'how to change unicode to preeti',
      'how to convert unicode to preeti font'
    ],
    placeholders: {
      input: 'यहाँ युनिकोड नेपाली पाठ टाइप वा पेस्ट गर्नुहोस्...',
      output: 'Preeti फन्टको एनकोडिङ यहाँ देखिनेछ (उदाहरण: g]kfn)...'
    },
    faq: [
      {
        q: 'Why would I need to convert Unicode to Preeti?',
        a: 'If you are working with legacy publishing software, older government document templates, or print layouts that use Preeti font, you need your text in Preeti encoding. Modern devices produce Unicode — this tool converts it to the format those older systems expect.'
      },
      {
        q: 'How do I convert Unicode to Preeti font?',
        a: 'Paste your standard Nepali Unicode text into the input box above. The Preeti-encoded output appears instantly on the right. Click Copy, paste into your document, and change the font to Preeti — the text will render correctly.'
      },
      {
        q: 'How do I change Unicode to Preeti in Word?',
        a: 'Convert your text using the tool above, then copy the output. In Microsoft Word, paste the text and select it. In the font dropdown, choose "Preeti" — the text will display as correct Nepali. If Preeti is not in your font list, download it free from our Preeti Font Download page.'
      },
      {
        q: 'Will the converted Preeti text work in PageMaker or InDesign?',
        a: 'Yes. The output is standard Preeti ASCII encoding compatible with any application that supports the Preeti font — including older versions of Adobe PageMaker, InDesign, CorelDraw, and Microsoft Word. Simply paste and set the font to Preeti.'
      },
      {
        q: 'Is there any text that cannot be converted to Preeti?',
        a: 'Preeti has a fixed character set designed for Nepali Devanagari text. Characters outside this set — such as Hindi-specific characters, Sanskrit conjuncts not in Nepali, or special symbols — may not have a Preeti equivalent and will be passed through unchanged.'
      },
      {
        q: 'Is this Unicode to Preeti converter free?',
        a: 'Yes, completely free with no sign-up, no download, and no usage limit. The conversion runs entirely in your browser — your text never leaves your device.'
      }
    ],
    howTo: {
      title: 'How to Convert Nepali Unicode to Preeti Font',
      steps: [
        'Type or paste your <strong>Unicode Nepali</strong> text into the left box.',
        'The <strong>Preeti font</strong> encoded text appears instantly on the right.',
        'Copy the output, paste it into your document, and set the font to <strong>Preeti</strong> — your text will display correctly.'
      ],
      type: 'amber'
    },
    relatedTools: ['preeti-to-unicode', 'krutidev-to-unicode', 'unicode-to-krutidev'],
    examples: {
      default: 'नेपाल',
      chips: [
        {
          label: 'नेपाल',
          text: 'नेपाल'
        },
        {
          label: 'Sample sentence',
          text: 'मेरो देश नेपाल हो'
        },
        {
          label: 'Government text',
          text: 'नेपाल सरकार'
        }
      ]
    }
  }
];
