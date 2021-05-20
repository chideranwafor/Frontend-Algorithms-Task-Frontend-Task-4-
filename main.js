// Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
function convertFahrToCelsius(f) {
    let type = Array.isArray(f) ? 'array' : typeof f;
    let c = (f - 32) * 5 / 9;

    if (type !== 'string' && type !== 'number') {
        let returnVal = type === 'array' ? `[${f}]` : JSON.stringify(f)
        return `${returnVal} is not a valid number but a/an ${type}`;
    } else {
        return c.toFixed(4)
    }
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({temp: 0}));

// Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.
function checkYuGiOh(n) {
    let array = [];
    
    // for string that can't be converted to a number or another data type
    if (isNaN(n)) {
        return `invalid parameter: ${n}`
    }

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            array.push("yu-gi");
        } else if (i % 2 == 0 && i % 5 == 0) {
            array.push("yu-oh");
        }  else if (i % 3 == 0 && i % 5 == 0) {
            array.push("gi-oh");
        }  else if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            array.push("gi-oh");
        } else if (i % 5 == 0) {
            array.push("oh");
        } else if (i % 2 == 0) {
            array.push("yu");
        } else if (i % 3 == 0){
            array.push("gi");
        } else {
            array.push(i);
        }
    }
    return array
}

console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))
