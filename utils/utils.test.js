const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);

	expect(res).toBe(44).toBeA('number');
});

it('should sqaure a number', () => {
	var res = utils.square(3);

	expect(res).toBe(9).toBeA('number');
});

it('should expect some values', () => {
	// expect(12).toNotBe(12);
	// expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
	// expect([2,3,4]).toExclude(5);
	expect({
		name: 'Andrew',
		age: 25,
		location: 'Philadelphia'
	}).toExclude({
		age: 23
	});
});