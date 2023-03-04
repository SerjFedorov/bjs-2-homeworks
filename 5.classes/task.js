class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, type = null, state = 100) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
    }

fix () {
    this.state = this.state * 1.5;
}
set state (fix) {
    if (fix < 0) {
    this._state = 0;
    }
    else if (fix > 100) {
    this._state = 100;
    } else {    
    this._state = fix;
    }
}
get state () {
    return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;  
        this.type = 'book';              
    }
};

class NovelBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
        super (name, releaseDate, pagesCount, author);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
        super (name, releaseDate, pagesCount, author);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor (name, releaseDate, pagesCount, author) {
        super (name, releaseDate, pagesCount, author);
        this.type = 'detective';
    }
};

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }


    findBookBy(type, value) {
        let book = this.books.find((book) => book[type] === value);
        return book || null;
    }
        
    giveBookByName(bookName) {
        let userBook = this.findBookBy('name', bookName);
        let indexBook = this.books.indexOf(userBook);
        if ( indexBook === -1 ) {  
        return null;
        }
        return this.books.splice(indexBook,1)[0];
    }
    // giveBookByName(bookName) {
    //     const book = this.findBookBy("name", bookName);
    //     if (!book) return null;
    //     this.books = this.books.filter((item) => item.name !== bookName);
    //     return book;
    //     }
}

class Student {
    constructor (name) {
        this.name = name;
        this.marks = {};
    }
    addMark(marks, subject) {
        if ( marks > 5 || marks < 2){
            return
        }
        if (this.marks[subject] == undefined) {
            this.marks[subject] = [];
        }        
        this.marks[subject].push(marks);
    }

    getAverageBySubject(subject) {
        if (this.marks[subject] == undefined) {
            return 0;
        }
        return this.marks[subject].reduce((acc, marks) => acc + marks/this.marks[subject].length, 0)
    }

    getAverage() {
        return Object.keys(this.marks).reduce((acc, subject) => this.getAverageBySubject(subject) / this.marks[subject].length + acc, 0)

    }
}






