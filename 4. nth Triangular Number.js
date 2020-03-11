const nTri = (num) => {
  if (num === 1 ) {
    return num;
  }

  return num + nTri(num - 1)
}

console.log(nTri(4));