| Version | Correct | BuggySSNHelperAllowDayUpTo30 | BuggySSNHelperAllowMonth0 | BuggySSNHelperIncorrectFormat | BuggySSNHelperMessyLuhn | BuggySSNHelperWrongLength |
| --- | --- | --- | --- | --- | --- | --- |
| should allow days from 1 to 31 | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| should not allow month to be 0 | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| should allow months between 1 and 12 | ✅ | ✅ | ✅ | ✅ | ✅ |✅ |
| should accept SSN format 123456-1234 | ✅ | ✅ | ✅ | ✅ | ✅ |✅ |
| should reject incorrect SSN formats | ✅ | ✅ | ✅ | ❌ |✅ | ✅ |
| should accept length of exactly 11 characters | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| should reject SSNs longer than 11 characters | ✅ | ❌ |✅ | ✅ | ✅ | ❌ |
| should validate a correct SSN using the Luhn algorithm | ✅ | ✅ |✅ | ✅ | ❌ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 100% | 100% |