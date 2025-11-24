| Version | SwedishSocialSecurityNumber | BuggySwedishSocialSecurityNumberNoLenCheck | BuggySwedishSocialSecurityNumberNoTrim | BuggySwedishSocialSecutityNumberNoLuhn | BuggySwedishSocialSecutityNumberWrongYear |
| --- | --- | --- | --- | --- | --- |
| should throw if length is incorrect | ✅ | ❌ | ✅ | ✅ | ✅ |
| should trim the whitespaces | ✅ | ✅ | ❌ | ✅ | ✅ |
| should not throw error when Luhn validation fails | ✅ | ✅ | ✅ | ❌ | ✅ |
| should get the correct year when the SSN is valid | ✅ | ✅ | ✅ | ✅ | ❌ | 
| should throw when incorrect format is inputed | ✅ | ✅ | ✅ | ✅ |✅ |
| should throw when incorrect day is inputed | ✅ | ✅ | ✅ | ✅ | ✅ |
| should throw when incorrect month is inputed | ✅ | ✅ |✅ | ✅ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 100% |