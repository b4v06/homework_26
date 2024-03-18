function findAuthor() {
    const books = [
        { title: 'Гаррі Поттер', author: 'Дж.К. Ролінг' },
        { title: '1984', author: 'Джордж Орвелл' },
        { title: 'Хоббіт', author: 'Дж.Р.Р. Толкієн' }
    ];
    books.some(function(book) {
        if (book.author == 'Джордж Орвелл') {
            alert("The book is called " + book.title + ". Its author is " + book.author);
        }
    });
}
findAuthor();