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
};