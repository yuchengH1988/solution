exports.diagnoseFibonacci = function diagnoseFibonacci (numbers, answersSet) {
  for (let i = 2;i < numbers.length;i++) {
    if (numbers[i] !== (numbers[i - 1] + numbers[i - 2])) return
  }
  result = ''
  let lastOne = numbers[numbers.length - 1]
  let lastTwo = numbers[numbers.length - 2]
  for (let i = 0;i < 10;i++) {
    const sum = lastOne + lastTwo
    result += `${sum.toString()} `
    lastTwo = lastOne
    lastOne = sum
  }
  result = result.slice(0, -1)
  answersSet.add(result)
}
