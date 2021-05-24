// Put your code here
const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
]

console.log("All Place Names")

for (let name of names) {
    console.log(name)
}


let theNames = names.filter(name => name.includes("The"))

for (let name of theNames) {
    console.log(name)
}