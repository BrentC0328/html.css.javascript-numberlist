class ProductTest {
    // Test method for calculating the product of an array of positive integers
    testPositiveIntegers() {
      const numbers = [1, 2, 3, 4, 5];
      const numberList = new NumberList(numbers);
      const expectedOutput = 120;
  
      test(expectedOutput, numberList, numberList.product, numbers);
    }
  
    // Test method for calculating the product of an array of negative integers
    testNegativeIntegers() {
      const numbers = [-1, -2, -3, -4, -5];
      const numberList = new NumberList(numbers);
      const expectedOutput = 120;
  
      test(expectedOutput, numberList, numberList.product, numbers);
    }
  
    // Test method for calculating the product of an array of positive and negative integers
    testMixedIntegers() {
      const numbers = [1, -2, 3, -4, 5];
      const numberList = new NumberList(numbers);
      const expectedOutput = -120;
  
      test(expectedOutput, numberList, numberList.product, numbers);
    }
  }
  