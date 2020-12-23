const titleCase = (a, b) => {
    let tempArr = a.split(' ')
    let finalString = a
    let minWords = (b) ? b.split(' ') : null
    let title = (a) ? a.split(' ') : null
    let lowerWords

    if (b) {
        lowerWords = minWords.map(word => {
            return word.toLowerCase()
        })
    }

    tempArr.forEach(word => {
        finalString = finalString.replace(word, word.toLowerCase())
    })

    if (!title) {
        return ''
    }

    for (word of title) {
        if (minWords === null || !lowerWords.includes(word.toLowerCase())) {
            let temp = word[0].toUpperCase()
            if (!word[1]) {
                finalString = finalString.replace(word, temp)
            }
            for (i = 1; i < word.length; i++) {
                temp = temp + word[i].toLowerCase()
                if (temp.toLowerCase() === word.toLowerCase()) {
                    finalString = finalString.replace(word.toLowerCase(), temp)
                }

            }
        }
    }

    if (finalString[0]) {
        finalString = finalString.replace(finalString[0], finalString[0].toUpperCase())
    }

    console.log(finalString)
    return finalString
}

titleCase("First a of in", "an often into") //  Expected "First A Of In" 
titleCase("aBC deF Ghi") //Expected "Abc Def Ghi" 
titleCase("ab", "ab") // Expected "Ab" 
titleCase("First a of in", "an often into") // Expected "First A Of In"
titleCase("a clash of KINGS", "a an the OF") // Expected "A Clash of Kings"
titleCase("the QUICK bRoWn fOX", "xyz fox quick the") // Expected "The quick Brown fox"