import { useState } from "react";
import { useEffect } from "react";
import { getWishBooks } from "../../layout/utilities/script";
import Wishlist from "../wishlist/Wishlist";

const Wishlists = () => {
    const [wishBooks, seTWishBooks] = useState([])
    useEffect(() => {
        const wishFromLocalStorage = getWishBooks()
        seTWishBooks(wishFromLocalStorage)
    }, [])
    return (
        <div>
            <div className="mt-12 space-y-6">
                {
                    wishBooks.map(wishBook => <Wishlist key={wishBook.bookId} wishBook={wishBook}></Wishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlists;