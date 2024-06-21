import toast from "react-hot-toast";


export const getBooks = () => {
let books = [];
const localStorageBooks  = localStorage.getItem('books');
if (localStorageBooks) {
    books = JSON.parse(localStorageBooks);
} 
return books;
}

export const saveBooks = (book) => {
    const books = getBooks();
    const isPresent = books.find(b => b.bookId === book.bookId);
    if (isPresent){
        return toast.error("Can't select twice")
    }
    else{
      books.push(book)
      localStorage.setItem('books', JSON.stringify(books))  
            return toast.success("successfully added to the reading page")
    }
}