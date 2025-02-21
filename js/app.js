// in chuỗi đảo ngược:
const reverseString = (str) => {
  let newString = []
  for (let i = str.length; i > 0 ; i --) {
    newString.push(str[i])
  }
  return newString.join('')
}

const string = 'Hello World'
const reverseStringOutput = reverseString(string)
console.log("This is reverse string: ",reverseStringOutput)

console.log("==========================================================================================================================")

//loại bỏ phần tử trùng trong mảng
const removeDuplicates = (arr) => {
  const arrayFiltered  = new Map()
  let duplicateArray = []
  for (let i = 0; i < arr.length; i ++) {
    if (arrayFiltered.has(arr[i])){
      duplicateArray.push(arr[i])
    } else {
      // set(key, value) set có 2 tham số: key và value
      arrayFiltered.set(arr[i],arr[i])
    }
  }
  console.log("Duplicate numbers array: ",duplicateArray)
  console.log("Array after filtered",Array.from(arrayFiltered.values()))
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

console.log("==========================================================================================================================")

//FizzBuzz
const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, " FizzBuzz")
    } else if (i % 3 === 0) {
      console.log(i, " Fizz")
    } else if (i % 5 === 0) {
      console.log(i, " Buzz")
    } else {
      console.log(i, " Try another number")
    }
  }
}
fizzBuzz(10)

console.log("==========================================================================================================================")

// find largest in array

const findLargest = (arr) => {
  let largestTemp = arr[0]
  for (let i = 0; i < arr.length; i ++) {
    if (largestTemp < arr[i]) {
      largestTemp = arr[i]
    }
  }
  return largestTemp
}
const largest = findLargest([7, 1, 2, 13, 3, 9, 4, 5])
console.log("This is largest number in array: ", largest)

console.log("==========================================================================================================================")

// find unique number in array

const uniqueNumber = (arr) => {
  let uniqueNumber = 0
  for (let number of arr) {
    uniqueNumber ^= number
  }
  return uniqueNumber
}
const number = uniqueNumber([1, 2, 3, 4, 3, 2, 1])
console.log("This is unique number in array: ", number)

console.log("==========================================================================================================================")

// check Palindrome

const checkPalindrome = (str) => {
  // let leftStr = "";
  // let leftArr = []
  // for (let i = 0; str % 2 === 0 ? i < str.length / 2 - 1: i < str.length / 2; i ++) {
  //   leftArr.push(str[i])
  // }
  //
  // let rightStr = "";
  // let rightArr = []
  // for (let i = str.length; str % 2 === 0 ? i > str.length / 2 : i > str.length / 2 -1 ; i--) {
  //   rightArr.push(str[i])
  // }
  //
  // leftStr = leftArr.join('')
  // rightStr = rightArr.join("")
  // return leftStr === rightStr

//   cách khác

  const strReverse = str.split('').reverse().join("")
  return str === strReverse
}

const isPalindrome = checkPalindrome('racecar')
console.log("This is palindrome: ", isPalindrome)

console.log("==========================================================================================================================")

//count number of the vowels

const countVowels = (str) => {
  const vowels = {
    u: 'u',
    e: 'e',
    o: 'o',
    a: 'a',
    i: 'i'
  }

  let count = 0

  for(let i = 0; i < str.length; i ++) {
    if (vowels[str[i]]) {
      count +=1
    }
  }
    return count
}

const totalVowels = countVowels('hello world')
console.log("This is total vowels: ", totalVowels)

console.log("==========================================================================================================================")

//Merge two sorted arrays

const mergeSortedArrays = (arr1, arr2) => {
  // return arr1.concat(arr2).sort((a, b) => a - b)
//   cách khác:


  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      let temp = arr1[i]
      if (temp > arr1[j]) {
        arr1[i] = arr1[j]
        arr1[j] = temp
        temp = arr1[i]
      }
    }
  }
  return arr1
}

const arrayMerged = mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])
console.log("This is merged array: ", arrayMerged)

console.log("==========================================================================================================================")

// Find the First Non-Repeated Character

