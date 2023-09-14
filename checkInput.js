const { ErrorMessage } = require('./error')
module.exports = function checkInput (numbers) {
  numbers = numbers.trim()
  const numberArray = numbers.split(' ')
  const result = []
  let previousNumber = undefined
  for (let number of numberArray) {
    checkLength(number)
    number = Number.parseInt(number)
    checkInteger(number)
    previousNumber = checkIncreasingUpdatePNumber(number, previousNumber)
    result.push(number)  
  }
  if (result.length < 2) throw new ErrorMessage('please enter at least two numbers')
  return result
}

function checkLength (number) {
  if (number.length === 0) throw new ErrorMessage('there are double space with the numbers your input, please check it again')
}
function checkInteger (number) {
  if (!Number.isInteger(number)) throw new ErrorMessage(`This number "${number}" is not integer, please check it again`)
}
function checkIncreasingUpdatePNumber (number, previousNumber) {
  if (previousNumber !== undefined && number < previousNumber) {
    throw new ErrorMessage(`This number sequence is not increased, please check it again`)
  }
  return number
}
