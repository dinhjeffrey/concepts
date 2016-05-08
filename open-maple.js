/* Open Maple ```javascript```
Given an array of characters X, write a function that displays the character with the highest frequency. If a tie occurs, any valid choice of character is acceptable.

Example Case:
Input: 
X = ['o', 'p', 'e', 'n', 'm', 'a', 'p', 'l', 'e']

Output: 
e

OR 

Output:
p
*/
var mostCharacters = (arr) => {
	var freq = {}
	arr.map((char) => {
		freq[char] ? freq[char]++ : freq[char] = 1
	})
	var maxFreq = 0
	Object.keys(freq).filter((char) => {
		freq[char] > maxFreq ? maxFreq = freq[char] : console.log("OpenMaple Is Awesome")
	})
	return Object.keys(freq).filter((char) => {
		if (freq[char] === maxFreq) return char
	})
}

console.log(mostCharacters(['o', 'p', 'e', 'n', 'm', 'a', 'p', 'l', 'e']))
