// Counting sheep
const numSheep = function(count) {
  if (count === 0) {
    console.log('All sheep jumbed over the fence')
    return
  }
  console.log(`${count}: Another Sheep jump over the fence`)

  numSheep(count - 1)
}

numSheep(5)

// Power Calculator
function powerCalculator(int, exp) {
  if (exp < 0) {
    return 'exponent should be greater than 0'
  }
  if (exp === 0) {
    return 1
  }

  const retValue = int * powerCalculator(int, exp - 1)
  console.log(retValue)
  return retValue
}

powerCalculator(10, 4)

// Reverse String
function reverseString(str) {
  if (str.length === 1) {
    return str
  }

  const lastChar = str.length - 1

  const newStr = str[lastChar] + reverseString(str.substring(0, lastChar))
  console.log(newStr)
  return newStr
}

reverseString('hello')

// nth Triangular Number
function nThTri(n) {
  if (n === 1) {
    return 1
  }

  const newN = n + nThTri(n - 1)
  console.log(newN)
  return newN
}

nThTri(5)

// String Splitter
function strSplit(str, splitter) {
  if (str.length === 0) {
    return ''
  }

  const currentChar = str[0] === splitter ? '' : str[0]

  const newStr = currentChar + strSplit(str.slice(1), splitter)
  console.log(newStr)
  return newStr
}

strSplit('01/2/3//45/6/', '/') //should return 0123456

// Fibonacci
function fibonacci(num) {
  if (num <= 0) {
    return []
  }

  if (num === 1) {
    return [1]
  }

  if (num === 2) {
    return [1, 1]
  }

  const last = fibonacci(num - 1)

  return [...last, last[last.length - 1] + last[last.length - 2]]
}

fibonacci(7) // 1,1,2,3,5,8,13

// fib(1) -> 1
// fib(2) -> 1 + 0 = 1
// fib(3) -> 1 + 1 = 2
// fib(4) -> 2 + 1 = 3
// fib(5) -> 3 + 2 = 5
// fib(6) -> 5 + 3 = 8

// Factorial
function getFactorial(num) {
  if (num === 1) {
    return 1
  }

  const currFact = num * getFactorial(num - 1)
  console.log(currFact)
  return currFact
}

getFactorial(5)

// Find a way out of the maze
let mySmallMaze = [
  [' ', ' ', ' '],   //currX = 1 , currY = 0, maze[0].length = 3
  ['e', '*', ' '],
  [' ', ' ', ' ']
]

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]
// maze[4][0] cannot goto maze[5][0]

function findWayOut(maze, currY, currX, lastMove) {
  let posX = currX
  let posY = currY
  let move = ''

  if (maze[currY][currX] === 'e') {
    return ''
  } else if (currX + 1< maze[currY].length && maze[currY][currX + 1] !== '*' && lastMove !== 'L') {
    posX = ++currX
    move = 'R'
  } else if (currY + 1 < maze.length && maze[currY + 1][currX] !== '*') {
    posY = ++posY
    move ='D'
  } else if (currX - 1 >= 0 && maze[currY][currX - 1] !== '*') {
    posX = --currX
    move = 'L'
  } else if (currY - 1 >= 0 && maze[currY - 1][currX] !== '*') {
    posY = --currY
    move = 'U'
  }

  return move + findWayOut(maze, posY, posX, move);
}

console.log(findWayOut(mySmallMaze, 0, 0))
