const sentence = "i went to Australia and i saw a shark"

/*
Challenge:
    1. Change the lowercase i’s to uppercase.
*/

let newSentence = sentence.replace(`i `, "I");
console.log(newSentence);
console.log(sentence);

// Solution 2 - using regex
let newSentence2 = sentence.replace(/i /g, "I ");
console.log(newSentence2);