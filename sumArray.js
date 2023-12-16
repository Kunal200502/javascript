const numbers = [5, 7, 9, 11, 89, 23, 37]


function sumArray(array){
    let text = 0
    for (let x of array){
        text += x
    }
    return text
}
console.log(sumArray(numbers))

