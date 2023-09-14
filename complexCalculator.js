const { diagnoseArithmeticSequence, diagnoseGeometricProgression } = require('./basicCalculator')

exports.diagnoseSequenceInDiff = function diagnoseSequenceInDiff (numbers, answersSet) {
  if (answersSet.size) return
  if (numbers.length < 3 || numbers[0] === numbers[1]) return

  const diffArray = []

  for (let i = 1;i < numbers.length;i++) {
    diffArray.push(numbers[i] - numbers[i - 1])
  }

  buildSequenceInDiffResult(
    answersSet,
    numbers,
    [
      diagnoseGeometricProgression(diffArray),
      diagnoseArithmeticSequence(diffArray)
    ])
}

function buildSequenceInDiffResult (answersSet, numbers, plusArrays) {
  for (const array of plusArrays) {
    if (array) {
      let lastNumber = numbers[numbers.length - 1]
      result = ''
      for (let plus of array) {
        plus = parseInt(plus)
        result += `${(lastNumber + plus).toString()} `
        lastNumber += plus
      }
      result = result.slice(0, -1)
      answersSet.add(result)
    }
  }
}
