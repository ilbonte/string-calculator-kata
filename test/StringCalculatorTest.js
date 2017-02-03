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