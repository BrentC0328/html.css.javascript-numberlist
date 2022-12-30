class NumberListTestRunner {
  runTests() {
    const sumTest = new SumTest();
    sumTest.testPositiveIntegers();
    sumTest.testNegativeIntegers();
    sumTest.testMixedIntegers();

    const productTest = new ProductTest();
    productTest.testPositiveIntegers();
    productTest.testNegativeIntegers();
    productTest.testMixedIntegers();

    const averageTest = new AverageTest();
    averageTest.testPositiveIntegers();
    averageTest.testNegativeIntegers();
    averageTest.testMixedIntegers();
  }
}
const testRunner = new NumberListTestRunner();
testRunner.runTests();
