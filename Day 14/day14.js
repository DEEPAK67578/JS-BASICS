// //function
function NameGenerator(name) {
    console.log(name)
}

const nameObject = {
    name1:"Mani",
    name2:"Deepak"
}

NameGenerator(nameObject)
NameGenerator("Deepak")


//if..elif..else
let names = "Deepak"
let name1 = "Mani"
if(!names.length == 6) {
    console.log(names)
} else if(!names.length == 6) {
    console.log(name1)
} else {
    console.log(nameObject)
}


//nestedobjects
let hobbiesOfStudents = {
    names:["Mani","Deepak","Balu","Annie"],
    hobbies:{
        hobby1:"Playing Football",
        hobby2:"Playing Cricket"
    },
    function:function name1() {
        console.log(nameObject)
    }
}

console.log(hobbiesOfStudents.names[0])
console.log(hobbiesOfStudents.hobbies.hobby1)
hobbiesOfStudents.function()

// opertions

console.log(40+20)
console.log(40-20)
console.log(40*20)
console.log(40/20)
console.log(40%20)

let user = "mani"
console.log(user.length)