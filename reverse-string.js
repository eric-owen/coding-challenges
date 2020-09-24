// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

let stringy = 'hello my name is bobby'
let newArr = stringy.split(' ')
newArr.forEach(function (word, index) {
    if (word.length > 4) {
        newArr[index] = word.split('').reverse().join('')
    }
})
let result = newArr.join(' ')
console.log(result)
//stringy.replace(longWord, longWordReverse)
// let newArr = stringy.split(' ')
// let finalArr = []
// for(let i = 0; i < newArr.length; i++){
//     if (newArr[i].length > 4){
//         tempArr = newArr[i].split('')
//         anothaOne = tempArr.reverse()
//         newArr[i] = anothaOne.join('')
//     }
// }

// result = newArr.join(' ')

// console.log(result)