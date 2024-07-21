// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    // Numeric sort of potions array
    let sortedPotions = potions.sort((a, b) => a - b);
    
    // Declaring a new empty array to store the results
    let result = [];

    // Iterate the spells array
    for (let i = 0; i < spells.length; i++) {
        let spell = spells[i];
        let start = 0;
        let end = sortedPotions.length - 1;
        let count = 0;
        //let strength = Math.ceil(success / spell);
        
        // Binary search through the sortedPotions array
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (spell * sortedPotions[mid] >= success) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        count = sortedPotions.length - start;
        result.push(count);
    }
    
    return result;
};