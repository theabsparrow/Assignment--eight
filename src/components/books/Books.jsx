import { useEffect, useState } from "react";
import Book from "../book/Book";


const Books = () => {
    const [allbooks, setAllbooks] = useState([]);


    useEffect(() => {
        fetch('book.json')
        .then(response => response.json())
        .then(data => setAllbooks(data))
    },[])
    
    return (
        <div className="px-1 lg:px-[130px] mt-12">
            <h1 className="text-[40px] font-playfair font-bold leading-[53px] text-[#131313] text-center mb-9"> Books : <span>{allbooks.length}</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {
                    allbooks.map(allbook => <Book key={allbook.bookId} allbook= {allbook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;