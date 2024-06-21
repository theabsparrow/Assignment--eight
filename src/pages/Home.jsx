import Banner from "../components/banner/Banner";
import Books from "../components/books/Books";

const Home = () => {

    
    return (
        <div>
            <div className="mt-[120px] lg:mt-12">
                <Banner></Banner>
            </div>
            <div>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;