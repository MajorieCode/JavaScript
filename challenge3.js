function myArray(arr){
    let even = []
    let odd = []
    let char = []

    for (let counter=0; counter <= arr.length -1; counter ++){
        if (arr[counter] % 2 == 0){
            even.push(arr[counter])
            even.sort(function(a,b) {
                return a - b;
            })
            console.log('evens.')
        }

        else if (arr[counter] % 2 == 1){
            odd.push(arr[counter])
            odd.sort(function(a,b) {
                return a - b;
            })
            console.log('Odds.')
        }

        else if{
            char.push(arr[counter])
            char.sort(function(a,b) {
                return a - b;
            })
            console.log('Chars.')
        }
    }
}