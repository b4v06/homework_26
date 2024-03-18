function increasePrice () {
    const prices = [100, 200, 300, 400, 500];
    for (let i = 0; i < prices.length; i++) {
        prices[i] = Number.parseInt(prices[i] * 1.1);
    }
    alert("New array is: " + prices);
}
increasePrice();