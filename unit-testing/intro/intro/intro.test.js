const {sum, nativeNull} = require('../intro/intro');

describe('Sum function:', () => {
	test('should return sum of two values', () => {
	expect(sum(1, 3)).toBe(4)
	expect(sum(1, 3)).toEqual(4)
	});

	test('should return vallue correctly comparing to other', () => {
		expect(sum(2, 3)).toBeGreaterThan(4)
		expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
		expect(sum(2, 3)).toBeLessThan(10)
		expect(sum(2, 3)).toBeLessThanOrEqual(5)
	});

	test('schould sum 2 float values correctly', () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
	});
});

describe('Native null function:', () => {
	test('should return false value null', () => {
		// мы ожидаем, что функция NativeNull вернет null и этот результат должен быть null
		expect(nativeNull()).toBe(null) 
		expect(nativeNull()).toBeNull()
		expect(nativeNull()).toBeFalsy() //undefined, null, 0, '' эти значения, если поместим в if то не сработают
		expect(nativeNull()).toBeDefined()
		expect(nativeNull()).not.toBeTruthy() //не undefined, не null,  не 0,  не ''
		expect(nativeNull()).not.toBeUndefined() 
});
});
