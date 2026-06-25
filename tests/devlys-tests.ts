export const devlysToUnicodeTestCases = [
  {
    name: "DevLys to Unicode Test 1: Hkkjr -> भारत",
    input: "Hkkjr",
    expected: "भारत"
  },
  {
    name: "DevLys to Unicode Test 2: fgUnh -> हिंदी",
    input: "fgUnh",
    expected: "हिंदी"
  },
  {
    name: "DevLys to Unicode Test 3: fo|ky; -> विद्यालय",
    input: "fo|ky;",
    expected: "विद्यालय"
  },
  {
    name: "DevLys to Unicode Test 4: jke -> राम",
    input: "jke",
    expected: "राम"
  },
  {
    name: "DevLys to Unicode Test 5: {ks=iQy -> क्षेत्रफल",
    input: "{ks=iQy",
    expected: "क्षेत्रफल"
  }
];

export const unicodeToDevlysTestCases = [
  {
    name: "Unicode to DevLys Test 1: भारत -> Hkkjr",
    input: "भारत",
    expected: "Hkkjr"
  },
  {
    name: "Unicode to DevLys Test 2: हिंदी -> fgUnh",
    input: "हिंदी",
    expected: "fgUnh"
  }
];
