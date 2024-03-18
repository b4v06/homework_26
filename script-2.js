function newArray() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let newNumbers = [];
    numbers.some(function (number) {
        if (Number.isInteger(number / 2)) {
            newNumbers.push(number);
        }
    });
    alert("New array is: " + newNumbers);
}
newArray();