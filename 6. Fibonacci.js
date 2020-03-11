const fSequ = (num) => {
  // Base Case
  if (num < 2) {
    return num
  }
  // General Case
  return fSequ(num-1) + fSequ(num-2)

}

console.log(fSequ(7));
