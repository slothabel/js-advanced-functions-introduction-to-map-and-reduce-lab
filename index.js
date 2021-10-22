function mapToNegativize(arr){
    let negs = []
    for(var i = 0; i < arr.length; i++) {
        negs.push(arr[i] * -1)
    }      
    return negs
}

function mapToNoChange(arr){
    let sameArr = []
    for(var i = 0; i < arr.length; i++) {
        sameArr.push(arr[i])
    }
    return sameArr
}

function mapToDouble(arr){
    let dubs = []
    for(var i = 0; i < arr.length; i++) {
        dubs.push(arr[i] * 2)
    }      
    return dubs
}

function mapToSquare(arr){
    let squared = []
    for(var i = 0; i < arr.length; i++) {
        squared.push(arr[i] * arr[i])
    }      
    return squared
}

function reduceToTotal(arr, total=0){
    // let total = 0
    // line above was for the "when not given a starting point" requirement
    // by making total=0 a default arg, it solved the second req of "when given a starting point"
    for(var i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

function reduceToAllTrue(arr){
    for(var i = 0; i < arr.length; i++){
        //remember, ! returns the opposite of the expression's truthiness
        //so, "if !false" would return true, making the "return false" run
        if (!arr[i]) return false
    }
    //the truthy values pass thru the above if statement, and reach this return statement
    return true
}

function reduceToAnyTrue(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[i]) return true
    }
    return false
}