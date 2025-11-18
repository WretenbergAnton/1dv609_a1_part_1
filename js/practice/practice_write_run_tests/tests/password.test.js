// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
//import { Password } from '../src/BugDoesNotTrim'
//import { Password } from '../src/BugisPasswordAlwaysSame'
//import { Password } from '../src/BugMissingNumberCheck'
//import { Password } from '../src/BugMissingPasswordCheck'
//import { Password } from '../src/BugNeverContainsNumbers'
//import { Password } from '../src/BugToShortPassword'
//import { Password } from '../src/BugVeryShort'
//import { Password } from '../src/BugWrongHashingAlgorithm'
 import { Password } from '../src/BugWrongMessage'
//import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const pw1 = 'mysecurepassword123'
    const password1 = new Password(pw1)

    test('Check if the password is hashed', () => {
        const hashedPassword = password1.getPasswordHash()

        expect(hashedPassword).not.toBe(pw1)
    })

    test('check if the trim works', () => {
        const pwWithSpaces = new Password(' mysecurepassword123 ')
        expect(pwWithSpaces.isPasswordSame(password1)).toBe(true)
    })

    test('Check if the password is allways the same', () => {
        const newPassword = new Password('wrongpassword123')
        expect(newPassword.isPasswordSame(password1)).toBe(false)
    })

    test('Check if number is required in a password', () => {
        expect(() => new Password('passwordwithnonumbers')).toThrow('No number found')        
    })

    test('Check if a password needs to be at least 12 long', () => {
        expect(() => new Password('shortpw8')).toThrow("Too short password")
    })

    test('Check if password is below 11 charachters', () => {
        expect(() => new Password('password123')).toThrow('Too short password')
    })

    test('Check if password is below 6 charachters', () => {
        expect(() => new Password('pw12')).toThrow('Too short password')
    })

    test('Check if the hashingalgoritm is giving higher numbers then 5', () => {
        const hash = password1.getPasswordHash()
        expect(hash).toBeGreaterThan(4)
    })

    test('Check if the Error message is "Too short password"', () => {
        expect(() => new Password('asklfjd')).toThrow('Too short password')
    })
    //Add your tests here
});