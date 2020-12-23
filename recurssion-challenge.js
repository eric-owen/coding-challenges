// n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.



const arr = []

function count(n) {
    if (n <= 0) {
        return []
    } else {
        arr.push(n)
        count(n - 1)

    }
    return arr
}

console.log(count(6))


const newArr = []

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return []
    } else {
        newArr.push(startNum)
        rangeOfNumbers(startNum + 1, endNum)
    }

    return newArr


};

console.log(rangeOfNumbers(5, 12))