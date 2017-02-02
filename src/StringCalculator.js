module.exports = class StringCalculator{
  constructor(){

  }

  add(stringNumber){
    if(stringNumber){
      const numbers  = stringNumber.split(',')
      return numbers.reduce((total, number) =>  total+=parseInt(number), 0)
    }
    
    return ""
  }
}