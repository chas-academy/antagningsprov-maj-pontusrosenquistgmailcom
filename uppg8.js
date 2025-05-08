

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

let person = [
    {name: "Petra", age: 55},
    {name: "Harald", age: 81},
    {name: "Maja", age: 20},
    {name: "Torbjörn", age: 35},
    {name: "Clara", age: 40},
]

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function ageDiscrimination(persons){
    for(let name in persons){
        if (name.age > 30){
            console.log(name.name)
        }
    }
}
// anropa funktionen och skicka med arrayen som argument
ageDiscrimination(person)

}

module.exports = { uppg8 };