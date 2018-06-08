/*

Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

*/

let sortByStrings = (s, t) => {
  let sMap = {};
  let sortedString = '';
  // for (let i = 0; i < t.length; i++) {
  //   for (let j = 0; j < s.length; j++) {
  //     if (t[i] === s[j]) sortedString += s[j];
  //   }
  // }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!sMap[char]) {
      sMap[char] = 1;
    } else {
      sMap[char]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    let numChar = sMap[t[j]];
    while (numChar) {
      sortedString += t[j];
      numChar--;
    }
  }
  console.log(sortedString);
}

sortByStrings('weather', 'therapyw');
sortByStrings('good', 'odg');
