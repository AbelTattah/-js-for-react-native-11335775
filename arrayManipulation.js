
// Array processing function
const processArray = (array) => { 
    // return manipulated array
    return array.map((item)=> { return item%2==0?Math.pow(item,2):item*3 }) 
}

const formatArrayStrings = (arrayOfStrings, arrayOfNumbers) => { 
  // Validate the lenth of the string and numbers arrays
  if (arrayOfNumbers.length >= arrayOfStrings.length) {
    // manipulate and return updated array
    return arrayOfStrings.map((item, index) => {
      return arrayOfNumbers[index] % 2 == 0
        ? item.toUpperCase()
        : item.toLowerCase();
    });
  } else {
    // Throw and error if string and number array lengths are not equal.
    throw new Error(
      "Length of the Array of numbers must be greater than or equal to the array of strings"
    );
  }
};

// Export the functions
export { processArray, formatArrayStrings }

