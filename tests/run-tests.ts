import { testCases } from "./krutidev-tests";
import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from "../src/utils/krutidevConverter";

let passed = 0;

console.log("\n=== KRUTIDEV TO UNICODE TESTS ===\n");

for (const test of testCases) {
  const actual = convertKrutidevToUnicode(test.input);
  const success = actual === test.expected;

  console.log(
    `${success ? "✅ PASS" : "❌ FAIL"} ${test.name}`
  );

  if (!success) {
    console.log("\nInput:");
    console.log(test.input);

    console.log("\nExpected:");
    console.log(test.expected);

    console.log("\nActual:");
    console.log(actual);

    console.log("\n-------------------------\n");
  } else {
    passed++;
  }
}

console.log(
  `\nResult: ${passed}/${testCases.length} tests passed`
);

let unicodePassed = 0;
const unicodeTestCases = [
  {
    name: "Unicode to Krutidev Test 1: Simple sentence",
    input: "कृत्तिदेव हब में आपका स्वागत है।",
    expected: "d`frnso gC esa vkidk Lokxr gSA"
  },
  {
    name: "Unicode to Krutidev Test 2: Chhoti-ee and complex cluster",
    input: "स्त्रियाँ, स्त्रियों की स्थिति विचित्र है।",
    expected: "fL=;k¡] fL=;ksa dh fLFkfr fofp= gSA"
  },
  {
    name: "Unicode to Krutidev Test 3: Reph shifting",
    input: "धर्म और आशीर्वाद",
    expected: "/keZ vkSj vk'khokZn"
  }
];

console.log("\n=== UNICODE TO KRUTIDEV TESTS ===\n");

for (const test of unicodeTestCases) {
  const actual = convertUnicodeToKrutidev(test.input);
  const success = actual === test.expected;

  console.log(
    `${success ? "✅ PASS" : "❌ FAIL"} ${test.name}`
  );

  if (!success) {
    console.log("\nInput:");
    console.log(test.input);

    console.log("\nExpected:");
    console.log(test.expected);

    console.log("\nActual:");
    console.log(actual);

    console.log("\n-------------------------\n");
  } else {
    unicodePassed++;
  }
}

console.log(
  `\nResult: ${unicodePassed}/${unicodeTestCases.length} tests passed`
);

process.exit(
  (passed === testCases.length && unicodePassed === unicodeTestCases.length) ? 0 : 1
);