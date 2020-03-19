// Incomplete

const strSplitter = (str, delimiter, arr) => {
  // Base Case
  if (str.indexOf(delimiter) == -1) {
    arr.push(str)
    return arr
  }
  // General Case
  arr.push(str.slice(0, str.indexOf(delimiter)))
  return strSplitter(str.slice(str.indexOf(delimiter)+1), delimiter, arr)
  

}

console.log(strSplitter("02/20/2020", "/", []))