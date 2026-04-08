function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;



for (let x = L; x < R; x++) {
    
  
    if (x % K === 0) {
        
        let numStr = x.toString();
        
        
        if (numStr.indexOf('0') === -1) {
            
            
            let sumOfDigits = 0;
            for (let i = 0; i < numStr.length; i++) {
                sumOfDigits += parseInt(numStr[i]);
            }
            
            if (isPrime(sumOfDigits)) {
                count++;
            }
        }
    }
}


alert(count);
