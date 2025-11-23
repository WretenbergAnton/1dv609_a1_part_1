import { SSNHelper } from '../src/correct/SSNHelper';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
//import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn";
//import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';

describe("SSNHelpe Tests", () => {
  const helper = new SSNHelper()

  const correctFormat = "890201-3286";
  const wrongFormat = "123456-1234132";
  const invalidSSNs = ["1234567890", "123456-123", "123456-12345", ""]

  test("SSNHelper allow day from 1-31 days", () => {
    for (let days = 1; days <= 31; days++) {
      const isValid = helper.isValidDay(days)
      expect(isValid).toBeTruthy()
    }
  })

  test("SSNHelper do not allow month to be 0", () => {
    const isNotValid = helper.isValidMonth(0)
    expect(isNotValid).toBeFalsy()
  })

  test("SSNHelper allow month between 1-12", () => {
    for (let months = 1; months <= 12; months++) {
      const isValid = helper.isValidMonth(months)
      expect(isValid).toBeTruthy()
    }
  })

  test("The format of an SSN should be 123456-1234", () => {
    const isValid = helper.isCorrectFormat(correctFormat)
    expect(isValid).toBeTruthy()
  })

  test("The format of an SSN should allways be 123456-1234 if not throw error", () => {
    invalidSSNs.forEach((ssn) => {
      const isValid = helper.isCorrectFormat(ssn)
      expect(isValid).toBeFalsy()
    })
  })

  test('The length of a security number should be exactly 11', () => {
    const isValid = helper.isCorrectLength(correctFormat)

    expect(isValid).toBeTruthy()
  })

    test('The length of A security number should not be more then 11', () => {
    const isValid = helper.isCorrectLength(wrongFormat)

    expect(isValid).toBeFalsy()
  })

  test('Test if a security number is valid using luhn algorithm', () => {
    const result = helper.luhnisCorrect(correctFormat)

    expect(result).toBeTruthy()
  })
  //Add your tests here
});
