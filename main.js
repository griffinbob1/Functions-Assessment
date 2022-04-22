
function firstLetterName(yourName) {
    firstNameLetter = yourName[0];

    alert("The name " + yourName + " starts with the letter " + firstNameLetter )
    console.log(firstNameLetter);
}


function divisibleByTwo(x) {
num = (x % 2);
if (num == 0){
    console.log("even");
    return true;
} else {
    console.log("odd");
    return false;
}
}


function largestNum(myArray) {
    biggestNum = null;
for (var i = 0; i < myArray.length; i++) {
    if (i === 0){
        biggestNum = myArray[i];
        console.log(biggestNum);
    } else if (myArray[i] > biggestNum){
        biggestNum = myArray[i];
        console.log(biggestNum);
    }
    }
    return biggestNum;
}

console.log("First Letter Name Function:")
firstLetterName("Griffin");
console.log("Divisible By Two Function:")
divisibleByTwo(13);
console.log("Largest Num Function:")
largestNum([1,54,765,3,76,900]);