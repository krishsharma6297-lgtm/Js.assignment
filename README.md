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
