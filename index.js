// Create a class that represents anything you like
class house {
    constructor(bungalow) {
      this._bungalow = bungalow;
    }
    bungalow () {
        return this._bungalow;
    }
  }
// Create a class that extends the first class
class interior extends house {
    constructor (bungalow, noOfRooms) {
        super (bungalow);
        this.noOfRooms = noOfRooms;
    }
   get interior () {
        return this.noOfRooms;
    }
    set interior (moreSpace) {
        this.interior = moreSpace;
    }
    //has this setter worked?
}

// const _interior = new interior ('bungalow', 4);
// console.log(_interior.bungalow());

// Create a class that extends the second class
class furniture extends interior {
    constructor (bungalow, interior, furnished) {
        super (bungalow, interior);
        this.furnished = furnished;
    }
    furniture () {
        return this.furnished;
    }
}

// Make sure each class has at least one method and one piece of data unique to it

// Create an instance of the final class
const _housefurniture = new furniture ('bungalow', 4, 'furnished');
 console.log(_housefurniture.furniture());
// Modify the classes above to use get/set
const _interior = new interior ('bungalow', 4);
console.log (_interior.interior);

// 1.Create a function in a second file, use export to export it


// 2. In your main file import and execute the function
// import { randomNumber } from "./JShomework2"; // need to have module turned on for this to be working. Tried to turn on, and view in dev console, but got an error
// console.log(randomNumber(2));
// 
// 3. Write out a fat arrow function using the same line to return (as in no return keyword)
const plus = (x) =>  x + 10;
console.log(plus(2));
// 4. Add default parameters to the above function
const plusdefault = (x = 3) =>  x + 10;
console.log(plusdefault());
// 5. Create an object that has a child object, that itself has a child object (3 levels).
const obj = { 
animal: 'zebra',
location: 'Africa',
description : {
    pattern: 'stripes',
    colour: 'black & white',
    speciesinfo: {
        class: 'Mammal',
        family: 'Equidae',
        numberOfSpecies: 3,
    }
}
 };
 const {animal, location, description, speciesinfo} = obj;
 const {predators = ['cheetahs']} = obj;
// 6. Use object destructuring to pull out the parts at level 3
console.log(speciesinfo); // why is this one undefined?
console.log(obj.description.speciesinfo);
// 7. Add a default value to the above destructuring
console.log(obj.predators); //similarly unsure why getting undefined
// 8. Destructure an array
const animalArray = ['caterpillar', 'mantaray', 'hummingbird','wolf'];
const [first, third] = animalArray;
console.log(first, third);
// 9. Create two objects. Add more than two keys/values to both objects. Copy all the items from the first object into the second object. Use the spread operator.
const paintNames = {
pink: 'bubblegum pink',
orange: 'tangerine',
blue: 'winter blue',
purple: 'lavendar'
};
const artSupplies = {
    painting: 'watercolour',
    sketching: 'charcoal',
    brushes: 10,
}
const clone = {paintNames, artSupplies};
console.log(clone);
// think I've just made a shallow copy combining both, rather than copying second and adding in the first?
// 10. Send 5 arguments to a function and use the rest operator to group them
function person ( ...aboutInfo) {
    return aboutInfo};
console.log(person('Frank', 'Stevens', 34, 'webdeveloper', 'runner'));

// 11. Add a function to one of the objects, use the object method shorthand.
