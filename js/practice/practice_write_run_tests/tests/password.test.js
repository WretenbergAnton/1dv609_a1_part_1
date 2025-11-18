import { describe, it, expect} from 'vitest'
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
//import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
    const myPassword = 'mysecurepassword123'
    const password = new Password(myPassword)

    it('Check if the password is hashed', () => {
        const hashedPassword = password.getPasswordHash()

        expect(hashedPassword).not.toBe(myPassword)
    })

    //Add your tests here
});