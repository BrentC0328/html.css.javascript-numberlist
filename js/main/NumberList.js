class NumberList {
    // Constructor for NumberList class
    // @param {number[]} numbers - An array of numbers to store in the NumberList object
    constructor(numbers) {
      this.numbers = numbers;
    }
  
    // Method to find the sum of all numbers in the number list
    // @return {number} The sum of all numbers in the number list
    sum() {
      let sum = 0;
      let i = 0;
      while (i < this.numbers.length) {
        sum += this.numbers[i];
        i++;
      }
      return sum;
    }
  
    // Method to find the product of all numbers in the number list
    // @return {number} The product of all numbers in the number list
    product() {
      let product = 1;
      let i = 0;
      while (i < this.numbers.length) {
        product *= this.numbers[i];
        i++;
      }
      return product;
    }
  
    // Method to find the average of all numbers in the number list
    // @return {number} The average of all numbers in the number list
    average() {
      return this.sum() / this.numbers.length;
    }
  }
  