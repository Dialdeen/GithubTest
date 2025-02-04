console.log(' Hello  there nice one man')



// Object 
let person = {

name: 'Diaa',
age:50



}


// Object Call (Dot Notaiton )
console.log(person.age,person.name)

// Object Call (Braces Notaiton )
console.log(person['name'] = 'Moe')


// Function 

function diaa (number){


return number + 2 

}

// Function Recall 

console.log(diaa(2))




function powerNumber (number){

    return{
number, 
power: function() {
 return number * number

}

    };
}

const five = powerNumber(5)


console.log(five.power())