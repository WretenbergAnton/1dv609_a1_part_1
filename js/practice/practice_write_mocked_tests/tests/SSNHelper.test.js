//import { SSNHelper } from '../src/correct/SSNHelper';
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'; 
//import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0';
import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat';




describe('SSNHelpe Tests', () => {

    const helper = new SSNHelper()

    const correctFormat = '123456-1234'
    const invalidSSNs = [
        '1234567890',
        '123456-123',
        '123456-12345',
        ''
    ]

    test('SSNHelper Allow Day From 1-31 Days', () => {
        for(let days = 1; days <= 31; days++) {
            const isValid = helper.isValidDay(days)
            expect(isValid).toBeTruthy()
        }
    })

    test('SSNHelper Do Not Allow Month To Be 0', () => {
        const isNotValid = helper.isValidMonth(0)
        expect(isNotValid).toBeFalsy()
    })

    test('SSNHelper Allow Month Between 1-12', () => {
        for(let months = 1; months <= 12; months++) {
            const isValid = helper.isValidMonth(months)
            expect(isValid).toBeTruthy()
        }
    })

    test('The Format Of An SSN Should Be 123456-1234', () => {
        const isValid = helper.isCorrectFormat(correctFormat)
        expect(isValid).toBeTruthy()
    })

    test('The Format Of An SSN Should Allways Be 123456-1234 If Not Throw Error', () => {
        invalidSSNs.forEach(ssn => {
            const isValid = helper.isCorrectFormat(ssn)
            expect(isValid).toBeFalsy()
        })
    })



    //Add your tests here
});