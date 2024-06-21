import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="px-1 lg:px-[130px] h-screen">
            <div className=" border-[5px] border-red-300 rounded-xl flex flex-col items-center justify-center py-10 mt-[130px]">
                <h1 className="text-[60px] leading-[40px] font-bold">404</h1>
                <h1 className="text-[60px] leading-[40px] font-bold mt-8 text-red-400">oopps!!!!</h1>
                <h1 className="text-[40px] font-semibold leading-8 text-red-400 mt-8">Page Not Found</h1>
                <div className="mt-6">
                    <Link to='/'>
                        <button className="btn bg-primary text-xl font-semibold text-white"> Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;