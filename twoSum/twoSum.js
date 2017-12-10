// Original Source: https://leetcode.com/problems/two-sum/description/

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numsArray, target) {
  var hashTable = {};
  var currNum;
  var complement;

  for (var i = 0; i < numsArray.length; i++) {
    currNum = numsArray[i];
    complement = target - currNum;

    if (hashTable[complement] !== undefined) {
      return [hashTable[complement], i];
    }

    hashTable[currNum] = i;
  }
  return [];
}