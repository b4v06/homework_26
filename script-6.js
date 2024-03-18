function countWords() {
    const sentences = ["JavaScript цікавий", "Масиви це корисно", "Вивчайте програмування щодня"];
    let count = 0;
    for (let item of sentences) {
        item = item.split(" ");
        for (let i = 0; i < item.length; i++) {
            count++;
        }
    }
    alert("There are " + count + " words in the array");
}

countWords();