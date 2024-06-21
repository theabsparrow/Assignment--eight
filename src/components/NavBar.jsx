import { MdOutlineMenu } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {

    const [showing, setShowing] = useState(false);
    console.log(showing)

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center px-1 lg:px-[130px] mt-6 lg:mt-11 font-work relative">
            <div onClick={() => setShowing(!showing)} className="lg:hidden text-3xl absolute left-6 top-9">
                {
                    showing === true ? <RxCross2></RxCross2> : <MdOutlineMenu></MdOutlineMenu>
                }

            </div>
            <div className="ml-6 lg:ml-0">
                <Link to='/' className="text-[#131313] text-[56px] font-bold leading-[84px] no-underline"> Book Vibe
                </Link>
            </div>

            <div className={`lg:flex items-center gap-6 space-y-4 lg:space-y-0 absolute left-3 lg:left-0 top-[64px] lg:top-0 ${showing ? '' : 'hidden'} lg:relative border-[1px] border-[#23BE0A] p-3 rounded-xl lg:border-none`}>

                <div>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-white font-semibold ' : 'text-lg leading-[21px] bg-white font-semibold text-black'}> Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/listedBooks' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-white font-semibold ' : 'text-lg leading-[21px] bg-white font-semibold text-black'}> Listed Books
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/pagesToRead' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-xl text-lg lg:leading-[21px] py-2 px-1 lg:px-3 lg:py-3 bg-white font-semibold' : 'text-lg leading-[21px] bg-white font-semibold text-black'}> Pages to Read
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/buyBooks' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-white font-semibold ' : 'text-lg leading-[21px] bg-white font-semibold text-black'}>
                        Buy Books
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/writers' className={({ isActive }) => isActive ? 'text-[#23BE0A] border-[1px] border-[#23BE0A] rounded-xl text-lg lg:leading-[21px] px-2 py-1 lg:px-3 lg:py-3 bg-white font-semibold ' : 'text-lg leading-[21px] bg-white font-semibold text-black'}>
                        Writers
                    </NavLink>
                </div>
            </div>

            <div className="space-x-12 lg:space-x-4 ml-10 lg:ml-0 mt-6 lg:mt-0">
                <a href=""><button className="bg-[#23BE0A] text-white font-semibold text-lg border-none py-4 px-7 rounded-xl">Sign In</button></a>
                <a href=""><button className="bg-[#59C6D2] text-white font-semibold text-lg border-none py-4 px-7 rounded-xl">Sign Up</button></a>
            </div>

        </div>
    );
};

export default NavBar;