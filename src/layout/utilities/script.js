import toast from "react-hot-toast";


export const getWishBooks = () => {
let wishBooks = [];
const storedWishBooks  = localStorage.getItem('books');
if (storedWishBooks) {
    wishBooks = JSON.parse(storedWishBooks);
} 
return wishBooks;
}

export const saveWishBooks = (wishbook) => {
    const wishesbooks = getWishBooks();
    const isLocated = wishesbooks.find(b => b.bookId === wishbook.bookId);
    if (isLocated){
        return toast.error("Can't select a single item twice")
    }
    else{
      wishesbooks.push(wishbook)
      localStorage.setItem('wishBooks', JSON.stringify(wishesbooks))  
            return toast.success("successfully added to the wishbook page")
    }
}
