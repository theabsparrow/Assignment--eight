import { useEffect, useState } from "react";
import BuyTheBook from "../components/buyTheBook/BuyTheBook";


const BuyBooks = () => {

    const [allbooks, setAllbooks] = useState([]);


    useEffect(() => {
        fetch('book.json')
        .then(response => response.json())
        .then(data => setAllbooks(data))
    },[])

    return (
        <div className="px-1 lg:px-[130px]">
            <div className="mt-[120px] lg:mt-12 space-y-6">
                {
                    allbooks.map(allbook => <BuyTheBook key={allbook.bookId} allbook= {allbook}></BuyTheBook>)
                }
            </div>
        </div>
    );
};

export default BuyBooks;