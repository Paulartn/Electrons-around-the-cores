// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if(string_numbers === '')
	{
		return 0;
	} 
	else
	{
		let numbers = string_numbers.split(',');
		let sum = 0;

		for (let i = 0; i < numbers.length; i++)
		{
			let value = parseInt(numbers[i], 10);

			if (!isNaN(value))
			{
				sum += value;
			}
		}
		return sum;
	}
	
};
