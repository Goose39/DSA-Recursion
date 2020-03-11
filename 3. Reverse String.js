const strRev = (str) => {
  // Base Case
  if (str.length === 1) {
    return str[0]
  }
  // General Case
  return str[str.length - 1] + strRev(str.slice(0, -1))
}

console.log(strRev('String'));