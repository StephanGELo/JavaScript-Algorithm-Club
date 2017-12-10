# threeSum problem

Given an array of integers, return indices of the three numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Return an empty array if no three numbers add up to a specific target.

```javascript
threeSum([1, 3, 6, 11, 19], 10) // -> [0, 1, 2]
threeSum([-9, -2, 3, 11, 17], 5) // -> [0, 2, 3]
threeSum([1, 10, 100, 1000, 10000], 1110) // -> [1, 2, 3]

threeSum([3, 9, 16, 22, 43], 42) // -> []
threeSum([-11, -4, -1, 2, 7, 12], 1) // -> []
threeSum([1, 10, 100, 1000, 10000], 1111) // -> []
```

time complexity goal: O(nlog_n)

space complexity goal: O(n)

