
import ReadBook from "./ReadBook";
const ReadBooks = ({books}) => {

    

   
    return (
        <div>
            <div className="mt-12 space-y-6">
                {
                    books.map((book) => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>

        </div>
    );
};

export default ReadBooks