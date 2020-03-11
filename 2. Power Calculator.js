const powerCalculator = (base, exp) => {
  // Initial checkk for exp < 0
  if (exp < 0) {
    return console.log("Exponent should be >= 0")
  }
  // Base Case
  if (exp === 1) {
    return base
  }
  //General Case
  return base * powerCalculator(base, exp - 1)
}

console.log(powerCalculator(10, 3));