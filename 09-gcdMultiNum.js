/* Write a program  find GCD of the array elements given an array of numbers */

const findGcd = (a,b) => {
    if (b === 0) {
        return a
    }
    return findGcd(b, a % b)
}

arr = [100, 95, 55, 25, 20]

//Using array reduce method

const findGcdArr = arr => {
    return arr.reduce(findGcd)

}



console.log(findGcdArr(arr))


// Without using reduce array method & building one of our own

const reduce = (callback, arr) => {
    let value = arr[0]
    for (let i=0; i < arr.length; i++) {
        let currentValue = arr[i]
        value = callback(value, currentValue)
    }
    return value
}

console.log(reduce(findGcd, arr))