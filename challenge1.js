function fizzBUZZ({stringOne, stringTwo}){
    let combinedLength = stringOne.length + stringTwo.length

    if (combinedLength % 5 === 0 && combinedLength % 3 === 0) {
        return('fizzBuzz')
    console.log("fizzBuzz")


    } else if (combinedLength % 3 === 0 ) {
        return ('fizz')
        console.log ("fizz")
    }

    } else if (combinedLength % 5 === 0 ) {
        return ('buzz')
        console.log ("buzz")
    }