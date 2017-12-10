describe('2. threeSum', function() {
	it('should return indicies of three numbers such that they add up to a specific target', function() {
		expect(threeSum([1, 3, 6, 11, 19], 10).sort()).to.eql([0, 1, 2]);
		expect(threeSum([-9, -2, 3, 11, 17], 5).sort()).to.eql([0, 2, 3]);
		expect(threeSum([1, 10, 100, 1000, 10000], 1110).sort()).to.eql([1, 2, 3]);
	});

	it('should return an empty array if no three numbers add up to a specific target', function() {
		expect(threeSum([3, 9, 16, 22, 43], 42)).to.eql([]);
		expect(threeSum([-11, -4, -1, 2, 7, 12], 1)).to.eql([]);
		expect(threeSum([1, 10, 100, 1000, 10000], 1111)).to.eql([]);
	});
});