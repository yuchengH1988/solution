exports.diagnoseGeometricProgression = function diagnoseGeometricProgression (numbers, answersSet) {
  let previousNumber = undefined
  let times = undefined
  for (const n of numbers) {
    if (previousNumber !== undefined) {
      if (times === undefined) {
        times = n / previousNumber
        if (!Number.isInteger(times)) return
      } else {
        if ((n / previousNumber) !== times || times === 1) return
      }
    }
    previousNumber = n
  }
  let result = ''
  for (let i = 1;i < 11;i++) {
    result += `${(numbers[numbers.length - 1] * times ** i).toString()} `
  }

  result = result.slice(0, -1)
  if (answersSet) {
    answersSet.add(result)
  } else {
    return result.split(' ')
  }
  return null
}

exports.diagnoseArithmeticSequence = function diagnoseArithmeticSequence (numbers, answersSet) {

  let previousNumber = undefined
  let diff = undefined
  for (const n of numbers) {
    if (previousNumber !== undefined) {
      if (diff === undefined) {
        diff = n - previousNumber
        if (diff < 0) return
      } else {
        if ((n - previousNumber) !== diff) return
      }
    }
    previousNumber = n
  }
  let result = ''
  for (let i = 1;i < 11;i++) {
    result += `${(numbers[numbers.length - 1] + i * diff).toString()} `
  }
  result = result.slice(0, -1)
  if (answersSet) {
    answersSet.add(result)
  } else {
    return result.split(' ')
  }
}