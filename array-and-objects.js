// Declaring Array
let arrayNames = ["Deepak","mani","Annie","Madhu","Balu"]
// console.log(arrayNames[2])

// Declaring Objects
let workObject = {
    title:"Web Developer",
    place:"New York",
    salary:"$ 10000"
}

console.log(workObject["title"])
console.log(workObject.title)

// for loop 1st type(Normal)

for(let i = 0;i < arrayNames.length;i = i + 1) {
    console.log(arrayNames[i])
}

// for loop 2nd type(Array)

for (const names of arrayNames) {
    console.log(names)
}

// for loop 3rd type(Objects)

for (const hobbies in workObject) {
    console.log(workObject[hobbies])
}

