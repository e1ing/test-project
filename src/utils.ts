// export function isPalindrome (phrase: string) {
//    const noSpacePhrase = phrase.split(" ").join("").toLowerCase();
//    let checkingPart = Math.trunc(noSpacePhrase.length/2)
//     for (let i = 0, j = noSpacePhrase.length-1; i<checkingPart; i++, j-- ) {
//       if (noSpacePhrase[i] !== noSpacePhrase[j]) return "The phrase is not a palindrome!"
//     }
//     return "The phrase is a palindrome!"
// } 

export function isPalindrome (phrase: string) {
   const inputPhrase = phrase.split(" ").join("").toLowerCase();
   const reversePhrase = inputPhrase.split("").reverse().join("");
   if (inputPhrase!==reversePhrase) return "The phrase is not a palindrome!"
   else return "The phrase is a palindrome!"
} 