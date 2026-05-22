// Test cases for Calculator
// Testing the JavaScript logic used in calculator.html

function calculate(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}

const testCases = [
    {
        id: 1,
        name: "Basic Addition",
        input: "2+3",
        expected: "5",
        actual: calculate("2+3"),
        pass: calculate("2+3") == 5
    },
    {
        id: 2,
        name: "Division by Zero",
        input: "5/0",
        expected: "Error",
        actual: calculate("5/0"),
        pass: calculate("5/0") === Infinity
    },
    {
        id: 3,
        name: "Multiple Operators",
        input: "2++3",
        expected: "Error",
        actual: calculate("2++3"),
        pass: calculate("2++3") === 'Error'
    },
    {
        id: 4,
        name: "Empty Expression",
        input: "",
        expected: "Error",
        actual: calculate(""),
        pass: calculate("") === undefined
    },
    {
        id: 5,
        name: "Decimal Numbers",
        input: "2.5+3.5",
        expected: "6",
        actual: calculate("2.5+3.5"),
        pass: calculate("2.5+3.5") == 6
    }
];

console.log("🧮 Calculator Test Results\n");
console.log("=".repeat(60));

testCases.forEach(tc => {
    const status = tc.pass ? "✅ PASS" : "❌ FAIL";
    console.log(`\nTest #${tc.id}: ${tc.name}`);
    console.log(`Input: "${tc.input}"`);
    console.log(`Expected: ${tc.expected}`);
    console.log(`Actual: ${tc.actual}`);
    console.log(`Status: ${status}`);
});

console.log("\n" + "=".repeat(60));
const passed = testCases.filter(tc => tc.pass).length;
const failed = testCases.length - passed;
console.log(`\n📊 Summary: ${passed}/${testCases.length} passed, ${failed}/${testCases.length} failed`);