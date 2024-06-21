import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks } from "../layout/utilities";
import { saveWishBooks } from "../layout/utilities/script";

const BookCard = () => {
    const bookCards = useLoaderData();
    const { bookId } = useParams();
    
    const bookCard = bookCards.find(bookCard => bookCard.bookId === bookId);
   
    const { image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = bookCard;


    const handleReadButton = (bookCard) => {
        saveBooks(bookCard);
    }
    const handleWishListButton = (bookCard) => {
        saveWishBooks(bookCard);
    }
    return (
        <div className="flex justify-center mt-12">
            <div className="lg:px-[130px] px-1 flex flex-col lg:flex-row -gap-5 lg:gap-5">

                <div className="bg-[#1313130D] p-8 rounded-xl">
                    <img className="w-[80vw] h-[60vh] lg:w-[30vw] lg:h-[65vh] rounded-xl" src={image} alt="" />
                </div>

                <div className="px-4 pb-4 w-[80vw] lg:w-[40vw]">
                    <div className="border-b-[1px] border-[#13131326] pb-5">
                        <h1 className="text-[40px] font-bold leading-[53px] font-playfair mb-4">{bookName}</h1>
                        <p className="text-[#131313CC] font-medium font-work text-lg leading-[23px]">By : {author}</p>
                    </div>
                    <div className="px-4 border-b-[1px] border-[#13131326] mt-4 pb-4">
                        <p className="text-[#131313CC] font-medium font-work text-lg leading-[23px]">{category}</p>
                    </div>
                    <div className="mt-6 border-b-[1px] border-[#13131326] pb-4">
                        <p className="font-bold text-lg font-work leading-[23px]">Review : <span className="text-[#131313CC] font-medium">{review}</span></p>
                        <div className="mt-6 flex items-center gap-4">
                            <p className="font-bold text-lg font-work leading-[23px]">Tag</p>
                            <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium font-work leading-[19px] px-4 py-2 rounded-3xl'> #{tags[0]}</p>
                            <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium font-work leading-[19px] px-4 py-2 rounded-3xl'> #{tags[1]}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <table>
                            <tr className="pb-3">
                                <td className="text-[#131313CC] font-medium font-work text-lg leading-[23px]">Number of Pages:</td>
                                <td className="font-bold text-lg font-work leading-[23px] pl-10">{totalPages}</td>
                            </tr>
                            <tr className="pb-3">
                                <td className="text-[#131313CC] font-medium font-work text-lg leading-[23px]">Publisher:</td>
                                <td className="font-bold text-lg font-work leading-[23px] pl-10">{publisher}</td>
                            </tr>
                            <tr className="pb-3">
                                <td className="text-[#131313CC] font-medium font-work text-lg leading-[23px]">Year of Publishing:</td>
                                <td className="font-bold text-lg font-work leading-[23px] pl-10">{yearOfPublishing}</td>
                            </tr>
                            <tr className="pb-3">
                                <td className="text-[#131313CC] font-medium font-work text-lg leading-[23px]">Rating:</td>
                                <td className="font-bold text-lg font-work leading-[23px] pl-10">{rating}</td>
                            </tr>
                        </table>
                    </div>
                    <div className="mt-4 space-x-4">
                        <button onClick={() => handleReadButton(bookCard)} className="bg-white border-[1px] border-[#131313CC] font-bold text-lg font-work leading-5 py-[18px] px-[28px] rounded-xl hover:bg-[#23BE0A] hover:text-white hover:border-none">Read</button>
                        <button onClick={() => handleWishListButton(bookCard)} className="bg-[#50B1C9] border-[1px] border-[#50B1C9] font-bold text-lg font-work leading-5 py-[18px] px-[28px] rounded-xl text-white border-none hover:border-none hover:bg-[#23BE0A]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;