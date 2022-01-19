export function repeatWord(word, count) {
	let result = '';
	if(isNaN(count)) return 'Счетчик не число'
	for (let i = 1; i <= count; i++) {
		result += word + i + ', ';
	}
	return result;
}

