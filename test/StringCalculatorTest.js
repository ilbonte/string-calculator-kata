const {equal,throws} = require('assert')
const StringCalculator = require('../src/StringCalculator')

test("should return 0 for an empty string", function () {
  const calculator = new StringCalculator()

  const result = calculator.add("")

  equal(0, result)
})

test("should return the number passed if it's the only parameter", function () {
  const calculator = new StringCalculator()

  const result = calculator.add("1")

  equal(1, result)
})

test("should return the sum of the number passed as argument", function () {
  const calculator = new StringCalculator()

  const result = calculator.add("1,2,3,4")

  equal(10, result)
})

test("should calculate even if the delimiter is \\n", function(){
   const calculator = new StringCalculator()

  const result = calculator.add("1\n2,3")

  equal(6, result)
})

test("should throw an error if there are 2 delimiters one after the other", function(){
   const calculator = new StringCalculator()

  throws(calculator.add("1,\n"), Error)
})

test("should support custom delimiters", function(){
  const calculator = new StringCalculator()

  const result = calculator.add("//;\n1;2;3")

  equal(6, result)
})

test("should throw exception with negative number", function(){
  const calculator = new StringCalculator()

  throws(calculator.add("-1,2,-3"), /negatives not allowed: -1,-3/)
})

test("should ignore number greather than 1000", function(){
   const calculator = new StringCalculator()

  const result = calculator.add("2,1000")

  equal(2, result)
})