| Version | Correct | BugDoesNotHash | BugDoesNotTrim | BugisPasswordAlwaysSame | BugMissingNumberCheck | BugMissingPasswordCheck | BugNeverContainsNumbers | BugToShortPassword | BugVeryShort | BugWrongHashingAlgorithm | BugWrongMessage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| should hash the password | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |  | ✅ | ✅ | ✅ |
| should trim whitespace from password | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |  | ✅ |✅ | ✅ | ✅ |
| should return false when comparing different passwords | ✅ | ✅ | ✅ | ❌ | ✅ |✅ |  | ✅ | ✅ | ✅ | ✅ |
| should throw error if password has no numbers | ✅ | ✅ | ✅ | ✅ | ❌ |✅ |  | ✅ | ✅ | ✅ | ✅ |
| should accept password with numbers | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |  | ✅ | ✅ | ✅ | ✅ |
| should require password to be at least 12 characters long | ✅ | ✅ | ✅ | ✅ |✅ | ❌ |  | ✅ | ❌ | ✅ | ❌ |
| should reject password with 11 characters | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |  | ❌ | ❌ | ✅ | ❌ |
| should reject password with 4 characters | ✅ | ✅ |✅ | ✅ | ✅ | ❌ |  | ✅ | ❌ | ✅ | ❌ |
| should generate different hashes for different passwords | ✅ | ✅ |✅ | ✅ | ✅ | ✅ |  | ✅ | ✅ | ❌ | ✅ |
| should throw correct error message for short password | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |  |✅ | ✅ | ✅ | ❌ |
| Coverage | 100% | 100% | 100% | 100% | 93.33% | 93.33% | 0 | 100% | 100% | 100% | 100% |