// Select one of the Password versions to test

//import { Password } from '../src/Correct'

//import { Password } from '../src/BugDoesNotHash'
//import { Password } from '../src/BugDoesNotTrim'
//import { Password } from '../src/BugisPasswordAlwaysSame'
//import { Password } from '../src/BugMissingNumberCheck'
//import { Password } from '../src/BugMissingPasswordCheck'
import { Password } from '../src/BugNeverContainsNumbers'
//import { Password } from '../src/BugToShortPassword'
//import { Password } from '../src/BugVeryShort'
//import { Password } from '../src/BugWrongHashingAlgorithm'
//import { Password } from '../src/BugWrongMessage'

describe('Password class, test suite', () => {
    // Constants for readability
    const pw1 = 'mysecurepassword123'
    const password1 = new Password(pw1)

    test('should hash the password', () => {
        const hashedPassword = password1.getPasswordHash()
        expect(hashedPassword).not.toBe(pw1)
    })

    test('should trim whitespace from password', () => {
        const pwWithSpaces = new Password(' mysecurepassword123 ')
        expect(pwWithSpaces.isPasswordSame(password1)).toBe(true)
    })

    test('should return false when comparing different passwords', () => {
        const secondPassword = new Password('secondpw12345')

        const arePasswordsTheSame = password1.isPasswordSame(secondPassword)

        expect(arePasswordsTheSame).toBeFalsy()
    })

    test('should throw error if password has no numbers', () => {
        expect(() => new Password('passwordwithnonumbers')).toThrow('No number found')        
    })

    test('should not throw error for valid password', () => {
        expect(() => new Password('validpassword123')).not.toThrow()
    })

    test('should require password to be at least 12 characters long', () => {
        expect(() => new Password('shortpw8')).toThrow('Too short password')
    })

    test('should reject password with 11 characters', () => {
        expect(() => new Password('password123')).toThrow('Too short password')
    })

    test('should reject password with 4 characters', () => {
        expect(() => new Password('pw12')).toThrow('Too short password')
    })

    test('should generate different hashes for different passwords', () => {
        const pw1 = new Password('firstpw123456')
        const pw2 = new Password('secondpw12345')
        expect(pw1.getPasswordHash()).not.toBe(pw2.getPasswordHash())
    })

    test('should throw correct error message for short password', () => {
        expect(() => new Password('short1')).toThrow('Too short password')
    })

    test('should throw "Invalid argument" when comparing with non-Password object', () => {
        expect(() => password1.isPasswordSame('wrongPw')).toThrow('Invalid argument')
    })
});