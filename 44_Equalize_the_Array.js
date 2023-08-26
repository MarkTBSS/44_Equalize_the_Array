function equalizeArray(arr) {
    var numberObject = {}
    for (var i = 0; i < arr.length; i++) {
        if (numberObject[arr[i]] === undefined) {
            numberObject[arr[i]] = 1; 
        } else {
            numberObject[arr[i]]++;
        }

        var maxValue = 0
        var mostValueKey = ''
        for (var key in numberObject) {
            if (numberObject[key] > maxValue) {
                maxValue = numberObject[key]
                mostValueKey = key
            }
        }
    }

    return arr.length - maxValue
}

var arr = [4, 4, 2, 3]
console.log(equalizeArray(arr))