const checkInput = require('./checkInput')
const { diagnoseArithmeticSequence, diagnoseGeometricProgression } = require('./basicCalculator')
const { diagnoseSequenceInDiff } = require('./complexCalculator')
const { diagnoseFibonacci } = require('./specialCalculator')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(
    'please input numbers in the form of integers separated by space, eg."2 4 6"\n# one space between each number\n# input with increasing integers\n-> ',
  numbers => {
    diagnose(numbers)
    readline.close();
  }
);

function diagnose (numbers) {
  try {

    const numberArray = checkInput(numbers)

    const answersSet = new Set()
    diagnoseArithmeticSequence(numberArray, answersSet)
    diagnoseGeometricProgression(numberArray, answersSet)

    if (!answersSet.size) {
      diagnoseSequenceInDiff(numberArray, answersSet)
      if (numberArray.length > 2) diagnoseFibonacci(numberArray, answersSet)
    }

    const answer = [...answersSet]
    if (answer.length) {
      console.log(`"${numbers}" of possible patterns:`)
      for (const a of answer) {
        console.log('->', a)
      }
    } else {
      console.log('There are no matched possible patterns')
    }

    return
  } catch (error) {
    if(!error) {
      console.log('error!!')
    } else {
      console.log(error.showError())
    }
  }
}

exports.diagnose = diagnose


