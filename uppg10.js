function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    let bigEven = []
    let smallOdd =[]
    let other = []

    
    // loopa igenom numbers och placera talen i respektive array
    for(num of numbers){
      
      // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
        if(num >10 && num % 2 === 0){
          bigEven.push(num)
        }

      // smallOdd ska innehålla tal mindre än 10 och udda
        else if (num < 10 && num %2 !== 0){
          smallOdd.push(num)
        }

      // other ska innehålla alla andra tal
        else{
          other.push(num)
        }
    }

    let returnObj = {bigEven, smallOdd, other}
    // returnera ett objekt med de tre arrayerna

    return returnObj
  
    
  
  }
  
  module.exports = { uppg10 };
  