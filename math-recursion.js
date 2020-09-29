let math = function (a) {
    let sum = a - 2
    if (sum === 1){
        console.log('this is odd')
    } else if (sum === 0){
        console.log('this is even')
    
    } else {
        math(sum)
    }
}

math(28)
math(5)
math(357)
math(4264)