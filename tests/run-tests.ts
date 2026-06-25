import { testCases } from "./krutidev-tests";
import { convertKrutidevToUnicode, convertUnicodeToKrutidev } from "../src/utils/krutidevConverter";
import { preetiToUnicodeTestCases, unicodeToPreetiTestCases } from "./preeti-tests";
import { convertPreetiToUnicode, convertUnicodeToPreeti } from "../src/utils/preetiConverter";
import { devlysToUnicodeTestCases, unicodeToDevlysTestCases } from "./devlys-tests";
import { convertDevlysToUnicode, convertUnicodeToDevlys } from "../src/utils/devlysConverter";

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

// ─── PREETI TESTS ────────────────────────────────────────────────────────────

let preetiPassed = 0;
console.log("\n=== PREETI TO UNICODE TESTS ===\n");

for (const test of preetiToUnicodeTestCases) {
  const actual = convertPreetiToUnicode(test.input);
  const success = actual.normalize('NFC') === test.expected.normalize('NFC');

  console.log(`${success ? "✅ PASS" : "❌ FAIL"} ${test.name}`);

  if (!success) {
    console.log("\nInput:", test.input);
    console.log("Expected:", test.expected);
    console.log("Actual:", actual);
    console.log("\n-------------------------\n");
  } else {
    preetiPassed++;
  }
}

console.log(`\nResult: ${preetiPassed}/${preetiToUnicodeTestCases.length} Preeti→Unicode tests passed`);

let u2pPassed = 0;
console.log("\n=== UNICODE TO PREETI TESTS ===\n");

for (const test of unicodeToPreetiTestCases) {
  const actual = convertUnicodeToPreeti(test.input);
  const success = actual === test.expected;

  console.log(`${success ? "✅ PASS" : "❌ FAIL"} ${test.name}`);

  if (!success) {
    console.log("\nInput:", test.input);
    console.log("Expected:", test.expected);
    console.log("Actual:", actual);
    console.log("\n-------------------------\n");
  } else {
    u2pPassed++;
  }
}

console.log(`\nResult: ${u2pPassed}/${unicodeToPreetiTestCases.length} Unicode→Preeti tests passed`);

// ─── DEVLYS TESTS ────────────────────────────────────────────────────────────

let devlysPassed = 0;
console.log("\n=== DEVLYS TO UNICODE TESTS ===\n");

for (const test of devlysToUnicodeTestCases) {
  const actual = convertDevlysToUnicode(test.input);
  const success = actual.normalize('NFC') === test.expected.normalize('NFC');

  console.log(`${success ? "✅ PASS" : "❌ FAIL"} ${test.name}`);

  if (!success) {
    console.log("\nInput:", test.input);
    console.log("Expected:", test.expected);
    console.log("Actual:", actual);
    console.log("\n-------------------------\n");
  } else {
    devlysPassed++;
  }
}

console.log(`\nResult: ${devlysPassed}/${devlysToUnicodeTestCases.length} DevLys→Unicode tests passed`);

let u2dPassed = 0;
console.log("\n=== UNICODE TO DEVLYS TESTS ===\n");

for (const test of unicodeToDevlysTestCases) {
  const actual = convertUnicodeToDevlys(test.input);
  const success = actual === test.expected;

  console.log(`${success ? "✅ PASS" : "❌ FAIL"} ${test.name}`);

  if (!success) {
    console.log("\nInput:", test.input);
    console.log("Expected:", test.expected);
    console.log("Actual:", actual);
    console.log("\n-------------------------\n");
  } else {
    u2dPassed++;
  }
}

console.log(`\nResult: ${u2dPassed}/${unicodeToDevlysTestCases.length} Unicode→DevLys tests passed`);

// ─── EXTENDED ASCII INVERSION REPORT ─────────────────────────────────────────
console.log("\n=== PREETI EXTENDED ASCII INVERSION REPORT ===\n");

// Import the map for introspection — we'll do it inline for the report
const extendedCodes = [
  '\u201E', '\u2026', '\u02C6', '\u2030', '\u2039', '\u2018', '\u2022', '\u02DC',
  '\u203A', '\u00A1', '\u00A2', '\u00A3', '\u00A9', '\u00AA', '\u00AB', '\u00B0',
  '\u00B1', '\u00B4', '\u00B6', '\u00BF', '\u00C5', '\u00C6', '\u00CB', '\u00CC',
  '\u00CD', '\u00CE', '\u00D6', '\u00D7', '\u00D8', '\u00D9', '\u00DA', '\u00DB',
  '\u00DC', '\u00DD', '\u00DF', '\u00E5', '\u00E6', '\u00E7', '\u00F7'
];

let oneWayCount = 0;
for (const k of extendedCodes) {
  const unicodeFwd = convertPreetiToUnicode(k);
  const reverseOut = convertUnicodeToPreeti(unicodeFwd);
  if (reverseOut !== k) {
    oneWayCount++;
    const hex = k.codePointAt(0)!.toString(16).toUpperCase().padStart(4, '0');
    console.log(`  ONE-WAY: U+${hex} (${k}) → "${unicodeFwd}" → reverse: "${reverseOut}"`);
  }
}
console.log(`  Total one-way-only: ${oneWayCount}/${extendedCodes.length}`);

process.exit(
  (passed === testCases.length && 
   unicodePassed === unicodeTestCases.length && 
   preetiPassed === preetiToUnicodeTestCases.length && 
   u2pPassed === unicodeToPreetiTestCases.length &&
   devlysPassed === devlysToUnicodeTestCases.length &&
   u2dPassed === unicodeToDevlysTestCases.length) ? 0 : 1
);
