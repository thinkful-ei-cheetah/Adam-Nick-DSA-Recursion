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
  if(n === 1){
    return 1
  }

  const newN = n + nThTri(n-1)
  console.log(newN)
  return newN
}

nThTri(5)