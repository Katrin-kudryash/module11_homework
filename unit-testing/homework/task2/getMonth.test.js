import {getMonth} from './getMonth'

describe('test for getMonth function', () => {

	it('should return month from 1 to 12', () => {
		let n = 7;
		expect(getMonth(n)).toBe('июль')
		});

		it('should return unknown if number equals 0', () => {
		let n = 0;
		expect(getMonth(n)).toBe('неизвестно')
		});

		it('should unknown if number > 12', () => {
		let n = 13;
		expect(getMonth(n)).toBe('неизвестно')
		});

		it('should unknown if number less than 1', () => {
		let n = -1;
		expect(getMonth(n)).toBe('неизвестно')
		});
	
});



