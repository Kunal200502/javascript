n1 = ['a', 'b', 'c', 'a', 'd', 'e', 'f', 'g', 'd', 'f', 'f']

function findDuplicates(org_set){
    const new_set = []
    const duplicate_set = []
    for (let x of org_set){
        if(new_set.includes(x)){
            duplicate_set.push(x)
        }
        else{
            new_set.push(x)
        }
    }
    return duplicate_set
}

console.log(findDuplicates(n1))

