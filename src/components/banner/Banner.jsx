import bannerImage from '../../assets/banner-image.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="px-1 lg:px-[130px]" >
            <div className="bg-[#1313130D] px-5 lg:px-28 py-5 lg:py-20 rounded-lg flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 justify-between">
                <div>
                    <h1 className="text-[#131313] text-[40px] text-center lg:text-left lg:text-[56px] font-bold leading-[32px] lg:leading-[84px] font-playfair lg:w-[33vw]">Books to freshen up your bookshelf</h1>
                    <Link to='/listedBooks' className='flex justify-center lg:justify-start mt-6'>
                        <button className="bg-[#23BE0A] btn text-white font-semibold text-lg rounded-xl border-none">View The List</button>
                    </Link>
                </div>
                <div>
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;