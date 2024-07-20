// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length;
    let left = 0;
    let right = len -1;
    let refIndex = -1;
 
    while(left <= right){
     let mid = left + Math.floor((right - left) /2);
 
     if(mid == len -1 || nums[mid] > nums[mid +1]){
         refIndex = mid;
         right = mid -1;
     } else {
         left = mid + 1;
     }
    }
    
    return refIndex; 
 };