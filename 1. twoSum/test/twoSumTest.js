describe('1. Two Sum', function() {
	it('should return indices of two numbers such that they add up to a specific target', function() {
		// https://leetcode.com/problems/two-sum/description/
		expect(twoSum([2, 7, 11, 15], 9).sort()).to.eql([0, 1]);
		expect(twoSum([1, 4, 9, 11, 13], 14).sort()).to.eql([0, 4]);
		expect(twoSum([3, 9, 11, 100, 129], 20).sort()).to.eql([1, 2]);
		expect(twoSum([100, 1000, 10000, 100000], 11000).sort()).to.eql([1, 2]);
		expect(twoSum([-10, -3, 0, 3, 8], -2).sort()).to.eql([0, 4]);
	});

	it('should return an empty array if no two numbers add up to a specific target', function() {
		expect(twoSum([1, 2, 3, 4, 5, 6], 20)).to.eql([]);
		expect(twoSum([1, 10, 100, 1000, 10000], 20)).to.eql([]);
		expect(twoSum([-10, -3, -1, 5, 10], -8)).to.eql([]);
	}); 
});
