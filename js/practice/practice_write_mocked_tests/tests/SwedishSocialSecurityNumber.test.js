import { expect, jest } from '@jest/globals'


//import { SwedishSocialSecurityNumber } from "../src/correct/SwedishSocialSecurityNumber"
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoTrim'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberNoLuhn'
//import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecutityNumberWrongYear'

describe("SwedishSocialSecurityNumber Tests", () => {

  const correctFormat = "890201-3286"
  const correctFormatWithSpaces = " 890201-3286"
  const ssnWithInvalidLuhn = "890201-3285"

  let mockHelper
  
  beforeEach(() => {

   mockHelper = {
    isCorrectLength: jest.fn(),
    isCorrectFormat: jest.fn(),
    isValidMonth: jest.fn(),
    isValidDay: jest.fn(),
    luhnisCorrect: jest.fn(),
  }

})

  test('should throw if length is incorrect', () => {
    mockHelper.isCorrectLength.mockReturnValue(false)

    mockHelper.isCorrectFormat.mockReturnValue(true)

    expect(() => {
      new SwedishSocialSecurityNumber(correctFormat, mockHelper)
    }).toThrow("To short, must be 11 characters")
  })



})
