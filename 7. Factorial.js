const factorial = (num) => {
  // Base Case
  if (num === 1) {
    return num
  }

  return num *= factorial(num -1)
}

console.log(factorial(5));