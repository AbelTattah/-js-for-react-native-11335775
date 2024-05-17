import { formatArrayStrings } from "./arrayManipulation.js"

function createUserProfiles(arrayOfNames,arrayOfModifiedNames) {
    return arrayOfNames.map((item,index)=>{
        return {
                    originalName:item,
                    modifiedName:arrayOfModifiedNames[index],
                    id:index+=1
                }
            })
}

const names = ['Adel','Kofi','Kwadwo']
const numbers = [2,4,3,45,6,9]

console.log(createUserProfiles(names,formatArrayStrings(names,numbers)))
