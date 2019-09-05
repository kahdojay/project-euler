# Fundamental Theorem of Arithmetic: any integer > 1 is either prime or is composed of a product of prime numbers
# prime factorize by starting with the smallest prime as a divisor, and keep dividing into the num, continuing for each prime along the way until the resulting quotient itself is prime

def largest_prime_factor(num):
  divisor = 2
  quotient = num
  largest_factor = 0

  while (divisor <= num ** .5):
    if (quotient % divisor == 0):
      quotient //= divisor
      largest_factor = divisor
    else:
      divisor += 1
  # quotient itself is prime now that it has been factorized, either it or the largest_factor is the largest prime factor
  return max(quotient, largest_factor)

print(largest_prime_factor(600851475143))