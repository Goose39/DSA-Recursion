const sheepCounter = (num) => { //input: num = 3
  //Base Case
  if ( num === 0 ) {
    return `All sheep jumped over the fence`
  }
  //General Case
  return `${num}: Another Sheep jumps over the fence` + sheepCounter(num - 1)
}

console.log(sheepCounter(3));