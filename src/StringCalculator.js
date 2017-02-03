module.exports = class StringCalculator {
  constructor() {

  }

  add(stringNumber) {
    if (stringNumber) {
      if (hasCustomDelimiters(stringNumber)) {
        const customDelimiter = stringNumber.match(/\/\/(.)\n.+/)[1]
        stringNumber = stringNumber.substr(4).replace(new RegExp(customDelimiter, 'g'), ',')
      }

      if (isValidInput(stringNumber)) {
        const numbers = stringNumber.replace('\n', ',').split(',')
        return numbers.reduce((total, number) => total += parseInt(number), 0)
      } else {
        if(/-\d*/.test(stringNumber)){
          return () => { throw new Error(`negatives not allowed: ${stringNumber.match(/-\d*/g).toString()}`) }        
        }
        return () => { throw new Error('invalid input') }
      }
    }

    return ""
  }
}

function hasCustomDelimiters(string){
  return /\/\/.\n.+/.test(string)
}

function isValidInput(string){
 return /^\d+(([,\n]\d+)+|$)$/.test(string)
}