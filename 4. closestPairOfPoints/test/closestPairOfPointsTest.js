describe('4. closestPairOfPoints', function() {
	it('should return the closest pair of points to the target', function() {
		var points = [[1, 2], [3, -3], [-1, 2], [-4, 1], [2, 3], [0, 1], [1, -1], [3, -2]];
		var target;

		target = [3, -1];
		expect(closestPairOfPoints(points, target)).to.eql([3, -2]);

		target = [-2, -2];
		expect(closestPairOfPoints(points, target)).to.eql([-3, -3]); 

		target = [-2, 3];
		expect(closestPairOfPoints(points, target)).to.eql([-1, 2]);
	});
});