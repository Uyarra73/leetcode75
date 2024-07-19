// GUESS NUMBER HIGHER OR LOWER
//We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).

var guess = function(num) {};

var guessNumber = function(n) {
    let start = 0;
    let end = n;
  
  while (start <= end){
    let mid = start + Math.floor((end - start) / 2);
    let guessNum = guess(mid);
    
    if (guessNum === 0){
      return mid;
    } else if (guessNum === 1){
      start = mid + 1;
    } else {
      end = mid -1;
    } 
  }
};