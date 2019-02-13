var numList = []
for (i = 0; i < 100; i++){
    numList = numList.push(i+1);
    var fizzBuzzItem = numList[i];
    if (numList[i] % 15 === 0){
        numList[i] = "fizzbuzz";
    }
    else if (numList[i] % 5 === 0){
        numList[i] = "buzz";
    }
    else if (numList[i] % 3 === 0){
        numList[i] = "fizz";
    }
}

console.log(numList);