

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument

    function sort (numbers){
        for(number of numbers){
            // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
            //console.log(number)
            if(number % 2 === 0){
                let tempObj = [number, "Jämt"]
                console.log(...tempObj)
            }
            else{
                let tempObj = [number, "udda"]
                console.log(...tempObj)
            }
        }
    }
    
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    let myNumbers = [13,17,8,33,34,100,74]

    sort(myNumbers)
  
}

module.exports = { uppg9 };