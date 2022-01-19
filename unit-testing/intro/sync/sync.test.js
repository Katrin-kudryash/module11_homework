const Lodash = require("./sync.js")

let _ = new Lodash
describe('Lodash: compact', () => {
	
	let array

	//мы можем в одном тест-кейсе затронуть глобальную зависимость, которая повлияет на другие тесты и это не правильно и если мы используем хук beforEach и перед каждыс тест-кейсом мы говорим, что у каждой переменной будет такое-т значение, то тогда тесты не будут зависеть от других тестов - хорошая практика
	beforeEach(() => {
		array = [false, 42, 0, '', true, null, 'hello']
	});

	afterAll( () => { 
		const _ = new Lodash()
	});
	
	test('should be defined', () => {
		expect(_.compact).toBeDefined()
		expect(_.compact).not.toBeUndefined()
	});
	test('should working array be editable', () => {
		array.push(...['one', 'two'])
		expect(array).toContain('one')
		expect(array).toContain('two')
	});

	test('should remove falsy values from array', () => {  
		const result = [42, true, 'hello']
		expect(_.compact(array)).toEqual(result) //метчер toBe отличается от метчера toEqual тем, что toBe работает с примитивами (строками, числа и тд), а toEqual используют если хотят сравнивать более сложные значения (массивы, объекты)
	});

	test('should NOT contain falsy values', () => {
		expect(_.compact(array)).not.toContain(false)
		expect(_.compact(array)).not.toContain(0)
		expect(_.compact(array)).not.toContain('')
		expect(_.compact(array)).not.toContain(null)
	});
})


describe('Lodash: groupBy', () => {
	test('should be defined', () => {
		expect(_.groupBy).toBeDefined()
		expect(_.groupBy).not.toBeUndefined()
	});

	test('should group array items by Math.floor', () => {
		const array = [2.2, 2.4, 4.2, 3.1]
		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1]
		}
		expect(_.groupBy(array, Math.floor)).toEqual(result)
	});

	test('should group array items by length', () => {
		const array = ['one', 'two', 'three']
		const result = {
			5: ['three'],
			3: ['one', 'two']
		}
		expect(_.groupBy(array, 'length')).toEqual(result)
	});

	test('should NOT return array', () => {
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
	});
})

