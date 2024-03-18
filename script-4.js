function isHigher () {
    const numbers = [45, 80, 32, 100, 105];
     if (numbers.some((number) => number > 100)) {
        alert("There is a number that is bigger than 100 in array");
     }
}
isHigher(); 