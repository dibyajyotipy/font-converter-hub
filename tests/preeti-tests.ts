export const preetiToUnicodeTestCases = [
  {
    name: "Test P1: Kathmandu (काठमाण्डू)",
    description: "Tests basic consonants, aa-matra, and u-matra.",
    input: 'sf7df08"',
    expected: "काठमाण्डू"
  },
  {
    name: "Test P2: Nepal (नेपाल)",
    description: "Tests e-matra and basic consonants.",
    input: "g]kfn",
    expected: "नेपाल"
  },
  {
    name: "Test P3: Basic alpha key mapping",
    description: "Tests a-s-d-f-g-h-j-k keys mapping to their Devanagari equivalents.",
    input: "asdfghjk",
    expected: "बकमानजवप"
  },
  {
    name: "Test P4: Ikar reordering — Sabin (सबिन)",
    description: "Tests that 'l' (ि) typed before consonant is correctly repositioned after it.",
    input: ";lag",
    expected: "सबिन"
  },
  {
    name: "Test P5: Space preservation",
    description: "Tests that spaces pass through unchanged.",
    input: "g]kfn ;lag",
    expected: "नेपाल सबिन"
  },
  {
    name: "Test P6: Shift-key half consonants",
    description: "Tests capital letter shift-key mapping to half consonants.",
    input: "Zf//",  // श् + र + र = श्रर — actually Z→श्, f→ा, /→र, /→र
    expected: "श्ारर"  // Note: Z→श् (halant form), f→ा so श्+ा = awkward but letter by letter
  }
];

export const unicodeToPreetiTestCases = [
  {
    name: "Test U1: Nepal (g]kfn)",
    description: "Tests basic reverse mapping.",
    input: "नेपाल",
    expected: "g]kfn"
  },
  {
    name: "Test U2: Kathmandu (sf7df08\")",
    description: "Tests consonants, matras, and uu-matra.",
    input: "काठमाण्डू",
    expected: 'sf7df08"'
  }
];
