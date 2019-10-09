
let animals = ['dog', 'cat', 'horse', 'mouse', 'pig', 'cow', 'ferret', 'lizard', 'frog']

let newAnimal = prompt("Enter an animal.")
newAnimal = newAnimal.toLowerCase()
animals.push(newAnimal)

let last = animals[animals.length - 1]

alert(`The last animal is ${last}`)
