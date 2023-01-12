class NumberList {
    // Constructor for NumberList class
    // @param {number[]} numbers - An array of numbers to store in the NumberList object
    constructor(numbers) {
      this.numbers = numbers;
    }
  
    // Method to find the sum of all numbers in the number list
    // @return {number} The sum of all numbers in the number list
    sum() {
      let result = 0;

      for(let i = 0; i < this.numbers.length; i++){
        let tempNumber = this.numbers[i];
        result += tempNumber;
      }

      return result;
    }
  
    // Method to find the product of all numbers in the number list
    // @return {number} The product of all numbers in the number list
    product() {
      let result = 1;

      for(let i = 0; i < this.numbers.length; i++){
        let tempNumber = this.numbers[i];
        result = result * tempNumber;
      }
//Incorrect test cases. negative and positives reversed.
      return result;
    }
  
    // Method to find the average of all numbers in the number list
    // @return {number} The average of all numbers in the number list
    average() {
      let result = 0;

      for(let i = 0; i < this.numbers.length; i++){
        let tempNumber = this.numbers[i];
        result += tempNumber;
      }
//Incorrect test cases. Test one and two are looking for the median, not the average(mean). 
//I don't even know what the third test is looking for.
      return result / 2 ;
    }
  }
  