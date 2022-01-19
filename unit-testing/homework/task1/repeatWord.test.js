import {repeatWord} from './repeatWord.js'

describe('test for repeatWord function', () => {

	it('should return count is not a number', () => {
		let result = repeatWord('слово', 'text');
		let resultTest = 'Счетчик не число';
		expect(result).toBe(resultTest)
		
		});

	it('should return resultTest: слово1, слово2, слово3,', () => {
		let result = repeatWord('слово', 3);
		let resultTest = `слово1, слово2, слово3, `;
		expect(result).toBe(resultTest)
		});
});


