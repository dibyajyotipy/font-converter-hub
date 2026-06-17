import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI Escape Codes for beautiful console logging
const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bgGreen: '\x1b[42m',
  bgRed: '\x1b[43m'
};

async function runTests() {
  console.log(`${COLORS.bright}${COLORS.cyan}=========================================`);
  console.log(`    CONVERTER SUITE VALIDATION TESTS    `);
  console.log(`=========================================${COLORS.reset}\n`);

  const registryPath = path.join(__dirname, '../dist-test/src/utils/conversionRegistry.js');
  
  if (!fs.existsSync(registryPath)) {
    console.error(`${COLORS.red}Error: Compiled utilities not found at ${registryPath}`);
    console.error(`Please compile the TypeScript files first. Run:`);
    console.error(`npm run test${COLORS.reset}`);
    process.exit(1);
  }

  // Dynamically import the compiled registry functions
  const { CONVERSION_FUNCTIONS } = await import(new URL(`file://${registryPath}`).href);
  
  // Read and parse test fixtures
  const fixturesPath = path.join(__dirname, 'fixtures/converters.json');
  const fixtures = JSON.parse(fs.readFileSync(fixturesPath, 'utf8'));

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;
  const failures = [];

  for (const [direction, categories] of Object.entries(fixtures)) {
    console.log(`${COLORS.bright}${COLORS.blue}▶ Direction: ${direction}${COLORS.reset}`);
    const convertFn = CONVERSION_FUNCTIONS[direction];
    
    if (!convertFn) {
      console.log(`  ${COLORS.red}✖ No conversion function registered for direction: ${direction}${COLORS.reset}\n`);
      failedTests += categories.reduce((acc, cat) => acc + cat.cases.length, 0);
      totalTests += categories.reduce((acc, cat) => acc + cat.cases.length, 0);
      continue;
    }

    for (const category of categories) {
      console.log(`  ${COLORS.bright}${COLORS.yellow}● Category: ${category.category}${COLORS.reset}`);
      
      for (let i = 0; i < category.cases.length; i++) {
        const { input, expected } = category.cases[i];
        totalTests++;
        
        try {
          const result = convertFn(input);
          
          if (result === expected) {
            passedTests++;
            console.log(`    ${COLORS.green}✔ Case ${i + 1} Passed${COLORS.reset}`);
          } else {
            failedTests++;
            const failureDetail = {
              direction,
              category: category.category,
              index: i + 1,
              input,
              expected,
              actual: result
            };
            failures.push(failureDetail);
            console.log(`    ${COLORS.red}✖ Case ${i + 1} Failed${COLORS.reset}`);
            console.log(`      Input:    [${input}]`);
            console.log(`      Expected: [${expected}]`);
            console.log(`      Actual:   [${result}]`);
          }
        } catch (err) {
          failedTests++;
          failures.push({
            direction,
            category: category.category,
            index: i + 1,
            input,
            expected,
            actual: `EXCEPTION: ${err.message}`
          });
          console.log(`    ${COLORS.red}✖ Case ${i + 1} Failed with Exception:${COLORS.reset}`);
          console.error(err);
        }
      }
      console.log(); // empty line between categories
    }
  }

  // Compile summary table/block
  console.log(`${COLORS.bright}${COLORS.cyan}=========================================`);
  console.log(`             TEST SUMMARY                `);
  console.log(`=========================================${COLORS.reset}`);
  console.log(`Total Run:  ${totalTests}`);
  console.log(`${COLORS.green}Passed:     ${passedTests}${COLORS.reset}`);
  if (failedTests > 0) {
    console.log(`${COLORS.red}Failed:     ${failedTests}${COLORS.reset}`);
  } else {
    console.log(`Failed:     0`);
  }
  
  const passRate = ((passedTests / totalTests) * 100).toFixed(1);
  const rateColor = failedTests > 0 ? COLORS.red : COLORS.green;
  console.log(`Pass Rate:  ${rateColor}${passRate}%${COLORS.reset}\n`);

  if (failures.length > 0) {
    console.log(`${COLORS.bright}${COLORS.red}❌ FAILED TESTS SUMMARY:${COLORS.reset}`);
    failures.forEach((fail, idx) => {
      console.log(`${COLORS.red}${idx + 1}. [${fail.direction}] -> [${fail.category}] Case ${fail.index}${COLORS.reset}`);
      console.log(`   Input:    ${JSON.stringify(fail.input)}`);
      console.log(`   Expected: ${JSON.stringify(fail.expected)}`);
      console.log(`   Actual:   ${JSON.stringify(fail.actual)}`);
      console.log();
    });
    
    // Clean up temporary compiled folder
    cleanUpTempFiles();
    process.exit(1);
  } else {
    console.log(`${COLORS.bright}${COLORS.green}🎉 All tests passed successfully!${COLORS.reset}\n`);
    cleanUpTempFiles();
    process.exit(0);
  }
}

function cleanUpTempFiles() {
  const tempDir = path.join(__dirname, '../dist-test');
  if (fs.existsSync(tempDir)) {
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch (e) {
      console.warn('Warning: Failed to clean up temp build folder:', e.message);
    }
  }
}

runTests().catch(err => {
  console.error('Test runner encountered an unhandled exception:');
  console.error(err);
  cleanUpTempFiles();
  process.exit(1);
});
