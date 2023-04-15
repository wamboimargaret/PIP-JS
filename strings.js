// Write a function that takes a string as input and returns the length of the string.
function lengthOfString(str){
return str.length;
}
let str = "Lets learn Javascript today";
let getStr =  lengthOfString(str);
console.log(getStr);
// Write a function that takes a string as input and returns the string in uppercase letters.
function capitalLetters(text){
    return text.toUpperCase();
}
let text = "Lets learn Javascript today";
let word = capitalLetters(text);
console.log(word);


// Write a function that takes a string as input and returns the string in lowercase letters.
function smallLetters(names){
    return names.toLowerCase();
}
let names =  "Lets learn Javascript today";
let result = smallLetters(names);
console.log(result);


// Write a function that takes a string as input and returns the last character of the string.
function lastWord(laststr){
    return laststr.charAt(laststr.length -1);
}
let laststr = "Lets learn Javascript today"
let final = lastWord(laststr);
console.log(final);

// Write a function that takes two strings as input and concatenates them together.

function concatenateString(name1,name2){
let result1 = name1 + name2;
console.log(result1);
}
concatenateString("Hello"," world")
