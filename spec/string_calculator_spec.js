describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return number for single number string', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should return sum of 2 numbers', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});

	it('should return sum of 2 numbers', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should return sum of 3 numbers', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});

	it('should return sum of 4 numbers', function() {
		expect(calculator.add('1,5,27,45')).toEqual(78);
	});

	it('should return sum of multiple numbers', function() {
		expect(calculator.add('1,10,100,1000,10000')).toEqual(11111);
	});

	it('should ignore input of characters', function() {
		expect(calculator.add('1,A,')).toEqual(1);
	});
});
