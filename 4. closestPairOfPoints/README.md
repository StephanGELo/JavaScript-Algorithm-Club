# Closest Pair of Points

The original source: https://en.wikipedia.org/wiki/Closest_pair_of_points_problem

Given an array of points [x, y], find the closest pair of points to the given point, target.
You may assume that there are only one closest pair of points.

```javascript
var points = [[1, 2], [3, -3], [-1, 2], [-4, 1], [2, 3], [0, 1], [1, -1], [3, -2]];
var target;


target = [3, -1];
closestPairOfPoints(points, target) // -> [3, -2]

target = [-2, -2];
closestPairOfPoints(points, target) // -> [-3, -3]

target = [-2, 3];
closestPairOfPoints(points, target) // -> [-1, 2]
```