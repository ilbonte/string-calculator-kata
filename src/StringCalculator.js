module.exports = class StringCalculator{
  constructor(){

  }

  add(stringNumber){
    if(stringNumber){
      const numbers  = stringNumber.replace('\n',',').split(',')
      return numbers.reduce((total, number) =>  total+=parseInt(number), 0)
    }
    
    return ""
  }
}