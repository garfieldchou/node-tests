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