const handleFindTheFirstNonRepeatedCharacter = (str) => {
    const set = new Set()

    const listUniqueCharacters = []

    for (let i = 0; i < str.length; i ++) {
      if(set.has(str[i])) {
        listUniqueCharacters.push(str[i])
      } else {
        set.add(str[i])
      }
    }
  const arrayIsolate = Array.from(set.values()).filter(item => !listUniqueCharacters.includes(item))
  return arrayIsolate[0]
}

const firstNonRepeatedCharacter = handleFindTheFirstNonRepeatedCharacter('aabccdb')
console.log("This is first non repeated character: ", firstNonRepeatedCharacter)

console.log("==========================================================================================================================")

// n => n === 5 => 1 22 333 4444 55555
// n === 6 => 1 22 333 4444 55555 66666
const handleNthDigit = (n) => {
    for (let i = 1; i <= n; i ++) {
      let line = ""
      for (let j = 1; j <= i; j++) {
        line += i
      }
      console.log("Result: ", line)
    }
}
handleNthDigit(7)

console.log("==========================================================================================================================")

//valid parentheses
function isValid(s) {
  const stack = [];

  for (let c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;

      const last = stack.pop();

      if (c === ')' && last !== '(') return false;
      if (c === '}' && last !== '{') return false;
      if (c === ']' && last !== '[') return false;
    }
  }

  return stack.length === 0;
}

const valid = isValid('()[]{})')
console.log("this is valid parentheses: ", valid)

console.log("==========================================================================================================================")

//Find the Index of a Target in a Sorted Array

const findIndexOfTarget = (arr, target) => {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = i + 1; j < arr.length; j ++) {
      let temp = arr[i]
      if (temp > arr[j]) {
        arr[i] = arr[j]
        arr[j] = temp
        temp = arr[i]
      }
    }
  }
  console.log(arr, target)
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === target) {
      target = i
      return target
    }
  }
  return -1
}

const indexOfTarget = findIndexOfTarget([2, 1, 6, 4, 5, 3], 1)
console.log("This is index of target: ", indexOfTarget)

console.log("==========================================================================================================================")

//Prime Number Checker

const primeNumberChecker = (num) => {
  for (let i = 2; i < num; i ++ ) {
    if(num % i === 0) {
      return false
    }
  }
  return true
}

const isPrime = primeNumberChecker(7)
console.log("this is prime number: ", isPrime)

console.log("==========================================================================================================================")

//Check for Substring
// isSubstring("hello", "ell"); // true
// isSubstring("javascript", "script"); // true
// isSubstring("frontend", "back"); // false

const isSubstring = (str, sub) => {
  // return str.includes(sub)
//   cách khác
  for (let i = 0; i < str.length - sub.length; i ++) {
    let match = true
    for (let j = 0; j < sub.length; j ++) {
      if(str[i + j] !== sub[j]) {
        match = false
        break
      }
    }
    if (match) return true
  }
  return false
}

const isSubstringValid = isSubstring("hello", "ell")
console.log("This is substring valid: ", isSubstringValid)

console.log("==========================================================================================================================")

//Count Character Occurrences in a String
// countChar("hello", "l"); // 2
// countChar("javascript", "a"); // 2
// countChar("banana", "n"); // 2

const countCharacter = (str, char) => {
  // let listCharCount = []
  // for (let i = 0; i < str.length; i ++) {
  //   if(str[i] === char) {
  //     listCharCount.push(str[i])
  //   }
  // }
  // return listCharCount.length
//   cách khác:
  return str.split('').filter(x => char.includes(x)).length
}

const count = countCharacter("hello", "l")
console.log("This is count character: ", count)

console.log("==========================================================================================================================")

//Find the nth Fibonacci Number
const findNthFibonacciNumber = (n) => {
  let listFibonacci = [0, 1]
  if (n === 0) listFibonacci = [0]
  if (n === 1) listFibonacci = [0, 1]

  for (let i = 2; i <= n; i ++) {
    listFibonacci.push(listFibonacci[i - 1] + listFibonacci[i - 2])
  }
  return listFibonacci
}
const listFibonacci = findNthFibonacciNumber(10)
console.log("This is list fibonacci: ", listFibonacci)