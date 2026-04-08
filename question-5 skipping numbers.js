function solveSkippingNumbers() {
    let n = parseInt(prompt("Enter the target sum N:"));
    let seed = parseInt(prompt("Enter the seed value:"));

    let currentSum = 0;
    let m = 0;
    let skipValue = seed + 2;

    while (currentSum < n) {
        m++;
        if (m % skipValue !== 0) {
            currentSum += m;
        }
    }

    alert("Value of m: " + m + "\nComputed Sum: " + currentSum);
}

solveSkippingNumbers();