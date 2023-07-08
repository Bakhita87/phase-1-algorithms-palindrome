function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  create a function that has a parameter word
  and return true if word is a palindrome, false otherwise
*/

/*
  Add a written explanation of your solution here
  to the problem statement
  and for the tests
  You can then run `node index.js` to view these console logs
  to help you debug your solution
  You can also run `node index.js` to view these console logs
  to help you debug your solution
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
   
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
