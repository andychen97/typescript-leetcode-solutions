// /*
// - remove fix all spacing with 1 space using regex
// - split the string by space
// - return length of last word
// */
// function lengthOfLastWord(s: string): number {
//     const arr : Array<string> = s.replace(/^\s+|\s+$/g,'').split(' ');
//     return arr[arr.length - 1].length;
    
// };

/*
- remove only spacing from the sides
- split the string by space
- return length of last word
*/
function lengthOfLastWord(s: string): number {
    const arr : Array<string> = s.trim().split(' ');
    return arr[arr.length - 1].length;
    
};