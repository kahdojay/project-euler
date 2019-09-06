// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isLength(num, length) {
  return num.toString().length === numDigits
}

function isPalindrome(num) {
  const digits = num.toString().split('')
  return digits.toString() === digits.reverse().toString()
}

function largestPal(numDigits) {
  let maxFactor1 = maxFactor2 = parseInt('9'.repeat(numDigits))
  let lowerBound = parseInt('9'.repeat(numDigits-1))
  for (let a = maxFactor1; a > lowerBound; a--) {
      for (let b = maxFactor2; b > lowerBound; b--) {
        const numToCheck = a * b;
        if (isPalindrome(numToCheck)) {
          return numToCheck;
        }
      }
  }
}

console.log(largestPal(4))