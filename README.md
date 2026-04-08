# Js.assignment
question 1

Approach
• ​Input the values for L, R, and K using prompt().
• ​Iterate through every integer x where L <=x < R.

• ​check divisibility of x.
• ​use modulo math to ensure the digit 0 is not present.
• ​Calculate the sum of the digits of x and verify if that sum is a prime number.
• ​ display the output using alert().

Time Complexity
O((R - L)* d), where d is the number of digits in R. We iterate through the range once, and for each number, we process its digits.
