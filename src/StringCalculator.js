module.exports = class StringCalculator{
  constructor(){

  }

  add(stringNumber){
    if(stringNumber){
      
      if(/^\d+(([,\n]\d+)+|$)$/.test(stringNumber)){
        const numbers  = stringNumber.replace('\n',',').split(',')
        return numbers.reduce((total, number) =>  total+=parseInt(number), 0)
      }else{
        return () => { throw new Error('invalid input')}
      }
      
    }
    
    return ""
  }
}