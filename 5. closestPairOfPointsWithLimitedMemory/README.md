# Closest Pair Of Points With Limited Memory

Please proceed to this problem after solving "4. closestPairOfPoints".

The challenge is same as #4.  However in this problem, you have memory constrain.
The test will create 1000 points randomly, and the objective of the challenge is to find the closest pair of points using array or object with size contraint.  The challenge will test how to divide the problem into smaller sets to achieve the overall objective. 

```javascript
var points = randomlyGenerateThousandpoints();
var target; 
var sizeLimit;


target = [2, 5];
sizeLimit = 10;
closestPairOfPoints(points, target, sizeLimit); // -> [,] (x, y) coordinate 

target = [2, 9];
sizeLimit = 50;
closestPairOfPoints(points, target, sizeLimit); // -> [,] (x, y) coordinate

target = [1, 1];
sizeLimit = 100;
closestPairOfPoints(points, target, sizeLimit); // -> [,] (x, y) coordinate
```

The test will not validate whether or not you applied memory constrain, so this is entirely on the user's decision to apply different the size.

time complexity goal: O(nlog_n)
space complexity goal: O(1) -> size of the array or the object