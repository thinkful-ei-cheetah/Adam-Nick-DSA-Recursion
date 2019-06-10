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

//String Splitter
function strSplit(str, splitter){
  if(str.length === 0){
    return '';
  }

  const currentChar = str[0] === splitter  ? '' : str[0]; 

  const newStr = currentChar + strSplit(str.slice(1), splitter);
  console.log(newStr);
  return newStr;
}

strSplit('01/2/3//45/6/', '/') //should return 0123456

function fibonacci(num){
  if(num <= 0){
    return 0;
  }
  if(num === 1){
    return 1;
  }

  const fibSequence = fibonacci(num-1) + fibonacci(num -2);
  console.log(fibSequence);
  return fibSequence;
}

fibonacci(7); // 1,1,2,3,5,8,13