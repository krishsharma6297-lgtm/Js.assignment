# Js.assignment
Question-1

Approach
• ​Input the values for L, R, and K using prompt().

• ​Iterate through every integer x where L <=x < R.


• ​check divisibility of x.

• ​use modulo math to ensure the digit 0 is not present.

• ​Calculate the sum of the digits of x and verify if that sum is a prime number.

• ​ display the output using alert().


Time Complexity

O((R - L)* d), where d is the number of digits in R. We iterate through the range once, and for each number, we process its digits.


Question-2

Approach

• use prompt() to take the initial number N and the student's seed.

• ​We perform a loop exactly 3 times. 

• ​If the current number is even, it is updated using the formula: (current/2)+seed.

• ​If the current number is odd, it is updated using:( current×3)-seed.

• ​Check if the final number is between 100 and 999 inclusive.

• ​Extract the middle digit of the 3-digit number and check if it equals the seed.

• ​In output Display "YES" or "NO" along with the final value using alert().

Time Complexity: 

O(1). The loop runs for a fixed number of iterations (exactly 3)


Question-3

Approach

• ​ We use prompt() to take the initial integer N and the divisor K.

• ​ Since the constraints specify 0 \le X \le 10000, we run a loop from 0 to 10000 to find the smallest value for X.

• ​For each X, we calculate the target number: target = N + X.

• ​ We convert the target number to a string, reverse it, and check if it matches the original string.

• ​ We check if the target number is divisible by K (i target % K === 0).

•  If both conditions are met, we alert() the value of X and exit. If the loop finishes without finding a match, we print -1.

Time Complexity: O(M*D), where M is the maximum range of X (10,001) and D is the number of digits in N+X. 

Question-4


Approach

• ​Initial Calculation: Start with a base fare and add 7*distance.

• ​Lateness Penalty: If minutesLate is greater than 15, add 20 to the total.

• ​Distance Surcharge: If distance is greater than 10, calculate 10\% of the current fare and add it to the total.

• ​Seed Adjustment: If the seed is odd, subtract its value; otherwise, add its value.

• ​Rounding: Finally, round the total up to the nearest multiple of 5.

Time Complexity: 

O(1). The code executes a fixed sequence of mathematical operations and conditional checks.

Question-5
Approach

• ​use prompt() to take the target sum N and the seed.

• ​We start from m = 1 and keep track of a running currentSum.

• ​In each iteration, we check if the current number m is divisible by (seed + 2). 

• ​If it is not divisible, we add m to our currentSum.

• ​If it is divisible, we skip it.

•  The loop stops as soon as currentSum is greater than or equal to N.

• ​ We display both the value of m and the final currentSum using alert().

