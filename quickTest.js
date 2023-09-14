const { diagnose } = require('./solution')

main()

function main () {
  diagnose('4 14')
  diagnose('23 33 43')
  diagnose('2 4')
  diagnose('4 14 34')
  diagnose('2 3 5')
  diagnose('1 1 2')
  diagnose('1 2 4 8 16')
}