function arePositive() {
    const nums = [1, 2, 3, 4, 5, -6, 7];
    if (nums.every(number => number > 0)) {
        alert("All number are positive");
    } else {
        alert("There is one or more negative numbers");
    }
}
arePositive();