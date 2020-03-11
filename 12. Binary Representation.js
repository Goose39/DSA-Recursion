const binaryConv = (num) => {
  //Base Case
  if (num == 0) {
    return 0
  }
  //General Case
  return (num % 2) + 10 * binaryConv(Math.floor(num / 2))
}

console.log(binaryConv(10));