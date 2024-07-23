var reverseVowels = function (s) {
  // Define vowels as "aeiouAEIOU"
  let vowels = "aeiouAEIOU";
  // Convert s to a list of characters (s_list)
  let sArray = s.split("");

  // Initialize left pointer to 0
  let left = 0;
  // Initialize right pointer to length of s_list - 1
  let right = sArray.length - 1;

  // While left < right:
  while (left < right) {
    // Move the left pointer until a vowel is found
    while (left < right && !vowels.includes(sArray[left])) {
      // Increment left pointer
      left++;
    }

    // Move the right pointer until a vowel is found
    while (left < right && !vowels.includes(sArray[right])) {
      // Decrement right pointer
      right--;
    }

    // Swap the vowels found at the left and right pointers
    if (left < right) {
      [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
      // Increment left pointer
      left++;
      // Decrement right pointer
      right--;
    }
  }

  // Convert the list of characters back to a string
  let result = sArray.join("");
  // Return the joined s_list as a string
  return result;
};
