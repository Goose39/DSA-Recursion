const strSplitter = (str, delimiter) => {
  // Base Case
  if (str.indexOf(delimiter) == -1) {
    return str
  }
  // General Case
  return str.slice(0, str.indexOf(delimiter)) + strSplitter(str.slice(str.indexOf(delimiter)+1))
  

}

console.log(strSplitter("02/20/2020", "/"))