import { SSNHelper } from '../src/correct/SSNHelper';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';
//import { SSNHelper } from "../src/bugs/BuggySSNHelperMessyLuhn";
//import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength';

describe("SSNHelper Tests", () => {
  const helper = new SSNHelper();

  const correctFormat = "890201-3286";
  const wrongFormat = "123456-1234132";
  const invalidSSNs = ["1234567890", "123456-123", "123456-12345", ""];

  test("should allow days from 1 to 31", () => {
    for (let days = 1; days <= 31; days++) {
      const isValid = helper.isValidDay(days);
      expect(isValid).toBeTruthy();
    }
  });

  test("should not allow month to be 0", () => {
    const isNotValid = helper.isValidMonth(0);
    expect(isNotValid).toBeFalsy();
  });

  test("should allow months between 1 and 12", () => {
    for (let months = 1; months <= 12; months++) {
      const isValid = helper.isValidMonth(months);
      expect(isValid).toBeTruthy();
    }
  });

  test("should accept SSN format 123456-1234", () => {
    const isValid = helper.isCorrectFormat(correctFormat);
    expect(isValid).toBeTruthy();
  });

  test("should reject incorrect SSN formats", () => {
    invalidSSNs.forEach((ssn) => {
      const isValid = helper.isCorrectFormat(ssn);
      expect(isValid).toBeFalsy();
    });
  });

  test("should accept length of exactly 11 characters", () => {
    const isValid = helper.isCorrectLength(correctFormat);
    expect(isValid).toBeTruthy();
  });

  test("should reject SSNs longer than 11 characters", () => {
    const isValid = helper.isCorrectLength(wrongFormat);
    expect(isValid).toBeFalsy();
  });

  test("should validate a correct SSN using the Luhn algorithm", () => {
    const result = helper.luhnisCorrect(correctFormat);
    expect(result).toBeTruthy();
  });

});
