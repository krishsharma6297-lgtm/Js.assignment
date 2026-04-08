function solveRollSeedLock() {

    let n = parseInt(prompt("Enter the integer N:"));
    let seed = parseInt(prompt("Enter the student's seed value:"));

    let current = n;

    
    for (let i = 0; i < 3; i++) {
        if (current % 2 === 0) {

            current = (current / 2) + seed;
        } else {

            current = (current * 3) - seed;
        }
    }

    
    
    let isThreeDigits = (current >= 100 && current <= 999);
    let isMiddleDigitMatch = false;

    if (isThreeDigits) {

        let currentStr = current.toString();
        let middleDigit = parseInt(currentStr.charAt(1));
        
        if (middleDigit === seed) {
            isMiddleDigitMatch = true;
        }
    }


    if (isThreeDigits && isMiddleDigitMatch) {
        alert("YES, " + current);
    } else {
        alert("NO, " + current);
    }
}

solveRollSeedLock();
