
import Dropdown from "../components/dropdown/Dropdown";
import ReadBooks from "../components/readBooks/ReadBooks";
import { useEffect, useState } from "react";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Wishlists from "../components/wishlists/Wishlists";
import { getBooks } from "../layout/utilities";
const ListedBooks = () => {
    const [sortValue, setSortValue] = useState('');

    const [readBooks, setReadBooks] = useState([])
    useEffect(() => {
        const booksFromLocalStorage = getBooks()
        setReadBooks(booksFromLocalStorage);
    }, [])


    useEffect(() => {
        let output = [...readBooks]
        if (sortValue === 'rating') {
            output.sort((a, b) => b.rating - a.rating)
        }
        else if (sortValue === 'page') {
            output.sort((a, b) => b.totalPages - a.totalPages)

        }
        else if (sortValue === 'year') {
            output.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        setReadBooks(output)
    }, [sortValue])
    useEffect(() => {
       
    }, [readBooks])
    const handleSort = (e) => {
        setSortValue(e.target.value)
    }

    

    return (
        <div className="px-1 lg:px-[130px] mt-9">

            <div className="bg-[#1313130D] -py-1 lg:py-4 rounded-xl flex justify-center">
                <h1 className="text-[28px] font-work font-bold leading-[33px]">Books</h1>
            </div>

            <div className="mt-8 flex justify-center">
                <Dropdown handleSort={handleSort} sortValue={sortValue} ></Dropdown>
            </div>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <ReadBooks books={readBooks}></ReadBooks>
                    </TabPanel>
                    <TabPanel>
                        <Wishlists></Wishlists>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default ListedBooks;