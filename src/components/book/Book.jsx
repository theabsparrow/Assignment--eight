import PropTypes from 'prop-types';
import star from '../../assets/star.png'
import { Link } from 'react-router-dom';
const Book = ({ allbook }) => {
    // console.log(allbook);
    const { image, author, bookName, category, tags, rating, bookId} = allbook
    return (
        <Link to={`/allbook/${bookId}`}>
            <div className='p-6 rounded-xl border-[1px] border-[#13131326]'>
                <div className='flex justify-center'>
                    <img className='rounded-xl lg:h-[65vh] lg:w-[40vw]' src={image} alt="" />
                </div>
                <div className='mt-6 border-b-[2px] border-dashed border-[#13131326] pb-5'>
                    <div className='flex ml-4 gap-4'>
                        <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium font-work leading-[19px] px-4 py-2 rounded-3xl'>{tags[0]}</p>
                        <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium font-work leading-[19px] px-4 py-2 rounded-3xl'>{tags[1]}</p>
                    </div>
                    <div className='ml-4 mt-6'>
                        <h1 className='text-[24px] font-bold text-black font-playfair leading-[32px]'>{bookName}</h1>
                        <p className='leading-[19px] text-[#131313CC] font-medium font-work mt-4'>By : <span>{author}</span></p>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-5'>
                    <p className='leading-[19px] text-[#131313CC] font-medium font-work'>{category}</p>
                    <div className='flex flex-row items-center gap-3'>
                        <p className='leading-[19px] text-[#131313CC] font-medium font-work'>{rating}</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
Book.propTypes = {
    allbook: PropTypes.object
}
export default Book;