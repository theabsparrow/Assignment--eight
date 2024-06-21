
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Writers = () => {
    const [bookwriters, setBookwriters] = useState([]);
useEffect(() => {
    fetch('book.json')
    .then(response => response.json())
    .then(data => setBookwriters(data))
},[])
    return (
        <div className="px-1 lg:px-[130px] mt-[120px] lg:mt-12 flex flex-col items-center h-[75vh]">
            <h1 className="text-[45px] font-extrabold leading-[36px] text-center">You can find your favorite writer here</h1>
            <div className="mt-6 text-3xl font-bold leading-6 h-[70vh]">
                
                {
                    bookwriters.map((bookwriter,index) => <Link key={index} to={`/allbook/${bookwriter.bookId}`}> <li className="mt-7 hover:text-blue-500">{bookwriter.author}</li></Link>)
                }
               
            </div>




            
        </div>
    );
};

export default Writers;