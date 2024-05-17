const processArray = (array) => array.map((item)=>{return item%2==0?Math.pow(item,2):item*3})

const formatArrayStrings = (arrayOfStrings,arrayOfNumbers) => {
    if (arrayOfNumbers.length >= arrayOfStrings.length) {
        return arrayOfStrings.map((item,index)=>{ return arrayOfNumbers[index]%2==0?item.toUpperCase():item.toLowerCase()})
    }
    else {
        throw new Error("Length of the Array of numbers must be greater than or equal to the array of strings")
    }
}

export { processArray, formatArrayStrings }

