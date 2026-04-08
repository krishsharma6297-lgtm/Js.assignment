function solveMirrorCorridor() {
    let nInput = prompt("Enter the value for N:");
    let kInput = prompt("Enter the value for K:");
    
    let n = parseInt(nInput);
    let k = parseInt(kInput);
    
    let foundX = -1;

    for (let x = 0; x <= 10000; x++) {
        let target = n + x;

        let strTarget = target.toString();
        let reversedStr = strTarget.split('').reverse().join('');
        
        let isPalindrome = (strTarget === reversedStr);
        let isDivisible = (target % k === 0);

        if (isPalindrome && isDivisible) {
            foundX = x;
            break;
        }
    }

    alert(foundX);
}

solveMirrorCorridor();