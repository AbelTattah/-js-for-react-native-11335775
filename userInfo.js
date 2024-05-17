import { formatArrayStrings } from "./arrayManipulation.js"  // Import formatArray Strings from arrayManipulation.js

// Create user profiles
function createUserProfiles(arrayOfNames,arrayOfModifiedNames) {
    // Manipulate input and return user profiles
    return arrayOfNames.map((item,index)=>{
        return {
            originalName:item,
            modifiedName:arrayOfModifiedNames[index],
            id:index+=1
        }
    })
}

// String and number arrays for testing the correctness of all implemented algorithms
const names = ['Adel','Kofi','Kwadwo']
const numbers = [2,4,3,45,6,9]

// Check whether code is correct
console.log(createUserProfiles(names,formatArrayStrings(names,numbers)))
