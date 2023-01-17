let palindrome = "Was it a car or a cat I saw";
let nonPalindrome = "I think it is a batman";

function palindromeTest(text) {
    let test = text.toLowerCase();
    test = test.replace(/ /g, "");
    let answer = (test.split("").reverse().join("") == test) ? true:false;
    return answer
}

console.log(palindromeTest(palindrome))
console.log(palindromeTest(nonPalindrome))