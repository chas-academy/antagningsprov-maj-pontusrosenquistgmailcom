

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument

    function sort (numbers){
        for(number of numbers){
            console.log(Number(number))
            if(number % 2 === 0){
                console.log(`jämt`)
            }
            else{
                console.log(`udda`)
            }
        }
    }
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    let myNumbers = [1,17,8,33,34,100,74]

    sort(myNumbers)
  
}

module.exports = { uppg9 };