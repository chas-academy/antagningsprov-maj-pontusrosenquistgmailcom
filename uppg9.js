

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument

    function sort (numbers){
        for(number of numbers){
            if(number % 2 === 0){
                console.log(number + "jämt")
            }
            else{
                console.log(number + "udda")
            }
        }
    }
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    let myNumbers = [1,17,8,9,34,100,2582486428]

    sort(myNumbers)
  
}

module.exports = { uppg9 };