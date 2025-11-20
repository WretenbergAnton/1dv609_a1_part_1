import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelpe Tests', () => {

    test('SSNHelper_Allow_Day_From_1-31_Days', () => {
        const helper = new SSNHelper()

        expect(helper.isValidDay('1')).toBe(true)
        expect(helper.isValidDay('31')).toBe(true)
    })

    //Add your tests here
});