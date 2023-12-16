let str1 = "ajklkja"


function isPallindrome(org_str){
    let rev_string = ""
    for(var i = org_str.length - 1; i>= 0; i--){
        rev_string += org_str[i]
    }
    
    if(rev_string == org_str){
        return "Palindrome"
    }
    else{
        return "Not Palindrome"
    }
}

console.log(isPallindrome(str1))