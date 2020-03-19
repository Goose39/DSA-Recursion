/// incomplete

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let myLargeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

solveMaze = (maze, i, j, solution) => {
  // Base Case
  if (maze[i][j] === 'e') {
    return solution
  } 
  // Recursive Case
  if (maze[i+1][j] != '*' && i+1 < maze.length-1) {
    solution += 'D'
    solveMaze(maze, i+1, j, solution)
  } 
  
  if (maze[i][j+1] != '*' && j+1 < maze[0].length) {
    solution += 'R'
    solveMaze(maze, i, j+1, solution)
  } 
  
  if (maze[i][j-1] != '*') {
    solution += 'L'
    solveMaze(maze, i, j-1, solution)
  } 
  
  if (maze[i-1][j] != '*' && i-1 >= 0) {
    solution += 'U'
    solveMaze(maze, i-1, j, solution)
  } 

  return "no solution"
}

console.log(solveMaze(myLargeMaze, 0, 0, ''));