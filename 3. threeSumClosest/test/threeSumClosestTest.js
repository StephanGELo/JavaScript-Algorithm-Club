describe('3. threeSumClosest', function() {
	it('should return the sum of three integers that is closest to the target', function() {
		// https://leetcode.com/problems/3sum-closest/description/
		expect(threeSumClosest([-1, 2, 1, -4], 1)).to.equal(2);
		expect(threeSumClosest([-10, -2, 3, 9, 21], 8)).to.equal(10);
		expect(threeSumClosest([-12, 2, 0, -8, 10], -7)).to.equal(-6);
	});
});