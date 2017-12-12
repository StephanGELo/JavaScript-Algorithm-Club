describe('5. closestPairOfPointsWithLimitedMemory', function() {
  var randomlyGenerateThousandPoints = function() {
    return;
  };
  
  var points = randomlyGenerateThousandPoints();
  var target;
  var sizeLimit;
  var answer;

  it('should return the closest pair of points', function() {
    target = [2, 4];
    answer = closestPairOfPoints(points, target);
    sizeLimit = 50;
    expect(closestPairOfPointsWithLimitedMemory(points, target, sizeLimit)).to.eql(answer);

    sizeLimit = 100;
    expect(closestPairOfPointsWithLimitedMemory(points, target, sizeLimit)).to.eql(answer);

    sizeLimit = 200;
    expect(closestPairOfPointsWithLimitedMemory(points, target, sizeLimit)).to.eql(answer);
  });
});