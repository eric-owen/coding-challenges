/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.*/

const a = [3, 4]
const b = [3]
let newArr = []


// without filter
function arrayDiff(a, b) {
    for (i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            newArr.push(a[i])
        }
    }
    return newArr
}

// with filter 
function arrayDiffver2(a, b) {
    return a.filter(function (cur) {
        return !b.includes(cur)
    })
}


console.log(arrayDiff(a, b))
console.log(arrayDiffver2(a, b))