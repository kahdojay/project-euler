function fib(max=4000000) {
  let sum = 0, prev = 1, cur = 2, temp
  while (cur < max) {
    if (cur % 2 === 0) sum += cur
    temp = prev
    prev = cur
    cur += temp
  } 
  return sum
}

console.log(fib())