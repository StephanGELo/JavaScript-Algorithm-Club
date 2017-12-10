describe('1. Two Sum', function() {
	it('should return indices of two numbers such that they add up to a specific target', function() {
		// https://leetcode.com/problems/two-sum/description/
		expect(twoSum([2, 7, 11, 15], 9)).to.eql([0, 1]);
		expect(twoSum([1, 4, 9, 11, 13], 14)).to.eql([1, 13]);
		expect(twoSum([3, 9, 11, 100, 129], 20)).to.eql([9, 11]);
		expect(twoSum([100, 1000, 10000, 100000]), 11000).to.eql([1000, 10000]);
	});
});