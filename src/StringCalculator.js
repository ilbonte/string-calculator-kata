module.exports = class StringCalculator {
  constructor() {

  }

  add(stringNumber) {
    if (stringNumber.length === 0) {
      return ""
    }

    if (hasCustomDelimiters(stringNumber)) {
      stringNumber = normalizeInputString(stringNumber)
    }

    if (isValidInput(stringNumber)) {
      const numbers = extractNumbersFromString(stringNumber)
      return numbers.filter(numbesLowerThan(1000)).reduce((total, number) => total += parseInt(number), 0)
    } else {
      if (hasNegativeNumbers(stringNumber)) {
        return () => { throw new Error(`negatives not allowed: ${getNegativeNumbersFromString(stringNumber)}`) }
      }
      return () => { throw new Error('invalid input') }
    }
  }
}

function numbesLowerThan(expected) {
  return number => parseInt(number) < expected
}

function extractNumbersFromString(stringNumber){
  return stringNumber.replace('\n', ',').split(',')
}

function getNegativeNumbersFromString(stringNumber){
  return stringNumber.match(/-\d*/g).toString()
}

function hasNegativeNumbers(stringNumber){
  return /-\d*/.test(stringNumber)
}

function normalizeInputString(stringNumber){
  const customDelimiter = extractCustomDelimiter(stringNumber)
  return stringNumber.substr(4).replace(new RegExp(customDelimiter, 'g'), ',')
}

function extractCustomDelimiter(stringNumber){
  return stringNumber.match(/\/\/(.)\n.+/)[1]
}

function hasCustomDelimiters(string) {
  return /\/\/.\n.+/.test(string)
}

function isValidInput(string) {
  return /^\d+(([,\n]\d+)+|$)$/.test(string)
}