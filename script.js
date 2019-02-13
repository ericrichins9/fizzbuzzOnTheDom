
var fizzBuzzList = document.getElementById('fizzbuzz-list');
var numList = [];


for (var i = 0; i < 100; i++){
    addList(i, fizzBuzzList);
}

function addList(num,list){
    var newItem = document.createElement('div')
    newItem.classList.add('number');
    newItem.innerText = numList.push(i+1);
    if (newItem.innerText % 15 === 0) {
        newItem.innerText = "fizz \n buzz";
        
    }
    else if (newItem.innerText % 5 === 0){
        newItem.innerText = "buzz";
        
    }
    else if (newItem.innerText % 3 === 0){
        newItem.innerText = "fizz";
        
    }

    list.appendChild(newItem);
}

