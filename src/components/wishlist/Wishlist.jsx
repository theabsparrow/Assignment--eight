import PropTypes from 'prop-types';
import locateImage from '../../assets/location.png'
import publisherName from '../../assets/publisher.png'
import AllPages from '../../assets/page.png'
import { Link } from 'react-router-dom';

const Wishlist = ({wishBook}) => {
    const { image, bookName, author, category, yearOfPublishing, tags, totalPages, rating, publisher, bookId } = wishBook;
    return (
        <div className='flex justify-center items-center'>
            <div className="px-4 py-4 rounded-xl border-[1px] border-[#13131326] flex flex-col lg:flex-row justify-center gap-5 lg:gap-10 lg:w-[62vw]">
                <div>
                    <img className='lg:h-[40vh] h-[50vh] w-[70vw] lg:w-auto rounded-xl' src={image} alt="" />
                </div>
                <div>
                    <div className='border-b-[1px] border-[#13131326] lg:pr-[100px] pb-5'>
                        <h1 className='text-[24px] font-bold leading-8'>{bookName}</h1>
                        <p className='leading-[19px] text-[#131313CC] font-medium mt-5'> By : <span>{author}</span></p>

                        <div className="flex flex-col lg:flex-row gap-2 mt-5">
                            <div className='flex gap-3 items-center'>
                                <p className="font-bold text-lg font-work leading-[23px]">Tag</p>
                                <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium font-work leading-[19px] px-4 py-2 rounded-3xl'>
                                    #{tags[0]}
                                </p>
                                <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium font-work leading-[19px] px-4 py-2 rounded-3xl'>
                                    #{tags[1]}
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <img src={locateImage} alt="" />
                                </div>
                                <p className='leading-[19px] text-[#131313CC] font-medium font-work'>Year of publishing : {yearOfPublishing}</p>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row gap-5 mt-5'>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={publisherName} alt="" />
                                </div>
                                <p className='leading-[19px] text-[#131313CC] font-medium font-work'>publisher : <span>{publisher}</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div>
                                    <img src={AllPages} alt="" />
                                </div>
                                <p className='leading-[19px] text-[#131313CC] font-medium font-work'>Page : <span>{totalPages}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='font-work lg:leading-[19px] flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 mt-6'>
                        <div className='flex gap-4 items-center justify-center lg:justify-start'>
                            <div className='bg-[#328EFF26] py-3 px-4 rounded-xl'>
                                <p className='text-[#328EFF]'>Category : <span>{category}</span></p>
                            </div>
                            <div className='bg-[#FFAC3326] py-3 px-4 rounded-xl'>
                                <p className='text-[#FFAC33]'>Rating : {rating}</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Link to={`/allbook/${bookId}`}>
                                <button className="btn bg-[#23BE0A] text-white font-semibold text-lg rounded-xl border-none"> View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Wishlist.propTypes = {
    wishBook: PropTypes.object
}
export default Wishlist;