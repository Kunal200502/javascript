let l1 = [1, 4, 2, 3, 5, 7, 6, 8, 9, 11, 10, 15, 13, 12, 17, 20, 16, 19, 18]


function findMissingNumber(org_list){
    let missing_num = 0
    for (let i = 1; i<=org_list.length + 1; i++){
        if (org_list.includes(i)){
            continue
        }
        else{
            missing_num = i
            break
        }
        
    }
    return missing_num
}

console.log(findMissingNumber(l1))
