import { createBrowserRouter } from "react-router-dom"
import Layout from "../../layout/Layout"
import Home from "../../pages/Home"
import ListedBooks from "../../pages/ListedBooks"
import BookCard from "../../pages/BookCard"
import PagesToRead from "../../pages/PagesToRead"
// import ReadBooks from "../readBooks/ReadBooks"
// import Wishlists from "../wishlists/Wishlists"
import ErrorPage from "../errorPage/ErrorPage"
import BuyBooks from "../../pages/BuyBooks"
import Writers from "../../pages/Writers"


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        // children: [
        //   {
        //     index: true,
        //     element: <ReadBooks></ReadBooks>,
        //   },
        //   {
        //     path: 'wishlist',
        //     element: <Wishlists></Wishlists>
        //   }
        // ],
      },
      {
        path: '/allbook/:bookId',
        element: <BookCard></BookCard>,
        loader: () => fetch('../book.json')
      },
      {
        path: '/pagesToRead',
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: '/buyBooks',
        element: <BuyBooks></BuyBooks>,
      },
      {
        path: '/writers',
        element: <Writers></Writers>,
      }
    ]
  }
])