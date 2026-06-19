export const productionTestCases = [
  {
    name: "Test 1: The Greedy Chhoti-Ee (f) Jump",
    description: "Tests if the chhoti-ee shifts past multiple half-consonants correctly. Basic scripts fail here by only jumping one character.",
    input: "fL=;k¡] fL=;ksa dh fLFkfr fofp= gSA", // f + L(स्) + =(त्र)
    expected: "स्त्रियाँ, स्त्रियों की स्थिति विचित्र है।"
  },

  {
    name: "Test 2: The Malformed Reph (Z) Walkback",
    description: "Tests the Reph's ability to walk backward over matras and base consonants without getting stuck.",
    input: "eq[; ea=h us vk'khokZn vkSj eqgwÙkZ fn;kA", // vk'khokZn (sh+ee+v+aa+Z)
    expected: "मुख्य मंत्री ने आशीर्वाद और मुहूर्त्त दिया।"
  },

  {
    name: "Test 3: The Typist Nukta Typo Normalization",
    description: "Tests if a misplaced Nukta (+) typed AFTER a matra is safely relocated to the base consonant.",
    input: "vkt dh ftUnxh+ [k+jkc gSA", // ftUnxh+ (Nukta placed after 'h' instead of 'x')
    expected: "आज की ज़िन्दगी ख़राब है।"
  },

  {
    name: "Test 4: Invisible Web Junk (ZWNJ/BOM)",
    description: "Simulates text copy-pasted from a web page containing invisible formatting characters that usually break array mapping.",
    input: "x\u200Czk\u200Dfe.k O;o\uFEFFLFkk", // Contains zero-width joiners and non-joiners
    expected: "ग्रामिण व्यवस्था"
  },

  {
    name: "Test 5: Complex Conjunct Mapping Precedence",
    description: "Ensures that multi-character glyphs (like Dk -> क्क or Nî -> ट्ट) map before single characters (like d -> क).",
    input: "og iDdk x.kru~= dk dPNzku~ gSA", // iDdk (प + क्क + ा)
    expected: "वह पक्का गणतन्त्र का कृच्छ्रान् है।"
  },

  {
    name: "Test 6: Safe Fallback for Start-of-String Reph",
    description: "Tests the 'while' loop safety escape. If 'Z' is the first character, it shouldn't crash the thread by walking backwards into infinity.",
    input: "Zxq.k gh /keZ gSA", // Malformed text starting with Z
    expected: "र्गुण ही धर्म है।"
  },
  
  {
    name: "Test 7: Escaped Quotes and Brackets",
    description: "Checks if TS/JS escape sequences are handled before the string is processed.",
    input: "mlus dgk] \\\";g D;k gS\\?\\\"", 
    expected: 'उसने कहा, "यह क्या है?"'
  }
];

export const testCases = productionTestCases;