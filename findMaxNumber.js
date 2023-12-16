const numbers = [5, 7, 9, 11, 89, 23, 37]


function max_num(array){
    let max = 0
    for (let x of array){
        if (x > max){
            max = x
        }
    }
    return max
}

console.log(max_num(numbers))
