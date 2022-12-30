class AverageTest {
    // Test method for calculating the average of an array of positive integers
    testPositiveIntegers() {
      const numbers = [1, 2, 3, 4, 5];
      const numberList = new NumberList(numbers);
      const expectedOutput = 3;
  
      test(expectedOutput, numberList.average, numbers);
    }
  
    // Test method for calculating the average of an array of negative integers
    testNegativeIntegers() {
      const numbers = [-1, -2, -3, -4, -5];
      const numberList = new NumberList(numbers);
      const expectedOutput = -3;
  
      test(expectedOutput, numberList.average, numbers);
    }
  
    // Test method for calculating the average of an array of positive and negative integers
    testMixedIntegers() {
      const numbers = [1, -2, 3, -4, 5];
      const numberList = new NumberList(numbers);
      const expectedOutput = 0;
  
      test(expectedOutput, numberList.average, numbers);
    }
  }
  